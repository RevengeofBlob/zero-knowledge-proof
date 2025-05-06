import React, { useState } from 'react';
import Webpage from './third_party_website';
import './fake_computer.css';

export const getHash = () => {
    return 10;
};

type ComputerProps = {
    username: string;
}

const Computer: React.FC<ComputerProps> = (username) => {
    const [showSite, setShowSite] = useState(false)

    return(
        <html>
        <head>
            <title>Computer</title>
        </head>
        <body>
            <div className="monitor">
                <div className="screen">
                    {showSite ? <Webpage /> : <p style={{ color: "#ccc" }}>Click to load</p>}
                </div>
                <button onClick={() => setShowSite(true)}>Start Computer</button>
            </div>
        </body>
        </html>
    );
};

export default Computer;