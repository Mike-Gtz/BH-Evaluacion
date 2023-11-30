import {deleteDiscoRequest} from '../api/discos.api.js'
import { useNavigate } from 'react-router-dom';

function DiscoCard({disco}) {

    const handleDelete = async(id) => {
        try {
         const response = await deleteDiscoRequest(id);   
         console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const navegar = useNavigate();

    return(
    <div className="bg-zinc-700 text-white rounded-md p-4">
        <header className="flex justify-between"></header>
        <h2 className="text-sm font-bold">{disco.titulo}</h2>
        <p  className="text-xs">{disco.descripcion}</p>
        <p>${disco.precio}</p>
        <button  className="bg-slate-300 px-2 py-1 text-black" onClick={() => navegar(`/EditarDisco/${disco.id}`)}>Editar</button>
        &nbsp;
        <button className="bg-slate-300 px-2 py-1 text-black" onClick={() => handleDelete(disco.id)}>Borrar</button>
    </div>
    );
}

export default DiscoCard;