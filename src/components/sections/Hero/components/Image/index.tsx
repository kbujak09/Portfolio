import { motion } from "framer-motion";
import ReactLogo from '@/assets/images/logos/react-logo.svg';

import styles from './index.module.scss';

export default function Image() {
  return (
    <div className={styles.container}>
      <motion.img
        src={ReactLogo}
        alt="React Logo"
        className={styles.reactLogo}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
    </div>
  );
}