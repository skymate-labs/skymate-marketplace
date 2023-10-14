import Item from './Item/index'
import styles from './Gallery.module.css'

export default function Galery() {
  return (
    <div className={styles.f1oa95gk}>
      <div className={styles.l1icvf1x}>
        <div className={styles.c1yo0219}>
          <div>
            <div className={styles.g14v8520}>
              {[1,2,3,4,5,6,7,8,9].map((item) => (
                <Item key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}