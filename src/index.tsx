import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StoreContext } from 'redux-react-hook';
declare let module: any;

import { App } from './App';
import { store } from './configureStore';

const RenderApp = () => (
  <StoreContext.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContext.Provider>
);

ReactDOM.render(<RenderApp />, document.getElementById('root') as HTMLElement);

if (module.hot) {
  module.hot.accept();
}
