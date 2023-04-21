// TestTokenGated.jsx
import React, { useEffect, useState } from "react";
import TokenGated from "./TokenGated";
import RestrictedAccess from "./RestrictedAccess";
import { useAccount } from "wagmi";

function TestTokenGated() {
    const { address: walletAddress, isConnected, isDisconnected } = useAccount();

    // Replace with any contract address
    const contractAddress = "0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6";
    // You can change this to another chain if needed
    const chain = "MATIC_MAINNET";

    const { isNftOwner, isLoading } = TokenGated({ walletAddress, contractAddress, chain });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

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
                    The wallet address {walletAddress} owns the NFT from the contract
                    address {contractAddress}!
                </div>
            ) : isLoading ? (<div>loading...</div>) : (<div>
                The wallet address {walletAddress} does not own the NFT from the contract address {contractAddress}.
            </div>)

            }
        </>
    );
}

export default TestTokenGated;
