import React from 'react';
import './third_party_website.css';
import { getHash } from './fake_computer';

const Webpage: React.FC = () => {

    const authentication = getHash();

    return(
        <div style={{ color: "lime", background: "grey", height: "100%", padding: "1rem" }}>
            <h1>Authenticating</h1>
        </div>
    );
};

export default Webpage;