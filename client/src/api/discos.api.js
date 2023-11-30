import axios from 'axios'

export const getDiscosRequest = async() =>
    await axios.get('http://localhost:4000/tasks')

export const createDiscoRequest = async(task) => 
     await axios.post('http://localhost:4000/tasks', task);

