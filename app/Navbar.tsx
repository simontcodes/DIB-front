import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {

  const {data: session} = useSession()

  const handleSignOut = () => {
    localStorage.removeItem("User_Id")
    signOut({
      callbackUrl: "/"
    })
  }

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
        {session?.user && 
          <ul className='flex gap-4 text-white'>
            {/* <Link href={`/dashboard/`}>UserDashboard (Temp)</Link> */}
            <li className='text-green'>
              <Link href={`/dashboard/${session.user.id}`}>UserDashboard (Temp)</Link>
            </li>
          </ul>
        }
        {/* <div className='flex items-center gap-2'> */}
        <div>
          {/* <button className='px-2 py-1 rounded bg-emerald-600 text-white'>Apply</button> */}
          {/* <button className='px-2 py-1 rounded bg-emerald-600 text-white'>Log in</button> */}
          {session?.user ? (
            <div className='flex items-center gap-2'>
              <span className='text-white'>{session.user.name}</span>
              {/* <span className='text-white'>{session.user.token}</span> */}
              {/* <span className='text-white'>{session.user.id}</span> */}
              <button className='px-2 py-[6px] rounded bg-emerald-600 text-white' onClick={handleSignOut}>Log out</button>
            </div>
          ) : (
            <ul className='flex items-center gap-2'>
              <Link className='px-2 py-1 rounded bg-emerald-600 text-white' href={`/apply`}>Apply</Link>
              <button className='px-2 py-1 rounded bg-emerald-600 text-white' onClick={() => signIn()}>Log in</button>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar