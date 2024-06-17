import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DetallesUsuario = () => {
    const [usuario, setUsuario] = useState({});
    const { id } = useParams();

    useEffect(() => {
        buscarDetallesUsuario();
    }, [id]);

    const buscarDetallesUsuario = async () => {
        try {
            const respuesta = await fetch(`https://66467b7f51e227f23aaf0c38.mockapi.io/usuarios/${id}`);
            const data = await respuesta.json();
            setUsuario(data);
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    return (
        <div>
            <h1 class="text-white bg-primary mb-3">Detalles de Usuario</h1>
            <div class="card text-white bg-primary mb-3">
            <p>ID: {usuario.id}</p>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.mail}</p>
            </div>
            <button type="button" class="btn btn-primary espacio"><Link to={`/eliminar/${usuario.id}`} class="text-white">Eliminar Usuario</Link></button>
            <button type="button" class="btn btn-primary espacio"><Link to={`/editar/${usuario.id}`} class="text-white">Editar Usuario</Link></button>
            <button type="button" class="btn btn-primary espacio"><Link to={`/`} class="text-white">Volver</Link></button>
        </div>
    );
};

export default DetallesUsuario;