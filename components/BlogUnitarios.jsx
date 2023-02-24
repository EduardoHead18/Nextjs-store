import { formatearFecha } from '../helpers'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/BlogsUnitarios.module.css'

export const BlogsUnitarios = ({ contenido }) => {
    const fecha = contenido.attributes.publishedAt
    return (
        <article>
            <Image priority='true' width={500} height={300} src={contenido.attributes.imagen.data.attributes.formats.thumbnail.url} alt={`${contenido.attributes.titulo}`}></Image>
            <div className={style.contenido}>
                <h1>{contenido.attributes.titulo}</h1>
                <p className={style.fecha}>{formatearFecha(fecha)}</p>
                <p className={style.resumen}>{contenido.attributes.resumen}</p>
                <Link legacyBehavior href={`/blog/${contenido.id}`}>
                    <a className={style.enlace}>Ver más</a>
                </Link>
            </div>
        </article>
    )
}

