import React from 'react'
import { ControlPresupuesto } from './ControlPresupuesto'
import { NuevoPresupuesto } from './NuevoPresupuesto'

export const Header = ({
    setGastos,
    presupuesto,
    setPresupuesto, 
    isValidPresupuesto ,
    setIsValidPresupuesto,
    gastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {
            isValidPresupuesto ? (
                <ControlPresupuesto
                setIsValidPresupuesto={setIsValidPresupuesto}
                setGastos={setGastos}
                setPresupuesto={setPresupuesto}
                gastos={gastos}
                presupuesto={presupuesto} />
            ) : (
                    <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto} />
            )
        }
    </header>
  )
}
