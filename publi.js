const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts'; 

const obtenerPublicaciones = async () => {
    try {
        const response = await axios.get(url);
        const publicaciones = response.data;
        publicaciones.forEach((publicacion) => {
            console.log('Título:', publicacion.title);
            console.log('Cuerpo:', publicacion.body);
            console.log('========');
        });
    } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
    }
};

obtenerPublicaciones();
