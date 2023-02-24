import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/NotFound.module.css'
const NotFound = () => {
  return (
    <div className={styles.no_encontrados}>
      <Image className='image-container' loading='lazy' alt='404' src={'/assets/not_found.png'} width={400} height={250}></Image>
      <Link legacyBehavior href='/'>
        <a className={styles.enlace}>Regresar al inicio</a>

      </Link>
    </div>
  )
}
export default NotFound
