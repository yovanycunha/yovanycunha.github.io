import React from 'react'
import GlobalStyle from './assets/styles/globalStyle';

import Fullpage from './components/Fullpage/Fullpage';

function App() {
  return (
    <React.Fragment>
      <Fullpage />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default App;
