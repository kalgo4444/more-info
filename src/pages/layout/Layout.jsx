import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main" style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
