import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EliminarUsuario = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const eliminarUsuario = async () => {
    try {
      const respuesta = await fetch(`https://66467b7f51e227f23aaf0c38.mockapi.io/usuarios/${id}`, {
        method: 'DELETE',
      });

      if (respuesta.ok) {
        alert('Usuario eliminado exitosamente');
        navigate('/');
      } else {
        console.error('Error al eliminar usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud: ', error);
    }
  };

  useEffect(() => {
    const confirmacion = window.confirm('¿Estás seguro que querés eliminar este usuario?');
    if (confirmacion) {
      eliminarUsuario();
    } else {
      navigate('/');
    }
  }, [id]);

  return (
    <div>
      <h1>Eliminar Usuario</h1>
    </div>
  );
};

export default EliminarUsuario;