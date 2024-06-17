import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        buscarUsuarios();
    }, []);

    const buscarUsuarios = async () => {
        try {
            const respuesta = await fetch('https://66467b7f51e227f23aaf0c38.mockapi.io/usuarios');
            const data = await respuesta.json();
            setUsuarios(data);
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <div>
            <h1 class="text-white bg-primary mb-3">Lista de Usuarios</h1>
            <ul class="card card2 bg-primary mb-3">
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                         <Link to={`/usuario/${usuario.id}`}>
                         <span class="text-white">{usuario.name} - {usuario.mail}</span>
                         </Link>
                    </li>
                ))}
            </ul>
            <button type="button" class="btn btn-primary espacio"><Link to="/crear" class="text-white">Crear un nuevo usuario</Link></button>
        </div>
    );
};

export default ListaUsuarios;