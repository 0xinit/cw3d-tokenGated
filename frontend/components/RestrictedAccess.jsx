import React from 'react';
import styles from '../styles/RestrictedAccess.module.css';

const RestrictedAccess = () => {
    return (
        <div className={styles.restrictedContainer}>
            <div className={styles.restrictedBox}>
                <h1 className={styles.restrictedTitle}>Restricted Page</h1>
                <p className={styles.restrictedText}>
                    The dapp you're trying to access to mint an NFT is token-gated,
                    and you need to have an Alchemy Early access NFT to mint a CW3D NFT.
                </p>
            </div>
        </div>
    );
};

export default RestrictedAccess;
