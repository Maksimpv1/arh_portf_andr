import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const overlay = pathname === '/'

  return (
    <div className={overlay ? 'page page--home' : 'page'}>
      <Header overlay={overlay} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
