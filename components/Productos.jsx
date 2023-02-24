import Image from 'next/Image'
import Link from 'next/Link'
import styles from '../styles/Producto.module.css'
export const Productos = ({productoData}) => {
  return (
    <>
    <div className={styles.productos}>
        <Image loading='lazy'  src={productoData.attributes.imagen.data.attributes.url}  width={100} height={200} alt={productoData.attributes.nombre}></Image>
        <div className={styles.contenido}>
            <h3>{productoData.attributes.nombre}</h3>
            <p className={styles.descripcion}>{productoData.attributes.descripcion}</p>
            <p className={styles.precio}>${productoData.attributes.precio}</p>
            <Link legacyBehavior href={`/productos/${productoData.id}`}>
                <a className={styles.enlace}  href="">Ver producto</a>
            </Link>
        </div>
    </div>
    </>
  )
}
