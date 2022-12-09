import { useState } from 'react';
import { FieldError } from 'react-hook-form';

import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react';

import {
  Pagamento,
  ContainerRow,
  InformationPagamento,
  Cartao,
  Container,
} from './styles';

export interface PaymentMethodProps {
  label: string;
}

interface FormaPagamentoProps {
  setValuePagamento: (value: string) => void;
  errorPagamento: FieldError | undefined;
}

export function FormaPagamento({
  setValuePagamento,
  errorPagamento,
}: FormaPagamentoProps) {
  const [isActive, setIsActive] = useState({
    credit: false,
    debit: false,
    money: false,
  });

  function handlePaymentMethod({ label }: PaymentMethodProps) {
    setValuePagamento(label);
    switch (label) {
      case 'Cartão de crédito':
        setIsActive({ credit: true, debit: false, money: false });
        break;
      case 'Cartão de débito':
        setIsActive({ credit: false, debit: true, money: false });
        break;
      case 'Dinheiro':
        setIsActive({ credit: false, debit: false, money: true });
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <Pagamento>
        <ContainerRow>
          <CurrencyDollar size={20} color="#8047f8" />
          <InformationPagamento>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </InformationPagamento>
        </ContainerRow>
        <ContainerRow>
          <Cartao
            isActive={isActive.credit}
            onClick={() => handlePaymentMethod({ label: 'Cartão de crédito' })}
          >
            <CreditCard size={20} color="#8047f8" />
            <p>CARTÃO DE CRÉDITO</p>
          </Cartao>
          <Cartao
            isActive={isActive.debit}
            onClick={() => handlePaymentMethod({ label: 'Cartão de débito' })}
          >
            <Bank size={20} color="#8047f8" />
            <p>CARTÃO DE DEBITO</p>
          </Cartao>
          <Cartao
            isActive={isActive.money}
            onClick={() => handlePaymentMethod({ label: 'Dinheiro' })}
          >
            <Money size={20} color="#8047f8" />
            <p> DINHEIRO</p>
          </Cartao>
        </ContainerRow>
        {errorPagamento && <p>{errorPagamento.message}</p>}
      </Pagamento>
    </Container>
  );
}
