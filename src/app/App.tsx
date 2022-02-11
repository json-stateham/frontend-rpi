import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'ui/link'

import 'styles/index.scss'

const Login = lazy(() => import('pages/login'))
const PasswordRecovery = lazy(() => import('pages/password-recovery'))
const ProAccount = lazy(() => import('pages/pro-account'))

const App = () => (
  <>
    <Navigation />

    <Suspense fallback={<div className="flex justCenter">Loading...</div>}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="password-recovery" element={<PasswordRecovery />} />
        <Route path="pro-account" element={<ProAccount />} />
        <Route path="*" element={<p>Nothing found... 404!</p>} />
      </Routes>
    </Suspense>
  </>
)

const Navigation = () => (
  <nav className="flex justCenter gap-14">
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/password-recovery">Password Recovery</NavLink>
    <NavLink to="/pro-account">Pro Account</NavLink>
  </nav>
)

export { App }
