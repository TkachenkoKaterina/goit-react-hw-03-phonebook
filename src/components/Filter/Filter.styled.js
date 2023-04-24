import styled from 'styled-components';

export const Label = styled.label`
  display: inline-block;
  padding: 0 15px;
  background-color: ${props => props.theme.colors.accent};
  margin-bottom: 30px;
`;

export const Input = styled.input`
  margin: 15px 15px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
`;
