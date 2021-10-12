import React, {useState} from 'react';
import {BiWallet} from "react-icons/all";

export const WalletInfo = () => {
    const walletAddress = useState("");

    return (
        <div id="Wallet">
            <div className="WalletInfo">
                0 mGen {walletAddress} <BiWallet />
            </div>
        </div>
    );
};