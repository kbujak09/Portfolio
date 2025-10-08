import TechItem from './components/TechItem';

import ReactLogo from '@/assets/images/techs/react.svg';
import ExpressLogo from '@/assets/images/techs/express.svg';
import MongoLogo from '@/assets/images/techs/mongo.svg';
import SassLogo from '@/assets/images/techs/sass.svg';
import TsLogo from '@/assets/images/techs/typescript.svg';

import styles from './index.module.scss';

const techs = [
  { name: 'React', image: ReactLogo, description: 'A library for building UIs' },
  { name: 'Express', image: ExpressLogo, description: 'Node.js framework' },
  { name: 'MongoDB', image: MongoLogo, description: 'NoSQL database' },
  { name: 'Sass', image: SassLogo, description: 'CSS preprocessor' },
  { name: 'TypeScript', image: TsLogo, description: 'Typed superset of JavaScript' },
];


export default function Technologies() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Tools and Technologies
      </div>
      <div className={styles.techs}>
        {
          techs.map((item) => (
            <TechItem name={item.name} image={item.image}/>
          ))
        }
      </div>
    </div>
  )
}