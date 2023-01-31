import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'

const Layout = ({ children }) => {
  return (
    <>
    <Meta />
    <Navbar />
      <main className="flex flex-col items-center py-16 px-4 md:px-8 lg:px-16 mt-16">
        {children}
      </main>
    </>
  )
}

export default Layout