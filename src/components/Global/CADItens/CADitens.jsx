import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import styles from "./CADitens.module.css";

const schema = yup.object({
    nomeproduto: yup.string().required("esse campo é obrigatorio"),
    descproduto: yup.string().required("esse campo é obrigatorio"),
    tipoproduto: yup.string().required("esse campo é obrigatorio"),
    tamanhoproduto: yup.string().required("esse campo é obrigatorio"),
    precoproduto: yup.number().positive().required("esse campo é obrigatorio"),
  }).required();

function CADitens(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});

//pega as informações e envia para o console.log
    function cad(Data){
        console.log(Data)
    }

    console.log(errors)

    return(
        <>
        {/* Lugar para cadastar uma foto do produto */}
        <header>
                oi
        </header>

        <main>
            {/* Lugar para cadastar uma foto do produto */}
                <div className={styles["img"]}>
                    <input type="file" className={styles["input"]}/>
                        <button className={styles["button"]}>
                            Upload!
                        </button>
                </div>
            {/* Lugar para cadastar informações do produto */}
                <div className={styles["conteudo"]}>
                    <form onSubmit={handleSubmit(cad)} className={styles["formulario"]}>
                        <label className={styles["label"]}>
                            Nome produto:
                            <input { ... register("nomeproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Descrição produto:
                            <input type="text"  {... register("descproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Tipo Produto:
                            <input type="text"  {... register("tipoproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span> 
                            <br/>

                        <label className={styles["label"]}>
                            Tamanho Produto:
                            <input type="text"  {... register("tamanhoproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Preço Produto:
                            <input type="number"  {... register("precoproduto", { required: true })}/>
                        </label>
                        <span>{errors.precoproduto?.message}</span>
                    <br/>

                        <button type='submit'  className={styles["button"]}>Cadastrar Item</button>

                    </form>
                </div>
        </main>
        </>

    )
}

export default CADitens;