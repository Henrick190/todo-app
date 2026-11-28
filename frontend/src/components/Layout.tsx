import { NavLink, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-3xl items-center gap-6 px-4 py-4">
          <NavLink to="/" className="text-lg font-semibold">
            Todo App
          </NavLink>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
