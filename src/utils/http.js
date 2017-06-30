/*
* @Author: heyuhang
* @Date:   2017-06-28 10:43:59
* @Last Modified by:   heyuhang
* @Last Modified time: 2017-06-30 14:44:44
*/

'use strict';

import md5 from "md5";
import queryString from "query-string";

import { APP_KEY, BASE_URL } from "../globalconfig";

const FAILURE_STATE = 0;
const SUCESS_STATE = 1;
const IS_DEV = true;

const Http = {
	getPostParam(postData) {
		postData.time = + new Date();
		postData.app_key = APP_KEY;
		delete postData.sign;
		let arr = [];
		for (let i in postData) {
			arr.push(`${i}=${encodeURIComponent(postData[i])}`);
		}
		arr.sort();
		const result = arr.join("&");
		postData.sign = md5(result);
		delete postData.app_key;
		return postData;
	},

	/**
	 * onSuccess: 处理state == 1 的回调
	 * onMistake: 处理state == 0 的回调
	 * onFail: 处理网络请求失败的回调
	 * onFinal: 处理最后执行的回调的回调
	 */

	async post(extraUrl, postData, onSuccess, onFail, onFinal, onMistake) {
		const config = {
			method: "post",
			headers: {
				"Accept": "application/json, text/plain, */*",
				"Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
			},
			body: queryString.stringify(this.getPostParam(postData))
		};

		try {
			// 判断是否是完整的字符串
			const url = extraUrl.startsWith("http") ? extraUrl : BASE_URL + extraUrl;
			const response = await fetch(url, config);
			const res = await response.json();
			if (res.state === FAILURE_STATE) {  // state为0的时候，这里可以对返回的各种状态码做处理
				IS_DEV && console.log(res);
				alert(res.msg);
				if (res.code === 308) {  // 状态码为308时登录失效
					// do something
				}
				alert(res.msg);
				typeof onMistake === "function" && onMistake(res);
				return; // 会先执行finally的代码再执行return；
			}
			typeof onSuccess === "function" && onSuccess(res);
		} catch (error) {
			alert(error);
			typeof onFail === "function" && onFail(error);
		} finally {
			typeof onFinal === "function" && onFinal();
		}
	},

	async postWithAuth(extraUrl, postData, onSuccess, onFail, onFinal, onMistake) {
		try {
			const userInfo = await Storage.load({key: "userInfo"});
			const auth = {
				store_admin_id: userInfo.store_admin_id,
				token: userInfo.token,
			}
			postData = {...postData, ...auth};
			this.post(extraUrl, postData, onSuccess, onFail, onFinal, onMistake)
		} catch(error) {
			alert(JSON.stringify(error));
		} finally {

		}
	}


};

export default Http;
