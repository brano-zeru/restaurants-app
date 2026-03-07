import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss"
import { Button } from "../../components/Button";
import { Pages } from "../../consts";
import { getPath } from "../../routes";

export const NotFound = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className = {styles.error}>ERROR 404</div>
            <div className = {styles.message}>Lost ?</div>
            <div className = {styles.submessage}>The page you're looking for "{pathname.replace('/', '')}" doesn't exist yet
                - but the restaurant is always open.
            </div>
            <Button
                text="Back to home"
                onClick={() => navigate(getPath(Pages.HOME))}
                type="button"
                style={{
                    
                }}
                buttonStyle={{
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    fontWeight: "400",
                    backgroundColor: "#de6a2b",
                    padding: '8px 18px'
                }}
                iconStyle={{
                    paddingTop: '5px'
                }}
            />  
        </div>
    )
}