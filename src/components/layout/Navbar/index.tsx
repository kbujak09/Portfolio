import Logo from '@/components/common/Logo';
import NavLinks from '@/components/common/NavLinks';

import styles from './index.module.scss';

export default function Navbar () {
  return (
    <div className={styles.container}>
      <Logo />
      <NavLinks />
    </div>
  )
};