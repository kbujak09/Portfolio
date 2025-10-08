import styles from './index.module.scss';

interface TechItemProps {
  image: string;
  name: string;
  description: string;
}

export default function TechItem({image, name, description}: TechItemProps) {
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.name}>
        {name}
      </div>
    </div>
  )
}