import Text from './components/Text';
import Image from './components/Image';
import Technologies from './components/Technologies';

import styles from './index.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Text />
      <Image />
      <Technologies />
    </div>
  )
}