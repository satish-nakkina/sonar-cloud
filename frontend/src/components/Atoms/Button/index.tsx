import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
export interface ButtonCompProps extends ButtonProps {
    label: string;
    onClick?: () => void;
    startIcon?: JSX.Element;
    variant?: "text" | "contained" | "outlined";

    buttonStyles?: React.CSSProperties;
}

const Button = ({
    label,
    onClick,
    startIcon,
    variant,
    ...props
}: ButtonCompProps) => {
    return (
        <MuiButton
            onClick={onClick}
            variant={variant}
            startIcon={startIcon}
            {...props}
            fullWidth
        >
            {label}
        </MuiButton>
    );
};

export default Button;
