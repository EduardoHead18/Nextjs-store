import { Layaut } from '../../components/Layaut'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/ApiRest.module.css'
const EntradaBlog = ({ responseJsonId }) => {
  return (
    <Layaut>
      <main className='contendor'>
        <h1 className='heading'>{responseJsonId.data.attributes.titulo}</h1>
        <article className={styles.entrada}>
          <Image priority={true} width={800} height={600} src={responseJsonId.data.attributes.imagen.data.attributes.formats.thumbnail.url} alt={responseJsonId.data.attributes.titulo}></Image>
        </article>
        <div className={styles.contenido}>
          <p className={styles.fecha}>{formatearFecha(responseJsonId.data.attributes.publishedAt)}</p>
          <p className={styles.texto}>{responseJsonId.data.attributes.contenido}</p>
        </div>
      </main>
    </Layaut>
  )
}
/*
export async function getStaticPaths() {
  const url = process.env.NEXT_PUBLIC_API_BLOGS
  const response = await fetch(url)
  const entradas = await response.json()
  const paths = entradas.data.map(entradas => ({
    params: { id: entradas.id.toString() }
  }))

  return {
    paths,
    fallback: true
  }

}
export async function getStaticProps({ params: { id } }) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BLOGS + id)
  const responseJsonId = await response.json()
  return {
    props: {
      responseJsonId
    }
  }


}
*/
export async function getServerSideProps({ params: { id } }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}${id}?populate=*`)
  const responseJsonId = await response.json()
  return {
    props: {
      responseJsonId
    }
  }
}

export default EntradaBlog