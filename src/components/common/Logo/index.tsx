import logo from '@/assets/images/logos/logo.svg';

import styles from './index.module.scss';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.image} />
      <div className={styles.name}>Kacper Bujak</div>
    </div>
  )
};