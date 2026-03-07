import { useCallback, useState, type FC } from "react"
import { InputField, type InputFieldProps } from "../InputField"
import { Icon } from "../../Icon"

interface PasswordFieldProps extends InputFieldProps {
    hiddenIconSrc: string,
    visibleIconSrc: string,
}

export const PasswordField: FC<PasswordFieldProps> = ({
    hiddenIconSrc,
    visibleIconSrc,
    ...props
}) => {
    const [passwordHidden, setIsPasswordHidden] = useState(true)

    const togglePasswordVisibility = useCallback(() => {
        setIsPasswordHidden(prev => !prev)
    }, [setIsPasswordHidden])

    return (
        <InputField 
            {...props}
            type = {passwordHidden ? 'password' : 'text'}
            icon = {
                <Icon
                    src = {passwordHidden ? hiddenIconSrc : visibleIconSrc}
                    onClick = {togglePasswordVisibility}
                    style={{
                        width: '19px',
                        height: '19px',
                    }}
                    hoverStyles={{
                        cursor: 'pointer',
                    }}
                />
            }
        />
    )
}