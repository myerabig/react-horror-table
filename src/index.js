import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './react-auth0-wrapper';
import config from './auth_config.json';

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri='http:localhost:3000'
    onRedirectCallback={onRedirectCallback}>
    <AppRouter />
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
