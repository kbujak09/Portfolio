import NavLink from '../NavLink';

import styles from './index.module.scss';

const links = [
  {'name': 'About'},
  {'name': 'Projects'},
  {'name': 'Resume'},
  {'name': 'Contact'}
]

export default function NavLinks() {
  return (
    <div className={styles.container}>
      {
        links.map(link => {
          return (
            <NavLink text={link.name} cb={() => {}}/>
          )
        })
      }
    </div>
  )
} 