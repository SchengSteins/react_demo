//把所有工具模块进行导入再统一导出

import { http } from './http';
import { setToken, getToken, removeToken } from './token'
import { history } from './history';

export {
    http,
    setToken,
    getToken,
    removeToken,
    history
}