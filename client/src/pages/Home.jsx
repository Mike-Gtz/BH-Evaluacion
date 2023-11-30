import {useEffect, useState} from 'react'
import { getDiscosRequest } from '../api/discos.api'
import DiscoCard from '../componentes/DiscoCard.jsx'

function Home() {

  const [discos, setDiscos] = useState([])

  useEffect(() => {

    async function loadDiscos() {
      const response = await getDiscosRequest();
      setDiscos(response.data);
    }
    loadDiscos()

  },[])

  function renderHome(){

    if(discos.length == 0) return <h1>Aún no hay discos Registrados</h1>

    return discos.map((disco) => <DiscoCard disco={disco} key={disco.id}/>);
  }

    return (
      <div>
        <h1 className="text-5xl text-white font-bold text-center">Discos</h1>
        <br/>
        <div className="grid grid-cols-3 gap-2">{renderHome()}</div>
      </div>
    )
  }
  
  export default Home