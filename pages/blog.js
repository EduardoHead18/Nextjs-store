import { Layaut } from '../components/Layaut'
import { BlogsUnitarios } from '../components/BlogUnitarios'
import style from '../styles/Blog.module.css'

const Blog = ({responseJson}) => {
/*
  useEffect(() => {
    const getApi = async () => {
      const resonse = await fetch('http://localhost:1337/api/blogs?populate=*')
      const responseJson = await resonse.json()
      console.log(responseJson);
      setNewdata(responseJson)
    }
    getApi()
  }, [])
  */

  return (
    <Layaut>
      <main className="contenedor">
        <div className="heading">Blog</div>
        <div className={style.blog}>
          {
            responseJson.data.map(res => {
              return (
                <BlogsUnitarios key={res.id} contenido={res}/>
              )
            })
          }
        </div>
      </main>

    </Layaut>
  )
}
//hace un request de la api cada que se necesite
export async function getServerSideProps() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API)
    const responseJson = await response.json()
    return {
      props: {
        responseJson
      }
    }
    
  } catch (error) {
    console.log(error);
  }

}
export default Blog