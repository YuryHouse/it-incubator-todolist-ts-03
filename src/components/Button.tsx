import React from 'react';

type PropsType = {
    name: string,
    callBack: () => void
    btnClass?: string
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button
            className={props.btnClass}
            onClick={onClickHandler}>{props.name}</button>
    );
};

