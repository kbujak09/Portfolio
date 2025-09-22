import Text from './components/Text';
import Image from './components/Image';

import styles from './index.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Text />
      <Image />
    </div>
  )
}