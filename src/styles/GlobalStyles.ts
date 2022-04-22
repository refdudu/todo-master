import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #000000;
}
body,#root{
  background-color:#1f1f1f ;
}

html,
body,
#root,
button,
input,
select,
textarea {
  border: none;
  outline: none;
  
  font-size: 1rem;
  font-weight: 500;
  /* font-family: "Archivo", sans-serif;
  font-family: "Darker Grotesque", sans-serif; */
  font-family: "Poppins", sans-serif;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
}
`;
