import Link from 'next/link'

const Navbar = () => {

  const tempUserId = "63ded6fd6542e0440a66cf8f"
  return (
    <nav className="fixed top-0 h-16 w-screen bg-emerald-900 z-10">
      <div className='flex px-8 py-4 w-full h-full items-center justify-between'>
        <div className='font-extrabold select-none text-4xl text-white'>
          DIB
        </div>
        <ul className='flex gap-4 text-white'>
          <li className='text-green'>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/showcase'>Projects</Link>
          </li>
          <li>
            <Link href='/companies'>Companies</Link>
          </li>
          <li>
            <Link href='/developers'>Developers</Link>
          </li>
        </ul>
        <ul className='flex gap-4 text-white'>
          <li className='text-green'>
            <Link href={`/dashboard/${tempUserId}`}>UserDashboard (Temp)</Link>
          </li>
        </ul>
        <div className='flex gap-2'>
          <button className='px-2 py-1 rounded bg-emerald-600 text-white'>Apply</button>
          <button className='px-2 py-1 rounded bg-emerald-600 text-white'>Log in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar