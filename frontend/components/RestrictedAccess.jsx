import React from 'react';
import '../styles/Restricted.module.css';

const RestrictedAccess = () => {
    return (
        <div className="restricted-container">
            <div className="restricted-box">
                <h1 className="restricted-title">Restricted Page</h1>
                <p className="restricted-text">
                    You need to hold Alchemy Early Access NFT to access the Minting page.
                </p>
            </div>
        </div>
    );
};

export default RestrictedAccess;
