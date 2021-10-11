import React from 'react';
import '../styles/App.scss';
import { Routes } from '../routes';
import { Footer } from '../components/Footer';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/paths';

function App() {
  return <>
    {/*<div className="Header">*/}
    {/*  <Link to={ROUTES.SWAP}>CHYMERV</Link>*/}
    {/*  <Link to={ROUTES.SWAP}>Swap</Link>*/}
    {/*  <Link to={ROUTES.STAKE}>Stake</Link>*/}
    {/*  <Link to={ROUTES.CLAIM_NFT}>Claim NFT</Link>*/}
    {/*  <Link to={ROUTES.PLAY}>Play</Link>*/}
    {/*  <Link to={ROUTES.SHOP}>Shop</Link>*/}
    {/*</div>*/}
    <Routes />
    <Footer />
    </>;
}

export default App;
