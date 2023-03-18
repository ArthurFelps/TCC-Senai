import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CardFile from "../CADItens/Cardvendas";

import styles from "./CADitens.module.css";

const schema = yup.object({
    nomewhey: yup.string().required("esse campo é obrigatorio"),
    descwhey: yup.string().required("esse campo é obrigatorio"),
    saborwhey: yup.string().required("esse campo é obrigatorio"),
    tamanhowhey: yup.string().required("esse campo é obrigatorio"),
    precowhey: yup.number().positive().required("esse campo é obrigatorio"),
  }).required();

function CADwhey(){
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
                            Nome Whey:
                            <input { ... register("nomewhey", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                        
                    <br/>

                        <label className={styles["label"]}>
                            Descrição whey:
                            <input type="text"  {... register("descwhey", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Sabor Whey:
                            <input type="text"  {... register("saborwhey", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span> 
                            <br/>

                        <label className={styles["label"]}>
                            Tamanho:
                            <input type="text"  {... register("tamanhowhey", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Preço:
                            <input type="number"  {... register("precowhey", { required: true })}/>
                        </label>
                        <span>{errors.precoproduto?.message}</span>
                    <br/>

                        <button type='submit'  className={styles["button"]}>Cadastrar Item</button>

                    </form>
                </div>
        </main>
        </>

    )


}export default CADwhey;