import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
if(module.hot){//阻止页面刷新 提升用户体验
    module.hot.accept()
}

ReactDOM.render(
    <Router>
        <App />
    </Router>
    
    , document.getElementById('root'));


