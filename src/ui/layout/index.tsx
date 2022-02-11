import { ReactNode } from 'react'
import styles from './index.module.scss'

interface IProps {
  children: ReactNode
}

export const Layout = ({ children }: IProps) => (
  <main className={styles.pageWrapper}>{children}</main>
)
