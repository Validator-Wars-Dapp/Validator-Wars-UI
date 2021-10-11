import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ClaimNFTView } from './views/claim-nft/CaimNFTView';
import { PlayView } from './views/play/PlayView';
import { ShopView } from './views/shop/ShopView';
import { StakeView } from './views/stake/StakeView';
import { SwapView } from './views/swap/SwapView';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
          <Switch>
            <Route
              exact
              path="/swap"
              component={() => <SwapView />}
            />
            <Route
              exact
              path="/stake"
              component={() => <StakeView />}
            />
            <Route
              exact
              path="/claimnft"
              component={() => <ClaimNFTView />}
            />
            <Route
              exact
              path="/play"
              component={() => <PlayView />}
            />
            <Route
              exact
              path="/shop"
              component={() => <ShopView />}
            />
            <Route path="/" component={() => <SwapView />} />
          </Switch>
      </HashRouter>
    </>
  );
}
