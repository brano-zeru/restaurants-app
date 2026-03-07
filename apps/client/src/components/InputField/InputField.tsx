import { useMemo, type FC } from "react";
import styles from "./InputField.module.scss";
import type { FieldError } from "react-hook-form";

interface BaseInputFieldProps {
    value: string,
    label?: string,
    placeholder?: string
    style?: React.CSSProperties,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    icon?: React.ReactNode,
}

export interface InputFieldProps extends BaseInputFieldProps {
    onBlur?: () => void
    name?: string
    type?: string
    error?: FieldError
}

export const InputField: FC<InputFieldProps> = ({
    value, 
    onChange, 
    onBlur, 
    name, 
    label, 
    placeholder, 
    type,
    style,
    error,
    icon,
}) => {
    const onErrorStyle = useMemo(() => ({
        borderColor: 'red'
    }), [])

    return (
        <div className={styles.fieldContainer}>
            <div className={styles.labelContainer}>
                <label className={styles.label}>{label}</label>
                {error && <label className={styles.error}>{error.message}</label>}
            </div>
            <div className = {styles.inputContainer} style={error && onErrorStyle}>
                <input 
                    className={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    type={type}
                    style={style}
                />
                {icon}
            </div>
        </div>
    )
}