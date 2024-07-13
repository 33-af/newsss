import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import styles from './NewsBanner.module.css'

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      {item?.image && <Image image={item.image} />}
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>{item?.published ? formatTimeAgo(item.published) : 'Unknown time'} by {item?.author || 'Unknown author'}</p>
    </div>
  );
};

export default NewsBanner;