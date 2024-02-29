import styles from './task.module.css'
import { Check, Trash } from '@phosphor-icons/react'

import { InterfaceTask } from '../../app'

interface Props {
  data: InterfaceTask
  deleteTask: (id: number) => void
  toggleTask: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ data, deleteTask, toggleTask }: Props) {
  function handleTaskToggle() {
    toggleTask({ id: data.id, value: !data.isChecked })
  }

  function handleRemove() {
    deleteTask(data.id)
  }

  const isCheckboxChecked = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

  const isParagraphChecked = data.isChecked ? styles['paragraph-checked'] : ''

  return (
    <div className={styles.task}>
      <div>
        <label
          htmlFor='checkbox'
          onClick={handleTaskToggle}>
          <input
            readOnly
            type='checkbox'
            checked={data.isChecked}
            className={`${styles.checkbox} ${isCheckboxChecked}`}
          />
          <span>{data.isChecked && <Check size={12} />}</span>

          <p className={`${styles.paragraph} ${isParagraphChecked}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} />
      </button>
    </div>
  )
}
