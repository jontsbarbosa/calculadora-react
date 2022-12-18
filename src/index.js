import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import Parent from "./Parent";

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <div role="alert" className='alert-div'>
      <p>O que?!? Você quebrou o site fazendo cálculos impossíveis <span role="img" aria-labelledby="emoji">🤦‍♂️</span></p>
      <pre>Você precisará atualizar o site...</pre>
      <button className='refresh-btn' onClick={resetErrorBoundary}>Atualizar o site</button>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Parent />
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
); 
