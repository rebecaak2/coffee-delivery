import styled from 'styled-components';

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
export const TotalItens = styled.span`
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 400;
  line-height: 1.3rem;
`;
export const Entrega = styled.span`
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 400;
  line-height: 1.3rem;
`;
export const Total = styled.span`
  font-size: ${({ theme }) => theme.textSizes['text-bold-l']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 700;
  line-height: 1.625rem;
`;
export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-end;
`;
export const TotalItensPrice = styled.span`
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 400;
  line-height: 1.3rem;
`;
export const EntregaPrice = styled.span`
  font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 400;
  line-height: 1.3rem;
`;
export const TotalPrice = styled.div`
  font-size: ${({ theme }) => theme.textSizes['text-bold-l']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-weight: 700;
  line-height: 1.625rem;
`;
