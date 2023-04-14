import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;


  }

  body, #root {
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.colors.body};
    margin: 0 20px;
    overflow-x: hidden;
    /* overflow-y: scroll; */
    @media screen and (min-width: 768px){
      /* margin: 0 auto; */
      
    }

  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }
  input{
    border: 0;
  }
  /* width */
  /* ::-webkit-scrollbar {
    width: 10px;
  } */
  /* Track */
  ::-webkit-scrollbar-track {
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }
  ul{
    list-style: none;
  }
`;
