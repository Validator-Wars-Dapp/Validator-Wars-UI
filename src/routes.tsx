import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { ClaimNFTView } from './views/claim-nft/CaimNFTView';
import { PlayView } from './views/play/PlayView';
import { ShopView } from './views/shop/ShopView';
import { StakeView } from './views/stake/StakeView';
import { SwapView } from './views/swap/SwapView';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {TermsOfUseView} from './views/terms-of-use/TermsOfUseView';
import {DocsView} from './views/docs/DocsView';
import {HowItWorksView} from './views/how-it-works/HowItWorksView';

export function Routes() {
  return (
    <>
      <HashRouter basename={'/'}>
          <Header />
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
              path="/termsofuse"
              component={() => <TermsOfUseView />}
            />
            <Route
              exact
              path="/docs"
              component={() => <DocsView />}
            />
            <Route
              exact
              path="/howitworks"
              component={() => <HowItWorksView />}
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
          <Footer />
      </HashRouter>
    </>
  );
}
