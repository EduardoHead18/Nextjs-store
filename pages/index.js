import { Layaut } from '../components/Layaut'
import { ListadoTienda } from '../components/ListadoTienda'

export default function Home({ Tienda, BannerHome }) {
  console.log(BannerHome);
  return (
    <Layaut pagina={'inicio'}>
      <main className='contenedor'>
        <h1 className='heading'>Nuestros productos</h1>
        <ListadoTienda dataTienda={Tienda}></ListadoTienda>
      </main>
    </Layaut>

  )
}
export async function getServerSideProps() {
  //const url = process.env.NEXT_PUBLIC_API_STORE
  //const response = await fetch(url)
  //const responseJsonTienda = await response.json()
  //multiples request a la api con promesas

  const urlTienda = process.env.NEXT_PUBLIC_API_STORE
  const urlBannerHome = `${process.env.NEXT_PUBLIC_API_GLOBAL}pag-home?populate=0`

  const [resUrlTienda, resUrlBannerHome] = await Promise.all([
    fetch(urlTienda),
    fetch(urlBannerHome)
  ])

  const [Tienda, BannerHome] = await Promise.all([
    resUrlTienda.json(),
    resUrlBannerHome.json()
  ])
  return {
    props: {
      Tienda,
      BannerHome

    }
  }
}
