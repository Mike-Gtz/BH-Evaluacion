function DiscoCard({disco}) {
    return(
    <div>
        <h2>{disco.titulo}</h2>
        <p>{disco.descripcion}</p>
        <p>${disco.precio}</p>
        <button>Editar</button>
        <button>Borrar</button>
    </div>
    );
}

export default DiscoCard;