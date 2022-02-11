import { FC, ReactNode } from 'react'

import clsx from 'clsx'
import styles from './index.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface IProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: ButtonVariant
  type?: 'button' | 'submit'
  tabIndex?: number
  size?: 'm' | 's'
}

const Button: FC<IProps> = ({
  children,
  className,
  onClick,
  variant = 'primary',
  type = 'button',
  tabIndex = 1,
  size = 'm',
}) => {
  return (
    <button
      className={clsx(
        { [styles[variant]]: variant, [styles[size]]: size },
        styles.button,
        className,
      )}
      onClick={onClick}
      tabIndex={tabIndex}
      type={type}
    >
      {children}
    </button>
  )
}

export { Button }
