/*
 * 将默认接口改为具名接口再输出，相当于：
 * import { default as Store  } from "./store/store";
 * export Store;
 *
 */

// 店铺下文件
export { default as Store } from "./store/store";
export { default as BillDetail } from "./store/billdetail";
export { default as OrderDetail } from "./store/orderdetail";
export { default as AddAssistant } from './store/addassistant';
export { default as OrderManager } from "./store/ordermanager";
export { default as ServiceRecord } from './store/servicerecord';
export { default as CustomDetail } from "./store/customerdetail";
export { default as CustomerManager } from './store/customermanager';
export { default as AssistantManager } from './store/assistantmanager';
export { default as EditCustomerRemark } from "./store/editcustomerremark";

// 设备下文件
export { default as Devices } from "./device/devices";
export { default as Settings } from "./device/settings";
export { default as MyDevices } from "./device/mydevices";
export { default as DevicesData } from "./device/devicesData";
export { default as DevicesDetail } from "./device/devicesdetail";
export { default as AddNewDevices } from "./device/addnewdevices";
export { default as DevicesInstructionList } from "./device/devicesinstructionlist";

// 个人下文件
export { default as Login } from "./personal/login";
export { default as Balance } from './personal/balance';
export { default as Recharge } from './personal/recharge';
export { default as ValiPassword } from './personal/valipassword';
export { default as FindPassword } from './personal/findpassword';
export { default as MessageCenter } from "./personal/messagecenter";
export { default as RechargeSuccess } from './personal/rechargesuccess';
export { default as OperationInstruction } from "./personal/operationinstruction";

// 首页
export { default as IndexPage } from "./indexpage";

// 测试组件
export { default as Test } from "./test";
