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
          <Form onSubmit={handleSubmit}>
            <label>Titulo del Disco</label>
            <input type='text' name="titulo" onChange={handleChange} value={values.titulo}/>

            <br/><br/>

            <label>Descripción</label>
            <textarea type='text' name="descripcion" rows="10" onChange={handleChange} value={values.descripcion}></textarea>

            <br/><br/>

            <label>Precio del Disco</label>
            <input type='text' name="precio" onChange={handleChange} value={values.precio}/>
            
            <br/><br/>

            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
          </Form>
          )}
        </Formik>
      </div>
    )
  }
  
  export default AltaDiscos