import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import ListaUsuarios from './components/ListaUsuarios';
import DetallesUsuario from './components/DetallesUsuario';
import FormularioUsuario from './components/FormularioUsuario';
import EditarUsuario from './components/EditarUsuario';
import EliminarUsuario from './components/EliminarUsuario';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/usuario/:id" element={<DetallesUsuario />} />
        <Route path="/crear" element={<FormularioUsuario />} />
        <Route path="/editar/:id" element={<EditarUsuario />} />
        <Route path="/eliminar/:id" element={<EliminarUsuario />} />
      </Routes>
    </Router>
  );
};

export default App;