import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default BaseLayout
