import axios from 'axios'

export const createDiscoRequest = async(task) => 
     await axios.post('http://localhost:4000/tasks', task);

