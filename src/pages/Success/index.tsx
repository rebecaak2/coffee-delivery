import { useLocation } from 'react-router-dom';

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import SuccessImage from '../../assets/illustration.svg';
import { EndereçoProps } from '../Checkout/components/Endereço';
import {
  Container,
  OrderInfo,
  OrderGroup,
  OrderColumn,
  Background,
  BackgroundTime,
  BackgroundDolar,
  Row,
} from './styles';

interface LocationState {
  state: EndereçoProps;
}

export function Success() {
  const { state } = useLocation() as LocationState;
  return (
    <Container className="container">
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <Row>
        <OrderInfo>
          <OrderGroup>
            <Background>
              <MapPin size={20} />
            </Background>
            <OrderColumn>
              <p>
                Entrega em{' '}
                <span>
                  {state.rua}, {state.numero}
                </span>
              </p>
              <p>
                {state.bairro} - {state.cidade}, {state.uf}
              </p>
            </OrderColumn>
          </OrderGroup>
          <OrderGroup>
            <BackgroundTime>
              <Timer size={20} />
            </BackgroundTime>
            <OrderColumn>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </OrderColumn>
          </OrderGroup>
          <OrderGroup>
            <BackgroundDolar>
              <CurrencyDollar size={20} />
            </BackgroundDolar>
            <OrderColumn>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </OrderColumn>
          </OrderGroup>
        </OrderInfo>
        <img src={SuccessImage} alt="Success" />
      </Row>
    </Container>
  );
}
