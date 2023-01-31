import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
    <Meta />
    <Navbar />
      <main className="flex flex-col item-center h-screen py-16 px-2 mt-16">
        {children}
      </main>
    </>
  )
}

export default Layout