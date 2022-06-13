//axios中没有react上下文环境，无法进行路由跳转，需要借助history库
import { createBrowserHistory } from 'history'

//生成一个history对象
const history = createBrowserHistory()

//在axios路由跳转中使用该对象，在App中使用HistoryRouter，并将HistoryRouter中配置hsitory对象
export { history }