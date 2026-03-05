import type { FC } from "react";
import styles from "./Form.module.scss";

interface FormProps {
    fields: React.ReactNode[];
    submitButton: React.ReactNode;
    title?: string;
    subtitle?: string;
    footer?: React.ReactNode;
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const Form: FC<FormProps> = ({fields, title, subtitle, footer, submitButton, onSubmit}) => {
    return (
        <form className = {styles.formContainer} onSubmit={onSubmit}>
            {title && <div className = {styles.formHeader}>
                <div className = {styles.title}>{title}</div>
                {subtitle && <div className = {styles.subtitle}>{subtitle}</div>}
                <hr className={styles.separator}/>
            </div>}
            <div className = {styles.formBody}>
                <div className = {styles.fieldsContainer}>
                    {fields}
                </div>
                {submitButton}
            </div>
            <div className = {styles.formFooter}>
                {footer}
            </div>
        </form>
    )
}