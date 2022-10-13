export const generarID = () => {
    const random = Math.random().toLocaleString(36).substring(2);
    const fecha = Date.now().toLocaleString(36)

    return random + fecha 
}

export const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-ES', opciones)

}