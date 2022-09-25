import * as React from 'react';
import ReactDOM from 'react-dom/client';
import PageErrorFallback from '@components/Lib/BeautifulError';
import ErrorBoundary from '@components/Lib/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import App from '@pages/App';
const root = ReactDOM.createRoot(document.getElementById('app')!)
root.render(
  <ErrorBoundary fallbackRender={PageErrorFallback}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
  
);
