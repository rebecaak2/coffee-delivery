import { createContext, ReactNode, useState } from 'react';

export interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
  tags: string[];
  quantity: number;
}

interface CartContextData {
  addCoffee: (coffee: CartItem) => void;
  removeCoffee: (cartemItemId: number) => void;
  cart: CartItem[];
  quantityLength: number;
  addQuantity: (coffeeId: number) => void;
  removeQuantity: (cartemItemId: number) => void;
  totalCart: () => number;
  sumTotalCart: () => number;
  clearCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [coffeesCart, setCoffeesCart] = useState<CartItem[]>([]);
  console.log(coffeesCart);
  console.log(coffeesCart.length);

  function addCoffee(coffee: CartItem) {
    // adicionar um item ao carrinho
    const orderAlreadyExist = coffeesCart.findIndex(
      (coffeeCart) => coffeeCart.id === coffee.id, // Adicionar o return nessa expressão
    );
    // Caso o pedido já exista no carrinho
    if (orderAlreadyExist >= 0) {
      setCoffeesCart((state) =>
        state.map((item) => {
          // Caso o coffee.id for igual ao item.id do map, aumenta a quantidade dele
          if (coffee.id === item.id) {
            return {
              ...item,
              quantity: item.quantity + coffee.quantity,
            };
          } else {
            return item; // Caso não seja retorne como já estava
          }
        }),
      );
    } else {
      // Caso não exista a order, adiciona ela no final do estado:
      setCoffeesCart((state) => [...state, coffee]);
    }
  }

  function removeCoffee(cartemItemId: number) {
    // remover um item do carrinho
    const coffeeExists = coffeesCart.filter((item) => item.id !== cartemItemId);
    setCoffeesCart(coffeeExists);
  }

  function addQuantity(cartemItemId: number) {
    // adicionar quantidade de um item
    const coffeeExists = coffeesCart.find((item) => item.id === cartemItemId);
    if (coffeeExists) {
      const newCartItem = coffeesCart.map((item) => {
        if (item.id === cartemItemId) {
          item.quantity += 1;
        }
        return item;
      });
      setCoffeesCart(newCartItem);
    }
  }

  function removeQuantity(cartemItemId: number) {
    // remover quantidade de um item
    const coffeeExists = coffeesCart.find((item) => item.id === cartemItemId);
    if (coffeeExists) {
      setCoffeesCart(
        coffeesCart.map((item) =>
          item.id === cartemItemId
            ? {
                ...coffeeExists,
                quantity: item.quantity - 1,
              }
            : item,
        ),
      );
    }
  }

  // crie uma função para calcular o total do carrinho multiplicando a quantidade de cada item pelo seu preço
  function totalCart() {
    const total = coffeesCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return total;
  }

  function sumTotalCart() {
    const total = coffeesCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return total;
  }

  function clearCart() {
    // limpar o carrinho
    setCoffeesCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        addCoffee,
        removeCoffee,
        addQuantity,
        removeQuantity,
        quantityLength: coffeesCart.length,
        cart: coffeesCart,
        totalCart,
        sumTotalCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
