import styles from './index.module.scss';

interface props {
  text: string,
  cb: () => void
}

export default function NavLink({text, cb}: props) {
  return (
    <div className={styles.container} onClick={cb}>
      {text}
    </div>
  )
}
