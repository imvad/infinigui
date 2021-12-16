import React, { ReactNode } from 'react'
import Button from '@mui/material/Button';

import './Button.css'

export interface ButtonProps {
    color: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    children: ReactNode;
    size: "small" | "medium" | "large" | undefined;
    variant: "text" | "contained" | "outlined" | undefined;
}

const IButton = (props: ButtonProps) => {
    console.log(props)
    return <Button {...props}>{props.children}</Button>
}

export default IButton
