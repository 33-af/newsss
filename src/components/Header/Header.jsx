
import { formDate } from "../../helpers/formatDate";
import styles from './Header.module.css'


const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}> News REACTIFY</h1>
      <p className={styles.date}>{formDate(new Date())}</p>
    </header>
  )
}

export default Header