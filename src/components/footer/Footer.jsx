import styles from './Footer.module.css'

const Footer = ({ completedTask }) => {
  return (
    <>
      {completedTask && completedTask > 0 ? (
        <div>
          <code className={styles.footer}>
            Avec Poreck-Task tu as éliminé {completedTask} tache 
            {completedTask>1 ? "s" : ""}
          </code>
        </div>
      ) : null}
    </>
  )
}

export default Footer
