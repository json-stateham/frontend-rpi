import { FC, createElement, memo, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Text.module.scss'

type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'

interface IProps {
  children: ReactNode
  className?: string
  tag?: TextTag
  variant?: 'primary' | 'secondary'
}

const Text: FC<IProps> = memo(
  ({ children, className: extraClassName, tag = 'p', variant = 'primary' }) => {
    return createElement(
      tag,
      {
        className: clsx(
          {
            [styles[tag]]: tag,
            [styles[variant]]: variant,
          },
          extraClassName,
        ),
      },
      [children],
    )
  },
)

export { Text }
