import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Product from './pages/info/Product'
import User from './pages/info/User'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index={true} element={<Home />} />
            <Route path={'/users'} element={<Users />} />
            <Route path={'/product/:id'} element={<Product />} />
            <Route path={'/user/:id'} element={<User />} />
          </Route>
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
