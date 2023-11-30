import { Link } from "react-router-dom"

function NavBar() {

    return (
      <div>
        <h1>Tienda de Discos</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/AltaDiscos">Alta de Discos</Link>
            </li>
        </ul>
      </div>
    )
  }
  
  export default NavBar