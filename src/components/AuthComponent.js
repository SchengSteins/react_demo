//鉴权组件
//判断token是否存在
//存在正常渲染
//不存在重定向到登录路由

//高阶组件：把一个组件当成另外一个组件的参数传入
//然后通过一定的判断，返回新的组件
import { getToken } from '@/utils'
import { Navigate } from 'react-router-dom'

function AuthComponent({ children }) {
    const isToken = getToken()
    if (isToken) {
        return <>{children}</>
    } else {
        return < Navigate to="/login" replace />
    }
}

export { AuthComponent }