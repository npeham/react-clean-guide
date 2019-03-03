import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

declare let module: any;

import { App } from './App';

const RenderApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(<RenderApp />, document.getElementById('root') as HTMLElement);

if (module.hot) {
  module.hot.accept();
}
