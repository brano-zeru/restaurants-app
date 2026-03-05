import { type FC } from "react";
import { Navbar } from "../../components/Navbar";
import styles from "./Home.module.scss";

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
    return (
        <div className = {styles.container}>
            <Navbar />
        </div>
    )
}