//formatear fecha ex: 10 de enero del 2023
//la fecha viene como parametro de ApiRest.jsx
export const formatearFecha = fecha =>{
    const fechaNueva = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month:'long',
        day:'2-digit'
    }
    return fechaNueva.toLocaleDateString('es-Es',opciones)

}