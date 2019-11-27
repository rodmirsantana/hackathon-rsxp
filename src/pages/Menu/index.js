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
        Span
        <FaStudiovinari size={36} />
      </span>
    </div>
    <div className="pesquisa">
      <input type="text" />
    </div>
  </Container>
);

export default Menu;
