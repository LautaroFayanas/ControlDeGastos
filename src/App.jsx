import { useEffect, useState } from "react";
import { generarID } from './helpers/Index';
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import IconoNuevoGasto from './img/nuevo-gasto.svg';
import { ListadoGastos } from "./components/ListadoGastos";
import { Filtros } from "./components/Filtros";

function App() {
  const [gastos , setGastos] = useState([]); //localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [] 
  const [presupuesto, setPresupuesto] = useState(0); //localStorage.getItem('presupuesto') ?? 0 
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal , setModal] = useState(false);
  const [animarModal , setAnimarModal] = useState(false);

  const [gastoEditar , setGastoEditar] = useState({});

  const [ filtro , setFiltro ] = useState('');
  const [ gastosFiltrados , setGastosFiltrados ] = useState([]);

  
  useEffect(() => {
    if(filtro){
      //Filtrar Gastos por Categoria
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
     setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])
  

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
        setTimeout(() => {
          setAnimarModal(true);
        }, 500);
    }
  }, [gastoEditar])

  // useEffect(() => {
  //   Number(localStorage.setItem('presupuesto' , presupuesto ?? 0))
  // }, [presupuesto])
  
  // useEffect(() => {
  //   const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
  //   if(presupuestoLS > 0) {
  //     setIsValidPresupuesto(true)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('gastos' , JSON.stringify(gastos) ?? [] );
  // }, [gastos])
  
  
  
  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
  }

  const guardarGasto = (gasto) => {
    if(gasto.id){
      //Actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    }else{
      //Nuevo Gasto
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos , gasto])
    }

    setTimeout(() => {
      setModal(false)
  }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados);
  }

   useEffect(() => {
    setGastos > setPresupuesto ?
     setIsValidPresupuesto(true) : null
     }, [gastos])
  
  return (
    <>
      <div className={modal ? 'fijar' : '' }>
        <Header
          setGastos={setGastos}
          gastos={gastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto} />

        {
          isValidPresupuesto && (
            <>
            <main>
              <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
              
              />

              <ListadoGastos
              gastosFiltrados={gastosFiltrados}
              filtro={filtro}
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              gastos={gastos} />
            </main>
            <div className="nuevo-gasto">
              <img
                src={IconoNuevoGasto}
                alt='IconoNuevoGasto'
                onClick={handleNuevoGasto}
              />
            </div>
            </>

          )
        }

        {
        modal && 
          <Modal 
          setGastoEditar={setGastoEditar}
          gastoEditar={gastoEditar}
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          />
        }

      </div>
    </>
  )
}

export default App
