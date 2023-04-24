import styled from 'styled-components';
import { Form as FormikForm, Field as Input } from 'formik';

export const Form = styled(FormikForm)`
  display: inline-block;
  padding: 0 15px;
  background-color: ${props => props.theme.colors.accent};
`;

export const Field = styled(Input)`
  margin: 15px 15px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.text};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
`;

export const Button = styled.button`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 150px;
  border-radius: 4px;
  padding: 5px;
  border: none;
  background-color: ${props => props.theme.colors.input};
  cursor: pointer;
`;

// export const ErrorMessage = styled(FormikErrorMessage)`
//   font-size: 14px;
//   color: ${p => p.theme.colors.error};
// `;
