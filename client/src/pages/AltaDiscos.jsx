import {Form, Formik} from 'formik';
import {createDiscoRequest} from '../api/discos.api.js'

function AltaDiscos() {

    return (
      <div>
        <Formik
        initialValues={{
          titulo: "",
          descripcion: "",
          precio: "",
        }}

        onSubmit={async(values, actions)=>{
          console.log(values)
          try {
            const response = await createDiscoRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          } 
        }}

        >
          {({handleChange, handleSubmit, values, isSubmitting}) => (
          <Form onSubmit={handleSubmit}
          className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">
            <label className="block">Titulo del Disco</label>
            <input className="px-2 py-1 rounded-sm w-full" type='text' name="titulo" onChange={handleChange} value={values.titulo}/>

            <br/><br/>

            <label className="block">Descripción</label>
            <textarea className="px-2 py-1 rounded-sm w-full" type='text' name="descripcion" rows="10" onChange={handleChange} value={values.descripcion}></textarea>

            <br/><br/>

            <label className="block">Precio del Disco</label>
            <input className="px-2 py-1 rounded-sm w-full" type='text' name="precio" onChange={handleChange} value={values.precio}/>
            
            <br/><br/>

            <button className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md" type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
          </Form>
          )}
        </Formik>
      </div>
    )
  }
  
  export default AltaDiscos