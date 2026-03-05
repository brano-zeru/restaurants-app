import type { FC } from "react";
import styles from "./Navbar.module.scss"
import { useAuth } from "../../contexts/AuthContext/useAuth";
import { Button } from "../Button";

export const Navbar: FC = () => {
    const {user, logout} = useAuth()
    return (
        <div className = {styles.navbar}>
            <div className = {styles.greetingTitle}>Hello there, <span className={styles.username}>{user?.username}</span>!</div>
            <Button
                text="Log out"
                type="button"
                onClick={logout}
                style={{
                    height: 'auto'
                }}
                buttonStyle={{
                    height: '100%'
                }}
            />
        </div>
    )
}