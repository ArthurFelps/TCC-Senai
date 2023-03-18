import { Link } from "react-router-dom";
import styles from '../CADitens/CADitens.module.css';

export default function CardFile() {
	return (

		<div className={styles["img"]}>

			<input type="file" className={styles["input"]} />
			<button className={styles["button"]}>
				Upload!
			</button>

		</div>


	)

}

