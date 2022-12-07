import styled from 'styled-components';

export const CoffeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  display: flex;
  align-items: center;
  padding: 0 1.875rem;
  flex-direction: column;
  img {
    position: relative;
    bottom: 30px;
    width: 7.5rem;
    height: 7.5rem;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
export const TagsColor = styled.div`
  span {
    background-color: ${({ theme }) => theme.colors['brand-yellow-light']};

    border-radius: 999px;
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-weight: 700;
    line-height: 0.8125rem;
    padding: 0.25rem 0.5rem;
    margin: 0 0.3125rem;
  }
`;

export const Name = styled.h2`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.textSizes['title-title-s']};
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors['base-subtitle']};
`;

export const Description = styled.p`
  width: 13.5rem;
  height: 2.25rem;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors['base-label']};
  font-weight: 400;
  text-align: center;
  line-height: 130%;
`;
export const Buy = styled.div`
  margin-top: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13rem;
  height: 2.375rem;
  gap: 2.1875rem;

  span {
    padding-left: 0.1875rem;
    font-size: ${({ theme }) => theme.textSizes['title-title-m']};
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: 800;
  }
`;
export const Action = styled.div`
  display: flex;
  justify-content: space-around;

  > p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 400;
    line-height: 1.3rem;
  }
  width: 72px;
  height: 2.375rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  button {
    display: flex;
    align-items: center;

    border: none;
    svg {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
    background-color: transparent;
  }
`;

export const Background = styled.button`
  border: none;
  align-items: center;
  border-radius: 6px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors['brand-purple-dark']};
  svg {
    color: ${({ theme }) => theme.colors['base-card']};
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
`;
