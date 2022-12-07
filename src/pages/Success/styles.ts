import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  h1 {
    color: ${(props) => props.theme.colors['brand-yellow-dark']};
    font-size: ${(props) => props.theme.textSizes['title-title-l']};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 800;
    line-height: 2.6rem;
    padding-bottom: 0.25rem;
  }

  > p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.textSizes['text-regular-l']};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 400;
    line-height: 1.625rem;
  }
`;
export const OrderInfo = styled.section`
  width: 526px;

  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid ${(props) => props.theme.colors['brand-yellow-dark']};
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const OrderGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
export const OrderColumn = styled.div`
  display: flex;

  flex-direction: column;
  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['text-regular-m']};
    font-family: ${(props) => props.theme.fonts.regular};
    font-weight: 700;
    line-height: 1.3rem;
    font-style: bold;
  }
`;

export const Background = styled.div`
  background: ${(props) => props.theme.colors['brand-purple']};
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.colors['base-button']};
  }
`;

export const BackgroundTime = styled.div`
  background: ${(props) => props.theme.colors['brand-yellow']};
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.colors['base-button']};
  }
`;

export const BackgroundDolar = styled.div`
  background: ${(props) => props.theme.colors['brand-yellow-dark']};
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${(props) => props.theme.colors['base-button']};
  }
`;

export const Image = styled.div``;
