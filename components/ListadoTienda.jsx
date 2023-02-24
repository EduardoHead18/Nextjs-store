import { Productos } from "./Productos"
import styles from "../styles/Listado.module.css"
export const ListadoTienda = ({dataTienda}) => {
  if(dataTienda.length!=0){
    console.log('array vacio');
  }else console.log('array bien');
  return (
    <div className={styles.listado}>
        {
          dataTienda.length!=0 ?
            dataTienda.data.map( data =>{
                return(
                    <Productos key={data.attributes.url} productoData={data}/>
                )
            })
            :
            <h1>vacio</h1>
        }
    </div>
  )
}
