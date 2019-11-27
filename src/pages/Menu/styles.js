import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin: 0 auto 1px;
  padding: 30px;
  font-size: 24px;
  border: 1px solid #eee;

  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin-right: 20px;
      color: var(--primary);
      font-weight: bold;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: var(--primaryDark);
      }
    }
  }

  input {
    width: 200px;
    height: 35px;
    border-radius: 4px;
  }
`;
