import React, {useState} from 'react';
import classes from './Counter.modules.scss'

export const Counter = () => {
    const [state, setState] = useState<number>(0)

    const onClick = () => {
        setState(prevState => prevState +1)
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClick} className={classes.button}>counter</button>
        </div>
    );
};

