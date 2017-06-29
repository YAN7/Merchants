/*
 * @Author: heyuhang
 * @Date:   2017-06-27 16:02:28
 * @Last Modified by:   heyuhang
 * @Last Modified time: 2017-06-28 17:36:36
 */

'use strict';

/**
 * 网络请求封装类
 */
"use strict";

import hexMd5 from "md5";
import queryString from "query-string";

import { APP_KEY, BASE_URL } from "../globalconfig.js";
import Storage from './storage';

// import { redirectLogin, toastMsg } from '../app';

const STATE_SUCCESS = 1;
const STATE_FAILURE = 0;
const DEBUG_MODE = true; //true时返回的错误都会在log显示
const AUTH_NAME = 'gp_auth';

const Http = {
    get: function(extraUrl, onSuccess, onFail, onFinal) {
        let url = extraUrl.indexOf("http") >= 0 ? extraUrl : BASE_URL + extraUrl;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (typeof onSuccess == 'function') { onSuccess(responseJson); }
            })
            .catch((error) => {
                typeof onFail == 'function' ? onFail(error) : console.warn(error);
            })
            .finally(() => {
                typeof onFinal == 'function' && onFinal();
            });

    },
    //onMistake:在请求成功链接但与接口对接错误时执行
    post: function(extraUrl, postData, onSuccess, onFail, onFinal, onMistake) {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: queryString.stringify(this.getPostParam(postData))
        };
        //判断是否是完整的url
        let url = extraUrl.indexOf("http") >= 0 ? extraUrl : BASE_URL + extraUrl;
        fetch(url, config)
            .then((response) => response.json())
            .then((reJson) => {
                if (reJson.state == STATE_FAILURE) { //state为0的时候,这里可以写入各种返回码统一的处理
                    DEBUG_MODE && console.log(reJson);
                    //重复登录的情况下跳转登录页面
                    if (reJson.code == 308) {
                        Storage.delete(AUTH_NAME);
                        // redirectLogin();
                    }
                    // toastMsg(reJson.msg);
                    typeof onMistake == 'function' && onMistake(reJson);
                    return;
                }
                typeof onSuccess == 'function' ? onSuccess(reJson) : console.warn('success callback is not a function');
            })
            .catch((error) => {
                typeof onFail == 'function' ? onFail(error) : console.warn(error);
            })
            .finally(() => {
                typeof onFinal == 'function' && onFinal();
            });
    },
    postWithAuth: function(extraUrl, postData, onSuccess, onFail, onFinal, onMistake, isHtml) {
        Storage.get(AUTH_NAME)
            .then((value) => {
                if (value) {
                    let auth = {
                        uid: value.uid,
                        token: value.token
                    };
                    Object.assign(postData, auth);
                    return new Promise((resolve) => resolve(postData));
                } else {
                    console.log('未登录');
                    return new Promise((reject) => reject(postData));
                }
            }).then((value) => {
                //如果是要获取html的话最后一个参数传true
                if (isHtml) {
                    this.getHtml(extraUrl, value, onSuccess, onFail, onFinal);
                } else {
                    this.post(extraUrl, value, onSuccess, onFail, onFinal, onMistake)
                }
            });
    },
    /**
     *使用fetch发送post请求并返回一个promise对象
     * @param {string} [extraUrl] 接口地址 从?开始 （例子?c=user&a=login 不要包括最后面的'&'）
     * @param {object} [postData] 额外的参数
     * @return {object} promise
     */
    postPromise: function(extraUrl, postData) {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: queryString.queryString(this.getPostParam(postData))
        };
        //判断是否是完整的url
        let url = extraUrl.indexOf("http") >= 0 ? extraUrl : BASE_URL + extraUrl;
        return new Promise((resolve, reject) => {
            fetch(url, config)
                .then((response) => response.json())
                .then((reJson) => {
                    if (reJson.state == STATE_FAILURE) { //state为0的时候,这里可以写入各种返回码统一的处理
                        DEBUG_MODE && console.log(reJson);
                        // toastMsg(reJson.msg);
                        return;
                    }
                    resolve(reJson);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    /**
     *使用fetch + FormData对象来上传单张图片
     * @param {string} [extraUrl] 接口地址 从?开始 （例子?c=user&a=login 不要包括最后面的'&'）
     * @param {string} [key] 图片的参数名称，根据实际情况来填
     * @param {object} [source] 图片对象，直接使用imagePicker返回的对象即可
     * @param {object} [postData] 额外的参数
     * @param {function} [onSuccess] 成功的回调
     */
    postImage: function(extraUrl, key, source, postData, onSuccess, onFail, onFinal) {

        postData = this.getPostParam(postData);
        let formData = new FormData();
        formData.append(key, {
            uri: source.uri,
            type: 'application/octet-stream',
            name: `gp${postData.time}.jpg`
        });
        for (let key in postData) {
            formData.append(key, postData[key]);
        }

        console.log(formData);

        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        }
        let url = extraUrl.indexOf("http") >= 0 ? extraUrl : BASE_URL + extraUrl;
        fetch(url, config)
            .then((response) => response.json())
            .then((reJson) => {
                typeof onSuccess == 'function' ? onSuccess(reJson) : console.warn('success callback is not a function');
            })
            .catch((error) => {
                console.warn(error);
                // typeof onFail == 'function' ? onFail(error) : console.warn(error);
            }).finally(() => {
                typeof onFinal == 'function' && onFinal();
            });
    },
    //带登录信息的单张上传图片
    postImageWithAuth: function(extraUrl, key, source, postData, onSuccess, onFail, onFinal) {

        Storage.get(AUTH_NAME)
            .then((value) => {
                if (value) {
                    let auth = {
                        uid: value.uid,
                        token: value.token
                    };
                    Object.assign(postData, auth);
                    return new Promise((resolve) => resolve(postData));
                } else {
                    console.warn('未登录');
                    return new Promise((reject) => reject(postData));
                }
            }).then((value) => {
                this.postImage(extraUrl, key, source, postData, onSuccess, onFail, onFinal);
            });
    },
    //获取html
    getHtml: function(extraUrl, postData, onSuccess, onFail, onFinal) {
        var config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*, text/html',
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: queryString.stringify(this.getPostParam(postData))
        };
        //判断是否是完整的url
        var url = extraUrl.indexOf("http") >= 0 ? extraUrl : BASE_URL + extraUrl;
        fetch(url, config)
            .then((response) => response.text())
            .then((responseText) => {
                if (typeof onSuccess == 'function') { onSuccess(responseText); }
            })
            .catch((error) => {
                typeof onFail == 'function' ? onFail(error) : console.warn(error);
            })
            .finally(() => {
                typeof onFinal == 'function' && onFinal();
            });
    },
    getPostParam: function(postData) {
        postData.time = +new Date();
        postData.app_key = APP_KEY;
        delete postData.sign;
        var arr = [];
        for (var i in postData) {
            arr.push(i + '=' + encodeURIComponent(postData[i]));
        }
        arr.sort();
        var result = arr.join('&');
        postData.sign = hexMd5(result);
        delete postData.app_key;
        return postData;
    },
}

export default Http;
