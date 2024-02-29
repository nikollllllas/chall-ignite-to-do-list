import styles from './header.module.css'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img
          src={logo}
          alt='Logo - To Do List'
          className={styles.logo}
        />
        
        <div className={styles.title}>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
    </header>
  )
}
