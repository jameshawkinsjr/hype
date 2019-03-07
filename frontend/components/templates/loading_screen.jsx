import React from 'react';

const LoadingScreen = () => (
    <div className="loading-modal-background-white">
        <div className="loading-modal-child flex-column">
            <img className="loading-logo" src={ window.images.hype_medium_color}/>
            <div className="loading-spinner">
            </div>
        </div>
    </div>
)

export default LoadingScreen;