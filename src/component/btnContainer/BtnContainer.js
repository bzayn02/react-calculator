import React from 'react';

export const BtnContainer = ({ handleOnButtonClick }) => {
    const btns = [
        'AC',
        'C',
        '/',
        '*',
        7,
        8,
        9,
        '-',
        4,
        5,
        6,
        '+',
        1,
        2,
        3,
        '=',
        'OFF',
        0,
    ];

    return (
        <section className="items">
            {btns.map((btn, i) => (
                <button key={i} onClick={() => handleOnButtonClick(btn)}>
                    {btn}
                </button>
            ))}
        </section>
    );
};
