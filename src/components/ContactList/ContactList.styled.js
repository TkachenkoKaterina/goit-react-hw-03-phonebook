import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${props => props.theme.colors.input};
  width: 450px;
`;
