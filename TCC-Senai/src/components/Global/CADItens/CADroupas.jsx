import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import CardFile from "../CADItens/Cardvendas";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./CADitens.module.css";

const schema = yup.object({
    nomeroupa: yup.string().required("esse campo é obrigatorio"),
    descroupa: yup.string().required("esse campo é obrigatorio"),
    corroupa: yup.string().required("esse campo é obrigatorio"),
    tamanhoroupa: yup.string().required("esse campo é obrigatorio"),
    marcaroupa: yup.string().required("esse campo é obrigatorio"),
    precoroupa: yup.number().positive().required("esse campo é obrigatorio"),
    quantidaderoupa: yup.number().positive().required("esse campo é obrigatorio"),
  }).required();

function CADroupa(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});

//pega as informações e envia para o console.log
    function cad(Data){
        console.log(Data)
    }

    console.log(errors)

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cor, setCor] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [marca, setMarca] = useState("");
    const [imagem, setImagem] = useState("camisa");

    function  handleAddRoupas(e){
        e.preventDefault();
    
        axios.post("http://localhost:3000/addRoupas", {
          nome, 
          descricao,
          cor,
          tamanho,
          preco,
          quantidade,
          marca,
          imagem
        })
          .then(res => {
            handleCloseModal(setAddUser);
            console.log("User Created")
            setUpdateWindow(!updateWindow)
          })
          .catch(err => console.log(err))
      }
    
    return(
        <>
        <main>
            {/* Lugar para cadastar uma foto do produto */}
            <CardFile />
            {/* Lugar para cadastar informações do produto */}

                <div className={styles["conteudo"]}>
                    <form onSubmit={(e) => handleAddRoupas(e)} className={styles["formulario"]}>
                        <label className={styles["label"]}>
                            Nome Roupa:
                            <input { ... register("nomeroupa", { required: true })} onChange={(e) => setNome(e.target.value) }/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Descrição:
                            <input type="text"  {... register("descroupa", { required: true })}onChange={(e) => setDescricao(e.target.value) }/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Cor:
                            <input type="text"  {... register("corroupa", { required: true })} onChange={(e) => setCor(e.target.value) }/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span> 
                            <br/>

                        <label className={styles["label"]}>
                            Tamanho:
                            <input type="text"  {... register("tamanhoroupa", { required: true })} onChange={(e) => setTamanho(e.target.value) }/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label className={styles["label"]}>
                            Preço:
                            <input type="number"  {... register("precoroupa", { required: true })} onChange={(e) => setPreco(e.target.value) }/>
                        </label>
                        <span>{errors.precoproduto?.message}</span>
                    <br/>
                    <label className={styles["label"]}>
                            Quantidade Produto:
                            <input type="number"  {... register("quantidadeproduto", { required: true })} onChange={(e) => setQuantidade(e.target.value) }/>
                        </label>
                        <span>{errors.quantidadeproduto?.message}</span>
                    <br/>
                    <label className={styles["label"]}>
                            Marca Produto:
                            <input type="text"  {... register("marcaproduto", { required: true })} onChange={(e) => setMarca(e.target.value) }/>
                        </label>
                        <span>{errors.marcaproduto?.message}</span>
                    <br/>

                        <button type='submit'  className={styles["button"]}>Cadastrar Item</button>

                    </form>
                </div>
        </main>
        </>

    )


}export default CADroupa;