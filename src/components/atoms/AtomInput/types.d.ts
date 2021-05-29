type InputProps = {
    type?: "text" | "textbox";
    placeholder?: string;
    id?: string;
    icon?: string;
    margin?: string;
    name?: string;
    label?: string;
    width?: string;
    height?: string;
    colorLabel?: string;
    backgroundcolor?: string;
    onChange?: (string) => void;
}


export default InputProps;