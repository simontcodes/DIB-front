export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">{children}</div>
  )
}