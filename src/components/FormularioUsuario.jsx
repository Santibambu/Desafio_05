import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormularioUsuario = ({ agregarUsuario }) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const dominiosValidos = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];

  const manejarEntrega = () => {
    const nuevoUsuario = { name, mail };

    const esDominioValido = dominiosValidos.some(dominio => mail.endsWith(`@${dominio}`));
    if (!esDominioValido) {
      setMensajeError('El correo electrónico debe proceder de un dominio válido (Gmail, Hotmail, Outlook o Yahoo)');
      return; 
    }

    agregarUsuario(nuevoUsuario);
    setName('');
    setMail('');
    setMensajeError('');
  };

  return (
    <div>
      <h2 class="text-white bg-primary mb-3">Agregar Usuario</h2>
      <div class="card text-white bg-primary mb-3">
      <label>Nombre: </label>
      <input style={{ margin: '10px' }} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email: </label>
      <input style={{ margin: '10px' }} type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
      <br />
      </div>
      <button type="button" class="btn btn-primary espacio" onClick={manejarEntrega}>Agregar</button>
      {mensajeError && <p className="text-danger">{mensajeError}</p>}<button type="button" class="btn btn-primary espacio"><Link to={`/`} class="text-white">Volver</Link></button>
    </div>
  );
};

export default FormularioUsuario;