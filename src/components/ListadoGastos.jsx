import React from 'react'
import { Gasto } from './Gasto'

export const ListadoGastos = ({
  gastosFiltrados,
  filtro,
  gastos,
  setGastoEditar,
  eliminarGasto }) => {
  return (
    <div className='listado-gastos contenedor'>

      {
        filtro ? (
          <>
            <h2>{gastos.length ? ' Gastos ' : 'No hay gastos aun'}</h2>

            {gastosFiltrados.map(gasto => (
              <Gasto
                eliminarGasto={eliminarGasto}
                setGastoEditar={setGastoEditar}
                key={gasto.id}
                gasto={gasto} />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? ' Gastos ' : 'No hay gastos aun'}</h2>

            {gastos.map(gasto => (
              <Gasto
                eliminarGasto={eliminarGasto}
                setGastoEditar={setGastoEditar}
                key={gasto.id}
                gasto={gasto} />
            ))}
          </>
        )
      }
    </div>
  )
}
