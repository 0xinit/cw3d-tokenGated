import { useEffect, useState } from "react";

export default function TokenGated({ walletAddress, contractAddress, chain }) {
    const [isNftOwner, setIsNftOwner] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
        checkNftOwnership();
    }, [walletAddress, contractAddress, chain]);

    return { isNftOwner, isLoading };
}

