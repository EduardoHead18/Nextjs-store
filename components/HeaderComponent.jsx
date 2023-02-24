import Link from "next/link"
import style from "../styles/HeaderComponent.module.css"


export const HeaderComponent = () => {
  return (
    <header>
      <div className={style.header}>
        <div className={style.barra}>
          <Link href='/'>
            <img src="/next.svg" width={100} height={100} alt="nextLogo" />
          </Link>
          <nav className={style.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>

      </div>
    </header>
  )
}

