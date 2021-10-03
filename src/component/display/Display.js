import React from 'react';

export const Display = ({ textToDisplay, isOff, isPrank }) => {
    let clsName = 'result ';
    clsName = isPrank ? clsName + 'prank' : clsName;
    clsName = isOff ? clsName + 'off' : clsName;

    if (isPrank) {
        clsName += ' prank';
    }

    return (
        <div>
            <div id="result" className={clsName}>
                {textToDisplay || '0.00'}
            </div>
        </div>
    );
};
