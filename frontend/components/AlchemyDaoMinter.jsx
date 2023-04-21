import React, { useState } from "react";
import styles from "../styles/AlchemyDaoMinter.module.css";

const AlchemyDaoMinter = ({ walletAddress }) => {
    const [isMinting, setIsMinting] = useState(false);

    const handleMint = async () => {
        setIsMinting(true);
        // Call your ERC20 contract with governance functionality to mint 500 DAO tokens here
        // Remember to set setIsMinting(false) after the minting process is completed or if an error occurs
    };

    return (
        <div className={styles.container}>
            <h2>Mint Alchemy DAO Token</h2>
            <div>
                <img
                    src="your_blue_svg_image_url_here"
                    alt="blue_svg"
                    style={{ width: "100px", height: "100px" }}
                />
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
