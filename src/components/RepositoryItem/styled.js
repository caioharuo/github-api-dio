import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: 150px;

  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px;
  padding: 8px;

  align-content: center;
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #2d3748;
  margin: 8px 0;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  color: #349eeb;
  font-weight: bold;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
