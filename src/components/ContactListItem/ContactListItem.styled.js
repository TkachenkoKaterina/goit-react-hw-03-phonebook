import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  padding: 5px;
  justify-content: space-around;
  cursor: pointer;
  align-items: center;
  // svg {
  //   color: ${props => props.theme.colors.accent};
  // }
`;

export const Button = styled.button`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100px;
  border-radius: 4px;
  padding: 5px;
  border: none;
  background-color: ${props => props.theme.colors.input};
  cursor: pointer;
  svg {
    color: ${props => props.theme.colors.accent};
  }
`;
