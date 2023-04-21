import React, { useEffect, useState } from "react";
import RestrictedAccess from "./RestrictedAccess";
import { useAccount } from "wagmi";
import NftMinter from "../components/NftMinter";
import AlchemyDaoMinter from "../components/AlchemyDaoMinter";
import contract from "../abi/CreateWeb3DappNFT.json";
import NoAuNft from "./NoAuNft";
import styles from "../styles/tokenGated.module.css";


export default function TokenGated() {
    const [isNftOwner, setIsNftOwner] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // State variable to manage the selected minting option
    const [selectedOption, setSelectedOption] = useState("");
    const { address: walletAddress, isConnected, isDisconnected } = useAccount();
    const [isMounted, setIsMounted] = useState(false);

    // Inputting the contract address manually for Alchemy Early Access NFT
    const contractAddress = "0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6";
    // Inputting the chain manually for now
    const chain = "MATIC_MAINNET";

    // checking ownership of the AU NFT with alchemy APIs
    const checkNftOwnership = async () => {
        setIsLoading(true);

        const res = await fetch("/api/tokenGated", {
            method: "POST",
            body: JSON.stringify({
                address: walletAddress,
                chain: chain ? chain : "MATIC_MAINNET",
            }),
        });

        if (res.ok) {
            const { isNftOwner } = await res.json();
            setIsNftOwner(isNftOwner);
        } else {
            setIsNftOwner(false);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        if (isMounted) {
            checkNftOwnership();
        }
    }, [walletAddress, contractAddress, chain, isMounted]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    if (!isMounted) {
        return null;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <>
            {/* if user is disconnected, then load restricted page */}
            {isDisconnected ? (
                <RestrictedAccess />
            ) : isNftOwner ? (
                <div className={styles.tokenGatedContainer}>
                    {/* Render buttons to select the minting option */}
                    {!selectedOption && (
                        <div>
                            <button
                                className={styles.mintButton}
                                onClick={() => handleOptionClick("cw3d")}
                            >
                                Mint CW3D Alchemy NFT
                            </button>
                            <button
                                className={styles.mintButton}
                                onClick={() => handleOptionClick("alchemyDao")}
                            >
                                Mint Alchemy DAO Token
                            </button>
                        </div>
                    )}

                    {/* Conditionally render the selected minting component */}
                    {/* When User selects to mint CW3D NFT */}
                    {selectedOption === "cw3d" && (
                        <NftMinter
                            contractAddress={"0x9FaCAf075Cda7C0947DA0F0B4164332e01422E97"}
                            tokenUri={
                                "https://ipfs.filebase.io/ipfs/QmcZMwBfYwRfysPyLaJzMk5RwsgXnVz7JDkbh6eRbAfSjJ/QmdeEmVuLKxhy63CfLkt193sYTRHLLCH6qzyghBS27k7uJ"
                            }
                            abi={contract.abi}
                        />
                    )}
                    {/* When user selects Alchemy DAO token*/}
                    {selectedOption === "alchemyDao" && (
                        <AlchemyDaoMinter
                            walletAddress={walletAddress} />
                    )}
                </div>
            ) : (
                // if the user doesn't own any AU NFT then show this
                <NoAuNft walletAddress={walletAddress} contractAddress={contractAddress}
                />
            )}
        </>
    );
}