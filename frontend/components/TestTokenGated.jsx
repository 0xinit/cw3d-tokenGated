// TestTokenGated.jsx
import React from "react";
import TokenGated from "./TokenGated";
import { useAccount } from "wagmi";

function TestTokenGated() {
    const walletAddress = "0x8480D20583A3138Fef7C23EeD8F17Bf3C01E73b7"; // 
    // const { walletAddress, isConnected, isDisconnected } = useAccount();
    console.log(walletAddress)
    // Replace with a valid wallet address
    const contractAddress = "0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6"; // Replace with a valid contract address
    const chain = "MATIC_MAINNET"; // You can change this to another chain if needed

    const { isNftOwner, isLoading } = TokenGated({ walletAddress, contractAddress, chain });
    // console.log(walletAddress)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // console.log(isNftOwner)

    if (isNftOwner) {
        return (
            <div>
                The wallet address {walletAddress} owns the NFT from the contract address {contractAddress}!
            </div>
        );
    }

    return (
        <div>
            The wallet address {walletAddress} does not own the NFT from the contract address {contractAddress}.
        </div>
    );
}

export default TestTokenGated;
