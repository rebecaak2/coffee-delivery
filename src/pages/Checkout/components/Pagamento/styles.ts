import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.25rem;
  gap: 0.75rem;
`;

export const Pagamento = styled.div`
  margin-top: 0.75rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;

  width: 40rem;
  p {
    color: ${({ theme }) => theme.colors['base-error']};
    font-size: 0.9375rem;
    line-height: 1.25rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.regular};
  }
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  flex-direction: column;
`;
export const InformationPagamento = styled.div`
  span {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    font-weight: 400;
    line-height: 1.3rem;
    font-family: ${(props) => props.theme.fonts.regular};
  }
  > p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['text-regular-s']};
    font-weight: 400;
    line-height: 1.1375rem;
  }
`;

interface ICartao {
  isActive: boolean;
}

export const Cartao = styled.button<ICartao>`
  align-items: center;
  display: flex;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  justify-content: center;
  width: 178px;
  height: 2.625rem;

  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};

  color: ${(props) => props.theme.colors['base-text']};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }

  color: ${(props) => props.theme.colors['base-text']};
  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
  ${(props) =>
    props.isActive &&
    css`
      border-color: ${props.theme.colors['brand-purple-light']};
      background-color: ${props.theme.colors['brand-purple-light']};
    `}

  > p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['components-button-s']};
    font-weight: 400;
    line-height: 1.125rem;
  }
  gap: 0.75rem;
`;
export const CartaoDebito = styled.div`
  align-items: center;
  display: flex;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  width: 178px;
  height: 2.625rem;
  display: flex;

  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};
  &:focus-within {
    border-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  color: ${(props) => props.theme.colors['base-text']};
  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['components-button-s']};
    font-weight: 400;
    line-height: 1.125rem;
  }
  gap: 0.75rem;
`;
export const Dinheiro = styled.div`
  align-items: center;
  display: flex;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  width: 178px;
  height: 2.625rem;
  display: flex;

  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  background: ${(props) => props.theme.colors['base-input']};
  &:focus-within {
    border-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  color: ${(props) => props.theme.colors['base-text']};
  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['components-button-s']};
    font-weight: 400;
    line-height: 1.125rem;
  }
  gap: 0.75rem;
`;
