import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
