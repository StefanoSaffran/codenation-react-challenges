import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  article:first-child {
    span {
      color: ${({ theme }) => theme.colors.title};
    }
  }
}

@media screen and (min-width: 728px) {
    padding: 16px 0;
}

.contact {
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border}11;
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.border}11;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 1.2rem;
  margin-bottom: 20px;
  overflow: hidden;
  padding: 5px;

  &:first-of-type {
    margin-bottom: 5px;
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0 5px;
    font-weight: bold;

    & .contact__avatar {
      height: 0;
      border: none;
    }

  }
}

.contact__avatar {
  border-radius: 50px;
  height: 35px;
  overflow: hidden;
  width: 35px;
  border: 2px solid #9FA9BC;
  margin-right: 10px;

  & img {
    height: 100%;
  }
}

.contact__data {
  width: calc(100% / 6);
  padding: 0 10px;
  color : ${({ theme }) => theme.colors.text};
}

.contact__data:nth-child(2) {
  color: #4C84FF;
}
`;
