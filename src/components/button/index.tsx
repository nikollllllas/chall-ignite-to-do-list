import styles from './button.module.css'
import { PlusCircle } from '@phosphor-icons/react'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ ...rest }: Props) {
  return (
    <button
      className={styles.button}
      {...rest}>
      Criar
      <PlusCircle
        size={16}
        weight='bold'
      />
    </button>
  )
}
