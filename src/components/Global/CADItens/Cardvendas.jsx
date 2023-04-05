import { Link } from "react-router-dom";
import styles from '../CADitens/CADitens.module.css';
import { useState } from "react";
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai' 

export default function CardFile() {

	const [image, setImage] = useState(null);
	const [fileName, setFileName] = useState("No selected file");
 	

	return (


		<div className={styles["img"]}>

		{/* <label className={styles["picture"]} tabIndex={0}> */}
			<form onClick={() => document.querySelector(".input-field").click()} className={styles["formimage"]}>
				<input type="file" accept="image/*" className="input-field" hidden 
				onChange={({target: {files}})  => {
					files[0] && setFileName(files[0].name)
					if(files){
						setImage(URL.createObjectURL(files[0]))
					}
				}} />
				{image ?
					<img src={image} width={60} height={60} alt={fileName}/>
					:
			<>
					<MdCloudUpload color="#1475cf" size={60} />
					<p>Browse Files to upload</p>			
			</>
				}
			
			</form>
			<div className={styles["img_nameinfo"]}>
				<AiFillFileImage color="#1475cf"/>
				<span className={styles["img_content"]}>
					{fileName}
					<MdDelete
						onClick={() => {
							setFileName("No selected File")
							setImage(null)
						}}
					/>
				</span>
			</div>

		{/* <span className={styles["picture_image"]}>Escolha uma imagem</span>
			<input type="file"className={styles["picture_input"]}/>
		</label> */}

		</div>


	)

}

