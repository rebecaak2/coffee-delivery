import { Minus, Plus, Trash } from 'phosphor-react';

import { FormatPrice } from '../../../../components/FormatPrice';
import { useCart } from '../../../../hooks/useCart';
import {
  ContainerInfo,
  ContainerBottom,
  ContainerColumn,
  ContainerBottomRow,
  ContainerRemover,
} from './styles';

interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  quantity: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
  sumTotalCarts: number;
}

export function CardsItens({ coffee, sumTotalCarts }: CoffeeCardProps) {
  const { removeCoffee, addQuantity, removeQuantity } = useCart();

  function handleAddQuantity() {
    addQuantity(coffee.id);
  }

  function handleRemoveQuantity() {
    if (coffee.quantity > 1) {
      removeQuantity(coffee.id);
    }
  }

  function handleRemoveCoffee() {
    removeCoffee(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formatPrice = FormatPrice(coffeeTotal);

  return (
    <ContainerInfo>
      <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />
      <ContainerColumn>
        <h2>{coffee.name}</h2>
        <ContainerBottomRow>
          <ContainerBottom>
            <button onClick={() => handleRemoveQuantity()} type="button">
              <Minus size={14} weight="fill" />
            </button>
            <span>{coffee.quantity}</span>
            <button onClick={() => handleAddQuantity()} type="button">
              <Plus size={14} weight="bold" />
            </button>
          </ContainerBottom>

          <ContainerRemover onClick={() => handleRemoveCoffee()}>
            <Trash size={16} />

            <span>REMOVER</span>
          </ContainerRemover>
        </ContainerBottomRow>
      </ContainerColumn>
      <p>
        R$ <span>{formatPrice}</span>
      </p>
    </ContainerInfo>
  );
}
