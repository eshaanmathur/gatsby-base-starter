import { injectGlobal } from 'styled-components';
import { grey } from './theme/colors';

export default () => injectGlobal`
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
  font-size: inherit;
}

body {
  background-color: ${grey};
  font-family: 'Open Sans', sans-serif;
}
`;
