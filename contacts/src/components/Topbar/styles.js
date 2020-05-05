import styled from 'styled-components';

export const Container = styled.div`
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 4px 10px ${({ theme }) => theme.colors.border}11;
  left: 0;
  padding: 10px 16px;
  position: fixed;
  top: 0;
  width: 100%;

div.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

div.container .react-toggle {
  position: absolute;
  right: 20px;
}

.topbar__logo {
  display: inline-block;
  height: 40px;
}

.topbar__logo svg {
  height: 100%;
}
`;
