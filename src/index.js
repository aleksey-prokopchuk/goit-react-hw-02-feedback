import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*

    <p class="title">
      Please leave feedback
    </p>
    <div class="wraper_btn">
<button class="btn good" type="button">Good: <span>0</span></button>
    <button class="btn neutral" type="button">Neutral: <span>0</span></button>
    <button class="btn bad" type="button">Bad: <span>0</span></button>
    </div>
    
    <p class="title">Statistics</p>
    <p class="text">Good: <span class="result">0</span></p>
    <p class="text">Neutral: <span class="result">0</span></p>
    <p class="text">Bad: <span class="result">0</span></p>
    <p class="text">Total: <span class="result">0</span></p>
    <p class="text">Positive feedback: <span class="result">0%</span></p>

*/
