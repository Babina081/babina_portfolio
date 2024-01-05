import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context';

ReactDOM.render(
  <ThemeProvider >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


// const root = document.getElementById('root');
// const container = createRoot(root);

// // Use the new createRoot API to create a root level container
// container.render(<App />);
