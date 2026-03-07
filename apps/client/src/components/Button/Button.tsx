import { useMemo, useState, type FC } from "react"
import styles from "./Button.module.scss"
import { Icon } from "../Icon"

interface BaseButtonProps {
    text: string
    style?: React.CSSProperties
    buttonStyle?: React.CSSProperties
    iconStyle?: React.CSSProperties
    hoverStyle?: React.CSSProperties
    icon?: string
    isDisabled?: boolean
}

interface SubmitButtonProps extends BaseButtonProps {
    type: "submit",
    onClick?: () => void
}

interface RegularButtonProps extends BaseButtonProps {
    type: "button" | "reset",
    onClick: () => void
}

type ButtonProps = SubmitButtonProps | RegularButtonProps

export const Button: FC<ButtonProps> = ({
    text,
    onClick, 
    style, 
    buttonStyle, 
    hoverStyle,
    iconStyle, 
    type, 
    icon,
    isDisabled = false
}) => {
    const [isHovered, setIsHovered] = useState(false)

    const disabledStyle = useMemo(() => ({
        opacity: "0.6",
        cursor: "not-allowed"
    }), [])

    return (
        <div 
            className={styles.buttonContainer} 
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button 
                type={type} 
                onClick={onClick} 
                className={styles.button} 
                style={{...buttonStyle, ...(isHovered && hoverStyle), ...(isDisabled && disabledStyle)}}
            >
                {icon &&
                    <Icon 
                        src={icon}
                        style={iconStyle}
                    />}
                {text}  
            </button>
        </div> 
    )
}