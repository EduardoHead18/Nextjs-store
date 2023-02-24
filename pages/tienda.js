import { Layaut } from '../components/Layaut'
import { ListadoTienda } from '../components/ListadoTienda'
const Tienda = ({responseJsonTienda}) => {
    return (
        <Layaut
        pagina='desde tienda'>
            <main className='contenedor'>
                <h1 className='heading'>Nuestra coleccion</h1>
                <ListadoTienda dataTienda={responseJsonTienda}/>

            </main>
        </Layaut>
    )
}
export async function getServerSideProps(){
    try{
        const url = process.env.NEXT_PUBLIC_API_STORE
        const response = await fetch(url)
        const responseJsonTienda = await response.json()
        return{
            props:{
                responseJsonTienda
            }
        }
    }
    catch{
        console.error(err)
    }
}
export default Tienda
