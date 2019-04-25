import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
declare let module: any;

import { App } from './App';
import { store } from './configureStore';

const RenderApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<RenderApp />, document.getElementById('root') as HTMLElement);

if (module.hot) {
  module.hot.accept();
}
