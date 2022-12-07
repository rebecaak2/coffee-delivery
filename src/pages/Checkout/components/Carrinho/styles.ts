import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: ${(props) => props.theme.textSizes['title-title-xs']};
    line-height: 1.4625rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: ${({ theme }) => theme.fonts.title};
    margin-bottom: 0.9375rem;
  }
`;

export const Cards = styled.section`
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding-bottom: 40px;

  max-width: 27rem;

  border-top-left-radius: 0.375rem;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
  border-bottom-right-radius: 0.375rem;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  padding-top: 3rem;
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  padding-right: 40px;

  justify-content: space-between;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors['base-button']};
  max-width: 23rem;
  margin-top: 2.25rem;
  margin-left: 2.25rem;
  padding: 12px 8px 12px 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['brand-yellow']};
  color: ${({ theme }) => theme.colors['base-white']};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 700;
  line-height: 1.625rem;
  border: none;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['brand-yellow-dark']};

    transition: background-color 0.2s;
  }
`;
