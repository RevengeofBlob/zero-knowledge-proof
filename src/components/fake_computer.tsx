import React from 'react';

type Entry = {
    userId?: string;
    request?: number;
}

const Computer: React.FC<Entry> = ({userId, request}) => {
    return(
        <html>
        <head>
            <title>Computer</title>
        </head>
        <body>
            <div>
                
            </div>
        </body>
        </html>
    );
};

export default Computer;