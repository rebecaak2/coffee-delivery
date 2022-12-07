import styled from 'styled-components';

export const ButtonSubmit = styled.button`
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
`;
