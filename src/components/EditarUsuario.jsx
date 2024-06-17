import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditarUsuario = () => {
    const [usuario, setUsuario] = useState({});
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        buscarDetallesUsuario();
    }, [id]);

    const buscarDetallesUsuario = async () => {
        try {
            const respuesta = await fetch(`https://66467b7f51e227f23aaf0c38.mockapi.io/usuarios/${id}`);
            const data = await respuesta.json();
            setUsuario(data);
            setName(data.name);
            setMail(data.mail);
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    const manejarActualizacion = async () => {
        try {
            const respuesta = await fetch(`https://66467b7f51e227f23aaf0c38.mockapi.io/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, mail }),
            });

        if (respuesta.ok) {
            navigate(`/usuario/${id}`);
        } else {
            console.error('Error al actualizar usuario');
        }
        } catch (error) {
            console.error('Error en la solicitud: ', error);
        }
    };

    return (
        <div>
            <h1 class="text-white bg-primary mb-3">Editar Usuario</h1>
            <div class="card text-white bg-primary mb-3">
            <label>Nombre</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Email</label>
            <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
            <br />
            </div>
            <button type="button" class="btn btn-primary espacio" onClick={manejarActualizacion}>Actualizar</button>
            <button type="button" class="btn btn-primary espacio"><Link to={`/`} class="text-white">Volver</Link></button>
        </div>
    );
};

export default EditarUsuario;