import { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { MapPinLine } from 'phosphor-react';
import * as yup from 'yup';

import { useCart } from '../../../../hooks/useCart';
import { FormaPagamento } from '../Pagamento/FormaPagamento';
import {
  Container,
  Cards,
  ContainerFrame,
  InformationEndereço,
  Form,
  Cep,
  Rua,
  ContainerRow,
  Numero,
  Complemento,
  Bairro,
  Cidade,
  Uf,
} from './styles';

export interface EndereçoProps {
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  pagamento: string;
}

const schema = yup.object().shape({
  cep: yup.number().required('CEP obrigatório').typeError('Cep obrigatório'),
  rua: yup.string().required('Rua obrigatório'),
  numero: yup
    .number()
    .required('Número obrigatório')
    .typeError('Número obrigatório'),
  bairro: yup.string().required('Bairro obrigatório'),
  cidade: yup.string().required('Cidade obrigatório'),
  uf: yup.string().required('UF obrigatório'),
  pagamento: yup.string().required('Pagamento obrigatório'),
});

export function Endereço() {
  const { clearCart } = useCart();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<EndereçoProps>({
    resolver: yupResolver(schema),
  });

  const checkCep = useCallback(
    (cep: number) => {
      if (String(cep).length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((response) => response.json())
          .then((data) => {
            setValue('rua', data.logradouro, { shouldValidate: true });
            setValue('bairro', data.bairro, { shouldValidate: true });
            setValue('cidade', data.localidade, { shouldValidate: true });
            setValue('uf', data.uf, { shouldValidate: true });
          });
      }
    },
    [setValue],
  );
  const cep = watch('cep');

  useEffect(() => {
    if (cep) {
      checkCep(cep);
    }
  }, [cep, checkCep]);

  const navigate = useNavigate();
  function handleOnSubimit(data: EndereçoProps) {
    // navegue para a página de sucesso passando os dados do endereço
    navigate('/success', { state: data });
    clearCart();
  }

  function setValuePagamento(pagamento: string) {
    setValue('pagamento', pagamento, { shouldValidate: true });
  }

  function erros() {
    if (errors.pagamento) {
      return <p>{errors.pagamento.message}</p>;
    }
  }

  return (
    <Container className="container">
      <h1>Complete seu pedido</h1>
      <Cards>
        <ContainerFrame>
          <MapPinLine size={22} color="#c47f17" />
          <InformationEndereço>
            <h2>Endereço de entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </InformationEndereço>
        </ContainerFrame>
        <Form id="hook-form" onSubmit={handleSubmit(handleOnSubimit)}>
          <Cep>
            <input placeholder="CEP" type="number" {...register('cep')} />
            {errors.cep && <p>{errors.cep.message}</p>}
          </Cep>
          <Rua>
            <input placeholder="Rua" type="text" {...register('rua')} />
            {errors.rua && <p>{errors.rua.message}</p>}
          </Rua>
          <ContainerRow>
            <Numero>
              <input
                placeholder="Número"
                type="number"
                {...register('numero')}
              />
              {errors.numero && <p>{errors.numero.message}</p>}
            </Numero>
            <Complemento>
              <input
                placeholder="Complemento"
                type="text"
                {...register('complemento')}
              />
            </Complemento>
          </ContainerRow>
          <ContainerRow>
            <Bairro>
              <input placeholder="Bairro" type="text" {...register('bairro')} />
              {errors.bairro && <p>{errors.bairro.message}</p>}
            </Bairro>
            <Cidade>
              <input placeholder="Cidade" type="text" {...register('cidade')} />
              {errors.cidade && <p>{errors.cidade.message}</p>}
            </Cidade>
            <Uf>
              <input placeholder="UF" type="text" {...register('uf')} />
              {errors.uf && <p>{errors.uf.message}</p>}
            </Uf>
          </ContainerRow>
        </Form>
      </Cards>
      <FormaPagamento setValuePagamento={setValuePagamento} errors={erros()} />
    </Container>
  );
}
