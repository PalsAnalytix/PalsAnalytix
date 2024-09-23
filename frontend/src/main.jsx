import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from 'react-redux';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <Auth0Provider
      domain="palsanalytix.us.auth0.com"
      clientId="pSKcVPlsxvZSfMinRuVZOZrzjgBl6uop"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
    </Provider>
  </StrictMode>
);
