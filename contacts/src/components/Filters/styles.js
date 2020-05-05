import styled from 'styled-components';

export const Container = styled.div`
  .filters {
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  padding: 24px 0;
}

.filters__search {
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border}11;
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.border}11;
  display: flex;
  flex-wrap: nowrap;
  height: 40px;
  justify-content: stretch;
  margin-right: 8px;
  overflow: hidden;
  width: 100%;
}

.filters__search__input {
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: bold;
  outline: none;
  padding: 5px 10px;
  width: 100%;
}

.filters__search__icon {
  background: transparent;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secundary};
  margin-right: 5px;
}

.filters__search__icon:hover {
  color: ${({ theme }) => theme.colors.primary};
}

.filters__item {
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border}11;
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.border}11;
  color: #9FA9BC;
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.3rem;
  font-weight: normal;
  justify-content: center;
  margin: 0 8px;
  padding: 10px;
  white-space: nowrap;

  & i {
    color: #9FA9BC;
    margin-top: -5px;
    margin-left: 8px;
  }
}

.filters__item.is-selected {
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.border}11;
  color: #fff;

  & i {
    color: #fff;
  }
}
`;
