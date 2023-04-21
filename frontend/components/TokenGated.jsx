import React, { useEffect, useState } from "react";
import RestrictedAccess from "./RestrictedAccess";
import { useAccount } from "wagmi";
import NftMinter from "../components/NftMinter";
import contract from "../abi/CreateWeb3DappNFT.json";
import NoAuNft from "./NoAuNft";

export default function TokenGated() {
    const [isNftOwner, setIsNftOwner] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { address: walletAddress, isConnected, isDisconnected } = useAccount();

    // Inputting the contract address manually for Alchemy Early Access NFT
    const contractAddress = "0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6";
    // Inputting the chain manually for now
    const chain = "MATIC_MAINNET";
    const [isMounted, setIsMounted] = useState(false);

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

    if (!isMounted) {
        return null;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {isDisconnected ? (
                <RestrictedAccess />
            ) : isNftOwner ? (
                <div>
                    {/* The wallet address {walletAddress} owns the NFT from the contract
                    address {contractAddress}!
                     */}
                    <NftMinter
                        contractAddress={"0x9FaCAf075Cda7C0947DA0F0B4164332e01422E97"}
                        tokenUri={
                            "https://ipfs.filebase.io/ipfs/QmcZMwBfYwRfysPyLaJzMk5RwsgXnVz7JDkbh6eRbAfSjJ/QmdeEmVuLKxhy63CfLkt193sYTRHLLCH6qzyghBS27k7uJ"
                        }
                        abi={contract.abi}
                    />
                </div>
            ) : (
                <NoAuNft walletAddress={walletAddress} contractAddress={contractAddress} />
            )}
        </>
    );
}
