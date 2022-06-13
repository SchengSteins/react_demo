import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from '@/utils'
import { AuthComponent } from './components/AuthComponent'

import './App.css'
import { lazy, Suspense } from 'react'

const Login = lazy(() => import('@/pages/Login'))
const Layout = lazy(() => import('@/pages/Layout'))
const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))

export default function App() {
  return (
    //路由配置
    <HistoryRouter history={history}>
      {/* 路由懒加载 */}
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              marginTop: 200
            }}
          >
            loading...
          </div>
        }
      >
        <Routes>
          <Route path='/' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }>
            <Route index element={<Home />}></Route>
            <Route path='article' element={<Article />}></Route>
            <Route path='publish' element={<Publish />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </Suspense>
    </HistoryRouter>
  )
}