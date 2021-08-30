import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;

  width: 100%;
  justify-content: space-between;

  padding: 4px;
  margin-bottom: 40px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;

    width: 100%;
    height: 44px;

    padding: 8px;
  }

  button {
    background-color: #349eeb;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1.1);
    }

    span {
      color: #fff;
    }
  }
`;
