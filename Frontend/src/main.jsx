import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// first do npm install react-error-boundary
import { ErrorBoundary } from 'react-error-boundary'
import ErrorMessage from './components/ErrorMessage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App /> {/* can wrap App or other high-level parent components */}
    </ErrorBoundary> 
  </React.StrictMode>,
)
