import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/paths';
import {WalletInfo} from "./WalletInfo";

export const Header = () => {
    return (
        <div className="Header">
            <Link to={ROUTES.SWAP}>CHYMERV</Link>
            <Link to={ROUTES.SWAP}>Swap</Link>
            <Link to={ROUTES.STAKE}>Stake</Link>
            <Link to={ROUTES.CLAIM_NFT}>Claim NFT</Link>
            <Link to={ROUTES.PLAY}>Play</Link>
            <Link to={ROUTES.SHOP}>Shop</Link>
            <WalletInfo />
        </div>
    );
};