import React, { useState } from "react";
import styles from "../styles/AlchemyDaoMinter.module.css";

const AlchemyDaoMinter = ({ walletAddress }) => {
    const [isMinting, setIsMinting] = useState(false);

    const handleMint = async () => {
        setIsMinting(true);
        // Call ERC20 here, we will leave as it is for a while.
    };

    return (
        <div className={styles.container}>
            <h2>Mint Alchemy DAO Token</h2>
            <div>
                <p>You will be able to mint 500 DAO tokens.</p>
                <p>Connected Wallet Address: {walletAddress}</p>
                <button onClick={handleMint} disabled={isMinting} className={styles.button}>
                    {isMinting ? "Minting..." : "Mint DAO Tokens"}
                </button>
            </div>
        </div>
    );
};

export default AlchemyDaoMinter;
