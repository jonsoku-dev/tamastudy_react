import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    ${reset}
    *{
      box-sizing: border-box;
    }
    
`;
