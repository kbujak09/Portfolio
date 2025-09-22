import styles from './index.module.scss';

export default function Text() {
  return (
    <div className={styles.container}>
      <div className={styles.textBlock}>
        Hello!
      </div>
      <div className={styles.textBlock}>
        My name is <span className={styles.highlight}>Kacper</span>
      </div>
      <div className={styles.textBlock}>
        I am <span className={styles.highlight2}>self-taught </span>software engineer
      </div>
      <div className={styles.textBlock}>
        And this is my <span className={styles.highlight}>portfolio </span>website
      </div>
      <div className={styles.textBlock}>
        Check out <span className={styles.highlight2}>my projects</span>!
      </div>
    </div>
  )
}