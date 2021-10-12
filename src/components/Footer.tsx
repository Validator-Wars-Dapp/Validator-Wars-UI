import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/paths";

export const Footer = () => {
    return (
        <div className="Footer">
            <Link to={ROUTES.SWAP}>CHYMERV</Link>
            <Link to={ROUTES.HOW_IT_WORKS}>How it works</Link>
            <Link to={ROUTES.DOCS}>Docs</Link>
            <Link to={ROUTES.TERMS_OF_USE}>Terms of use</Link>
            <div className="footerSocialMedia">

            </div>

        </div>
    );
};