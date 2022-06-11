import React from "react";
import App from './App'
import 'antd/dist/antd.css';
import store from "./store/store";
import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        {/* 无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}>即可 */}
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);