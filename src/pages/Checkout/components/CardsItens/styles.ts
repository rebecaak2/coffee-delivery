import styled from 'styled-components';

export const ContainerInfo = styled.nav`
  padding-top: 2.5rem;
  padding-left: 40px;
  padding-right: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > p {
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors['base-text']};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 700;
  }
`;
export const ContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
  span {
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 400;
    line-height: 1.3rem;
  }

  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  button {
    border: none;
    svg {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
    background-color: transparent;
  }
`;
export const ContainerRemover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  padding-top: 0.4063rem;
  padding-bottom: 0.4063rem;
  padding-left: 0.25rem;
  padding-right: 0.5rem;

  span {
    font-size: ${({ theme }) => theme.textSizes['components-button-s']};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: 400;
    line-height: 1.2rem;
  }

  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  cursor: pointer;
  border: none;
  svg {
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: 10.6875rem;
  height: 3.8125rem;
  h2 {
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
  }
`;

export const ContainerBottomRow = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
