const operaciones = [{
    descripcion: 'Sueldo',
    categoria: 'Trabajo',
    fecha: '2021-01-01',
    monto: 50000,
    tipo: 'Ganancia',
},

{
    descripcion: 'Pago de alquiler',
    categoria: 'Alquiler',
    fecha: '2021-01-02',
    monto: 15000,
    tipo: 'Gasto',
},
{
    descripcion: 'Pago de expensas',
    categoria: 'Alquiler',
    fecha: '2021-01-02',
    monto: 5000,
    tipo: 'Gasto',
},
{
    descripcion: 'Pago de internet',
    categoria: 'Servicios',
    fecha: '2021-01-10',
    monto: 2000,
    tipo: 'Gasto',
},
{
    descripcion: 'Trabajo freelance',
    categoria: 'Trabajo',
    fecha: '2021-01-15',
    monto: 20000,
    tipo: 'Ganancia',
}];


//------------------------------------------------------------------------------------------------------------------------
//               MAYOR GANANCIA
//------------------------------------------------------------------------------------------------------------------------
const montoMayorGanancia = (array) => {
    const mayorMonto = array.reduce((acc, elemento)=>{
        if (acc < elemento.monto) {
            return elemento.monto
        }
        return acc
    }, 0)
    return mayorMonto
}
const categoriaConMayorGanancia = (array) => {
    const filtrarTipo = array.filter((elemento)=>{
        return elemento.tipo === "Ganancia"
    })
    const filtrarCategoria = filtrarTipo.reduce((acc, elemento)=>{
        if (acc > elemento.monto) {
            return acc
        }
        return elemento.categoria
    }, 0)
    return filtrarCategoria
}
    
console.log("MAYOR GANANCIA", categoriaConMayorGanancia(operaciones), montoMayorGanancia(operaciones)) 
// deberia ver trabajo - 50.000

//------------------------------------------------------------------------------------------------------------------------
//               MAYOR GASTO
//------------------------------------------------------------------------------------------------------------------------

const montoMayorGasto = (array) => {
    const filtrarTipo = array.filter((elemento)=>{
        return elemento.tipo === "Gasto"
    })
    const filtrarmenorGasto = filtrarTipo.reduce((acc, elemento)=>{
        if (acc < elemento.monto) {
            acc = elemento.monto
        }
        return acc
    }, 0)
    return filtrarmenorGasto
}

const categoriaConMayorGasto = (array) => {
    const filtrarTipo = array.filter((elemento)=>{
        return elemento.tipo === "Gasto"
    })
    const filtrarmenorGasto = filtrarTipo.reduce((acc, elemento)=>{
        if (acc < elemento.monto) {
            acc = elemento.categoria
        }
        return acc
    }, 0)
    return filtrarmenorGasto
}
console.log("MAYOR GASTO:",  montoMayorGasto(operaciones), categoriaConMayorGasto(operaciones)) 
// deberia ver  15000

//------------------------------------------------------------------------------------------------------------------------
//               MES CON MAYOR GANANCIA
//------------------------------------------------------------------------------------------------------------------------
// al parecer es al pedo la funcion
// const categoriaGanancia = (array)=>{
//     const filtrarGanancia = array.filter((elemento)=>{
//         return elemento.tipo === "Ganancia"
//     })
//     const filtrarMes = filtrarGanancia.filter((elemento)=>{
//         return elemento.fecha >= "2021-01-01" && elemento.fecha <= "2021-01-31"
//     })
//     console.log(filtrarMes);
//     const sumarMonto = filtrarMes.reduce((acc, elemento)=>{
//         return acc + elemento.monto
//     }, 0)
//     return sumarMonto
// }

// console.log(categoriaGanancia(operaciones));
// // deberia ver "fecha" 70000

//------------------------------------------------------------------------------------------------------------------------
//               MES CON MAYOR GASTO
//------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------------
//               funcion html
//------------------------------------------------------------------------------------------------------------------------

const contenedorReportes = ()=>{
    const seccionReportes = document.querySelector(".seccion-reportes")
    seccionReportes.innerHTML = `
    <h1>Reportes</h1>
    <div class="contenedor-resumen">
        <h3>Resumen</h3>

        <!-- titulo -->
        <div class="contenedor-chico">
            <h5>CATEGORIA CON MAYOR GANANCIA</h5>
            <h5>CATEGORIA CON MAYOR GASTO</h5>
            <h5>CATEGORIA CON MAYOR BALANCE</h5>
            <h5>MES CON MAYOR GANANCIA</h5>
            <h5>Mes con mayor gasto</h5>
        </div>

        <!-- categoria -->

        <div class="contenedor-chico">
        <h5>${categoriaConMayorGanancia(operaciones)}</h5>
        <h5>${categoriaConMayorGasto(operaciones)}</h5>
        <h5>${categoriaConMayorGanancia(operaciones)}</h5>
        <h5>FALTA</h5>
        <h5>FALTA</h5>
        </div>

        <!-- monto -->
        <div class="contenedor-chico">
            <h5>${montoMayorGanancia(operaciones)}</h5>
            <h5>${montoMayorGasto(operaciones)}</h5>
            <h5>${montoMayorGanancia(operaciones)}</h5>
            <h5>${montoMayorGanancia(operaciones)}</h5>
            <h5>${montoMayorGasto(operaciones)}</h5>
        </div>
    </div>`
}
contenedorReportes()
