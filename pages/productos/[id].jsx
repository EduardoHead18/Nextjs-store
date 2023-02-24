import Image from 'next/Image'
import { Layaut } from '../../components/Layaut'
import styles from '../../styles/Producto.module.css'
const UrlProductos = ({ responseStoreJson }) => {
    const array = responseStoreJson.data

    return (
        <Layaut pagina={`producto${array.attributes.nombre}`}>
            <div className={styles.productos}>
                <Image loading='lazy' src={array.attributes.imagen.data.attributes.url} width={100} height={200} alt={array.attributes.nombre}></Image>
                <div className={styles.contenido}>
                    <h3>{array.attributes.nombre}</h3>
                    <p className={styles.descripcion}>{array.attributes.descripcion}</p>
                    <p className={styles.precio}>${array.attributes.precio}</p>

                    <form className={styles.formulario}>
                        <label>cantidad: </label>
                        <select>
                            <option value="">seleccione</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>

                        <input type="submit" value={'Agregar al carrito'} />
                    </form>
                </div>
            </div>
        </Layaut>
    )
}
export const getServerSideProps = async ({ params: { id } }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_STORE_URI}${id}?populate=*`)
    const responseStoreJson = await response.json()
    return {
        props: {
            responseStoreJson
        }
    }
}

export default UrlProductos