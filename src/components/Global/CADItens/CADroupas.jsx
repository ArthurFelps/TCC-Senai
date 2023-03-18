import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CardFile from "../CADItens/Cardvendas";

import styles from "./CADitens.module.css";

const schema = yup.object({
    nomeroupa: yup.string().required("esse campo é obrigatorio"),
    descroupa: yup.string().required("esse campo é obrigatorio"),
    corroupa: yup.string().required("esse campo é obrigatorio"),
    tamanhoroupa: yup.string().required("esse campo é obrigatorio"),
    precoroupa: yup.number().positive().required("esse campo é obrigatorio"),
  }).required();

function CADroupa(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});

//pega as informações e envia para o console.log
    function cad(Data){
        console.log(Data)
    }

    console.log(errors)

    return(
        <>
        <main>
            {/* Lugar para cadastar uma foto do produto */}
            <CardFile/>
            {/* Lugar para cadastar informações do produto */}

                <div className={styles["conteudo"]}>
                    <form onSubmit={handleSubmit(cad)} className={styles["formulario"]}>
                        <label className={styles["label"]}>
                            Nome Roupa:
                            <input { ... register("nomeroupa", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                        
                    <br/>

                        <label className={styles["label"]}>
                            Descrição:
                            <input type="text"  {... register("descroupa", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Cor:
                            <input type="text"  {... register("corroupa", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span> 
                            <br/>

                        <label className={styles["label"]}>
                            Tamanho:
                            <input type="text"  {... register("tamanhoroupa", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Preço:
                            <input type="number"  {... register("precoroupa", { required: true })}/>
                        </label>
                        <span>{errors.precoproduto?.message}</span>
                    <br/>

                        <button type='submit'  className={styles["button"]}>Cadastrar Item</button>

                    </form>
                </div>
        </main>
        </>

    )


}export default CADroupa;