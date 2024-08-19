import Image from 'next/image';
import styles from './index.module.scss'

interface Props {
    title: string;
    summary: string;
    thumbnail: string;
}
const PostCard = (props: Props) => {
    const {title, summary, thumbnail} = props;
    return (
        <section className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={thumbnail} alt={title} width={300} height={200} />
            </div>
                <h2>{title}</h2>
                <p>{summary}</p>
        </section>
    )
}

export default PostCard;