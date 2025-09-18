import Logo from '../../common/Logo';

import styles from './index.module.scss';

export default function Navbar () {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  )
};