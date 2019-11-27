import React from 'react';

import { FaStudiovinari } from 'react-icons/fa';
import { Container } from './styles';

const Menu = () => (
  <Container>
    <div className="menu">
      <ul>
        <li>Carreira</li>
        <li>Futuro</li>
        <li>Salários</li>
      </ul>
    </div>
    <div className="logo">
      <span>
        Trocar logo
        <FaStudiovinari size={42} />
      </span>
    </div>
    <div className="pesquisa">
      <input type="text" />
    </div>
  </Container>
);

export default Menu;
