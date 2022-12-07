import { FormatPrice } from '../../../../components/FormatPrice';
import {
  ContainerDescription,
  TotalItens,
  Entrega,
  Total,
  ContainerPrice,
  TotalItensPrice,
  EntregaPrice,
  TotalPrice,
} from './styles';

interface FooterTotalProps {
  totalItens: number;
  sumTotalCarts: number;
}

export function FooterTotal({ totalItens, sumTotalCarts }: FooterTotalProps) {
  // crie um algoritmo para calcular o valor total do carrinho multiplicado por 3,50
  const totalEntrega = sumTotalCarts + 3.5;

  return (
    <>
      <ContainerDescription>
        <TotalItens>Total de itens</TotalItens>
        <Entrega>Entrega</Entrega>
        <Total>Total</Total>
      </ContainerDescription>
      <ContainerPrice>
        <TotalItensPrice>R$ {FormatPrice(sumTotalCarts)}</TotalItensPrice>
        <EntregaPrice>R$ 3,50</EntregaPrice>
        <TotalPrice>R$ {FormatPrice(totalEntrega)}</TotalPrice>
      </ContainerPrice>
    </>
  );
}
