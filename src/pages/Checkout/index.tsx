import { Carrinho } from './components/Carrinho';
import { Endereço } from './components/Endereço';
import { Container } from './styles';

export function Checkout() {
  return (
    <Container className="container">
      <Endereço />
      <Carrinho />
    </Container>
  );
}
