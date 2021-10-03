import { useState } from 'react';

import { BtnContainer } from './component/btnContainer/BtnContainer';
import { Display } from './component/display/Display';
import './App.css';

function App() {
    const [textToDisplay, setTextToDisplay] = useState('');
    const [isOff, setIsOFF] = useState(false);
    const [isPrank, setIsPrank] = useState(false);

    const handleOnButtonClick = (val) => {
        if (val === '=') {
            return onTotal();
        }
        isPrank && setIsPrank(false);

        if (val === 'AC') {
            return setTextToDisplay('');
        }
        if (val === 'C') {
            const str = textToDisplay.toString().slice(0, -1);
            return setTextToDisplay(str);
        }
        if (val === 'OFF') {
            return setIsOFF(!isOff);
        }

        setTextToDisplay(textToDisplay + val);
    };

    const onTotal = () => {
        const randomNum = randomVal();
        if (randomNum > 0) {
            setIsPrank(true);
        }
        const total = eval(textToDisplay) + randomNum;
        setTextToDisplay(total.toString());
    };

    const randomVal = () => {
        const rand = Math.floor(Math.random() * 10);

        return rand < 3 ? rand : 0;
    };
    return (
        <div>
            <h1>React Prank Calculator 🤪</h1>

            <div className="mainParent">
                <div id="lastValue"></div>
                <Display
                    textToDisplay={textToDisplay}
                    isOff={isOff}
                    isPrank={isPrank}
                />
                <BtnContainer handleOnButtonClick={handleOnButtonClick} />
            </div>
        </div>
    );
}

export default App;
