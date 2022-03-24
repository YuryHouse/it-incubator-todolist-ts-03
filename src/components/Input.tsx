import React, {ChangeEvent, KeyboardEvent} from 'react';

type propsType = {
    title: string
    setTitle: (title: string) => void
    callBack: () => void
    error: boolean
    setError: (error: boolean) => void
}

export const Input = ({setTitle, title, ...props}: propsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        props.setError(false)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.callBack();
        }
    }
    return (
        <input value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={props.error ? "error" : ""}
        />
    );
};
