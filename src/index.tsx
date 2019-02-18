import * as React from "react";
import * as ReactDOM from "react-dom";
declare let module: any;

import { App } from "./App";

const RenderApp = () => <App />;

ReactDOM.render(<RenderApp />, document.getElementById("root") as HTMLElement);

if (module.hot) {
  module.hot.accept();
}
