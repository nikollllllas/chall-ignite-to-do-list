import styles from './input.module.css'

export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      type='text'
      placeholder='Adicione uma tarefa'
      className={styles.input}
      {...rest}
    />
  )
}
