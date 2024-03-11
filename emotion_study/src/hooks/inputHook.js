import { useState } from "react";

export function useInput() {
    const [ inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;

        if(value.length < 20) {
            setInputValue(() => value);
        }
    }
    return [ inputValue, onchange ];
}

export function useMaxSizeValueValidateInput(maxSize) {
    const [ inputValue, setInputValue ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        if(value.length <= maxSize) {
            setInputValue(() => value);
        }
    }
    return [ inputValue, onChange ];
}