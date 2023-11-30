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

    return (
      <div>
        <h1>Discos</h1>


      {
        discos.map(disco => (
          <DiscoCard disco={disco} key={disco.id}/>
        ))
      }

      </div>
    )
  }
  
  export default Home