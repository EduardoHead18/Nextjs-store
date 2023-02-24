import style from '../styles/Nosotros.module.css'
import { Layaut } from '../components/Layaut'

const Nosotros = () => {
    return (
        <Layaut>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={style.contenido}>
                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FVZbAFJz89J-HiJfk6zOgq4ypv3wuKlvyA&usqp=CAU"} width={500} height={300} alt="guitar" />
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

            </main>
        </Layaut>

    )
}
export default Nosotros

