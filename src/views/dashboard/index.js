import React from 'react';
import ViewHeader from './view-header';
import ViewContent from './view-content';
import Axios from './axios';

// styling
import './style.css';

export default () => (
    <div className="view">
        <ViewHeader />
        <ViewContent />
        <Axios />
    </div>
);
