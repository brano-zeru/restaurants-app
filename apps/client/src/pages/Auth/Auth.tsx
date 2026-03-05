import { useMemo, type FC } from "react";
import styles from "./Auth.module.scss"
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { getPath } from "../../routes";
import { Pages } from "../../consts";

export const Auth: FC = () => {
    const navigate = useNavigate();

    const buttonStyles = useMemo(() => ({
        border: "none",
        borderRadius: "5px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        flexGrow: 1,
        padding: "10px 30px",
    }), [])

    const hoverStyle = useMemo(() => ({
        opacity: "0.6"
    }), [])

    return (
        <div className={styles.container}>
            <div className={styles.greetingTitle}>Welcome to Our Restaurant Collection</div>
            <hr className={styles.separator} />
            <div className={styles.footer}>
                <div className={styles.description}>Great Food, Great moments.</div>
                <div className={styles.menu}>
                    <Button
                        text="Log In"
                        type="button"
                        onClick={() => navigate(getPath(Pages.LOGIN))}  
                        buttonStyle={buttonStyles}
                        hoverStyle={hoverStyle}
                    />
                    <Button
                        text="Sign Up"
                        type="button"
                        onClick={() => navigate(getPath(Pages.SIGNUP))}
                        buttonStyle={buttonStyles}
                        hoverStyle={hoverStyle}
                    />
                </div>
            </div>
        </div>
    )
}