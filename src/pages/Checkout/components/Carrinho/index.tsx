import { useCart } from '../../../../hooks/useCart';
import { CardsItens } from '../CardsItens';
import { FooterTotal } from '../FooterTotal';
import { Container, Cards, Footer, Button } from './styles';

export function Carrinho() {
  const { cart, totalCart, sumTotalCart, quantityLength } = useCart();

  return (
    <Container className="container">
      <h1>Cafés selecionados</h1>
      <Cards>
        {cart.map((coffee) => (
          <CardsItens
            key={coffee.id}
            coffee={coffee}
            sumTotalCarts={sumTotalCart()}
          />
        ))}

        <Footer>
          <FooterTotal
            totalItens={totalCart()}
            sumTotalCarts={sumTotalCart()}
          />
        </Footer>
        <Button form="hook-form" type="submit" disabled={quantityLength <= 0}>
          CONFIRMAR PEDIDO
        </Button>
      </Cards>
    </Container>
  );
}
