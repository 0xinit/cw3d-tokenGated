import React from 'react';
import styles from '../styles/NoAuNft.module.css';

const NoAuNft = ({ walletAddress, contractAddress }) => {
  return (
    <div className={styles.noAccessContainer}>
      <div className={styles.noAccessBox}>
        <h1 className={styles.noAccessTitle}>No Alchemy University Early Access NFT</h1>
        <p className={styles.noAccessText}>
          Your wallet <span className={styles.addressText}>{walletAddress}</span> does not own an Alchemy University Early Access NFT from the contract <span className={styles.addressText}>{contractAddress}</span>, and that's why you are ineligible to mint the CW3D NFT or any Alchemy DAO Token.
        </p>
      </div>
    </div>
  );
};

export default NoAuNft;
