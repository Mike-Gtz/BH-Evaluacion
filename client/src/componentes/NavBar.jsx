import { Link } from "react-router-dom"

function NavBar() {

    return (
        <div className="bg-neutral-800 flex justify-between px-20 py-4">
        <Link to="/" className="text-white font-bold">
        <h1>Tienda de Discos</h1>
      </Link>
        <ul className="flex gap-x-1">
            <li>
                <Link className="bg-slate-200 px-2 py-1" to="/">Home</Link>
            </li>
            <li>
            <Link className="bg-teal-200 px-2 py-1" to="/AltaDiscos">Alta de Discos</Link>
            </li>
        </ul>
      </div>
    )
  }
  
  export default NavBar