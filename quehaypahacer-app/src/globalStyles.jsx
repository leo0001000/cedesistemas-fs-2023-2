import styled, { createGlobalStyle } from 'styled-components'

export const COLORS = {
  primary:'#022B3A',
  secondary:'#1F7A8C',
  success: '#198753',
  error: '#DC3444',
  info:  '#BFDBF7'
}


export const GlobalStyles = createGlobalStyle`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
  }

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}


`
export const Button = styled.button` //button lo reconoce cuando lo importamos en el index//
  width: 100%;
  border: none;
  color: white; //Color de fuente
  //background-color: ${COLORS.secondary};
  background-color: ${props => props.color || COLORS.primary}; //Para cuando me llegen otros botones con o sin color dar un default
  font-size: 1em;
  padding:12px 0px;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  text-transform: uppercase;
  font-weight: 700;

  &:hover{
    opacity: 1;
  }
`
export const FormContainer = styled.section`
  //border: 1px solid red;

`;

export const FormControl = styled.div`

  margin: 12px;

  input {
    width: 100%;
    font-family: 'Montserrat';
    font-size: 1.1em;
    border: 2px solid $(COLORS.secondary);
    border-radius: 6px;
    padding: 8px 10px;
    outline: none;
  }
  label {
    font-size: ${props => props.fontSize || "1.0em"}; //atributo modificable fuente
  }
`
