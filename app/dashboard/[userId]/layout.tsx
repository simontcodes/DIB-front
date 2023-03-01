export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex w-full justify-center pl-64">{children}</div>
  )
}