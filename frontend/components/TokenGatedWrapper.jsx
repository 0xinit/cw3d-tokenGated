// should only be used if we have hydration errors with the TokenGated component. Otherwise ignore.

import React from 'react';
import { useAccount } from 'wagmi';
import TestTokenGated from './TestTokenGated';

function TokenGatedWrapper() {
    const account = useAccount();
    const walletAddress = account?.address;
    console.log(walletAddress)
    return <TestTokenGated walletAddress={walletAddress} />;
}

export default TokenGatedWrapper;
