const setHandle = (setter, onChange) => {
    return (input) => {
        setter(input);
        if (onChange) {
            onChange(input);
        }
    }
}

export default setHandle;
