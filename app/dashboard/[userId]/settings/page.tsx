import ChangePreferences from "./ChangePreferences"

type User = {
  _id: string,
  name: string,
  email: string,
  password: string,
  role: string,
  __v: number
}

type PageProps = {
  params: {
    userId: string
  }
}

export default async function Settings(props: PageProps) {

  const fetchUser = async (userId: string) => {
    const res = await fetch(`http://localhost:8080/dibs/${userId}`)
    const user: User = await res.json()
    return user
  }

  const user = await fetchUser(props.params.userId)

  return (
    <div className="w-full max-w-[1280px]">
      <ChangePreferences user={user}/>
    </div>
  )
}

