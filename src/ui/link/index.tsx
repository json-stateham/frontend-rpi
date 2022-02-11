import { ReactNode } from 'react'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'
import styles from './index.module.scss'

interface IProps {
  className?: string
  to: string
  children: ReactNode
}

export const Link = ({ className, to, children }: IProps) => (
  <RouterLink className={styles[className as string]} to={to} tabIndex={1}>
    {children}
  </RouterLink>
)

export const NavLink = ({ to, children }: IProps) => (
  <RouterNavLink
    className={({ isActive }) => (isActive ? styles.active : '')}
    to={to}
    tabIndex={1}
  >
    {children}
  </RouterNavLink>
)
