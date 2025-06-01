import styles from './header.module.css'
import reactLogo from '../../assets/logo/logo-4.jpeg'
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <img src={reactLogo} alt='logo' className={styles.logo} width={90} height={90}></img>
        <div>
          <h1>Poreck-Task</h1>
          <div className={"color-gray"}>
            <code>Eliminer le chaos , en structurant vos taches.</code>
          </div>
        </div>
      </div>
      <code className={"color-primary"}>V.1.0</code>
    </div>
  )
}

export default Header
