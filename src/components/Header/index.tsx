import { NavLink } from 'react-router-dom';

import { MapPin, ShoppingCart } from 'phosphor-react';

import navBar from '../../assets/navBar.svg';
import { useCart } from '../../hooks/useCart';
import {
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderButton,
} from './styles';
export function Header() {
  const { quantityLength } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={navBar} alt="Logo" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              {quantityLength > 0 && <span>{quantityLength}</span>}
              <ShoppingCart size={20} weight="fill"></ShoppingCart>
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
