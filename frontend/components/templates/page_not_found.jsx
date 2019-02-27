import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Header from './header';

const PageNotFound = () => {
    return (
        <>
        <Header />
        <div className="not-found-body flex">
            <div className="not-found-modal flex">
                <h2>There's been a glitch...</h2>
                <p className="not-found-modal-subtext">We’re not quite sure what went wrong. You can go back, or try looking on our Help Center if you need a hand.</p>
            </div>
        </div>
        </>
    )
}

export default PageNotFound;