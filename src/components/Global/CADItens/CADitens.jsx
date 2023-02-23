import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import "./CADitens.css"

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
                <div className='img'>
                <input type="file"/>
                <button>
                  Upload!
                </button>
                </div>
            {/* Lugar para cadastar informações do produto */}
                <div className='conteudo'>
                    <form onSubmit={handleSubmit(cad)} className='formulario'>
                        <label>
                            Nome produto:
                            <input { ... register("nomeproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label>
                            Descrição produto:
                            <input type="text"  {... register("descproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label>
                            Tipo Produto:
                            <input type="text"  {... register("tipoproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span> 
                            <br/>

                        <label>
                            Tamanho Produto:
                            <input type="text"  {... register("tamanhoproduto", { required: true })}/>
                        </label>
                        <span>{errors.nomeproduto?.message}</span>
                    <br/>

                        <label>
                            Preço Produto:
                            <input type="number"  {... register("precoproduto", { required: true })}/>
                        </label>
                        <span>{errors.precoproduto?.message}</span>
                    <br/>

                        <button type='submit'>Cadastrar Item</button>

                    </form>
                </div>
        </main>
        </>

    )
}

export default CADitens;