import { useState } from 'react';

import { Minus, Plus, ShoppingCart } from 'phosphor-react';

import { FormatPrice } from '../../../../components/FormatPrice';
import { useCart } from '../../../../hooks/useCart';
import {
  CoffeCardContainer,
  TagsContainer,
  TagsColor,
  Name,
  Description,
  Buy,
  Action,
  Background,
  Content,
} from './styles';

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  tags: string[];
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffee } = useCart();
  const [quantity, setQuantity] = useState(1);

  function handleAddQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleRemoveQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  function handleAddCoffeeToCart() {
    const coffeeData = {
      ...coffee,
      quantity,
    };

    addCoffee(coffeeData);
  }

  return (
    <CoffeCardContainer className="container">
      <img src={`/coffees/${coffee.photo}`} alt="coffee" />
      <div className="container">
        <TagsContainer>
          <TagsColor>
            {coffee.tags.map((tag) => (
              <span key={`${tag}${tag}`}>{tag}</span>
            ))}
          </TagsColor>
        </TagsContainer>
      </div>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <Buy>
        <p>
          R$<span>{FormatPrice(coffee.price)}</span>
        </p>
        <Content>
          <Action>
            <button onClick={() => handleRemoveQuantity()} type="button">
              <Minus size={14} weight="fill" />
            </button>
            <p>{quantity}</p>
            <button onClick={() => handleAddQuantity()} type="button">
              <Plus size={14} weight="bold" />
            </button>
          </Action>
          <Background onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={20} weight="fill"></ShoppingCart>
          </Background>
        </Content>
      </Buy>
    </CoffeCardContainer>
  );
}
