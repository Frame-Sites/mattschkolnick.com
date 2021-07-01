import createImageUrl from '../../utils/createImageUrl';
import styles from '../articles/styles.module.scss';

const ArticleItem = props => {
  const { title, caption, imageUrl, url } = props;
  const imageurl = createImageUrl(imageUrl);
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: 'none', color: 'black' }}
      className={styles.articleItem}
    >
      <div className={styles.articleContentWrapper} style={{ cursor: 'pointer' }}>
        <img src={imageurl} height="354" width="354" alt="article" />
        <div className={styles.articleContent}>
          <p style={{ fontWeight: 'normal', fontSize: '16px', lineHeight: '30px', color: 'rgba(0, 0, 0, 0.52)' }}>
            <strong style={{ fontWeight: 'bold', fontSize: '24px', color: 'rgba(0, 0, 0, 0.92)' }}>{title}</strong>
            <br />
            {caption}
          </p>
          <p style={{ marginTop: '6px' }} >
            <strong style={{ fontWeight: 600, fontSize: '16px', lineHeight: '22px' }}>Read More</strong>
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;
