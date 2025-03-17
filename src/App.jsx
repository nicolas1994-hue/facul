import { useState } from 'react'
import './App.css'
import './smartadmin-production.min.css'
import './LoadingScreen.css';
import './index.css'

import { FaSearch } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

import Moda from './Modal';

function App() {

    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [cpf, setCpf] = useState("042.756.021-70")
    const [chave, setChave] = useState("7C7AE9F1-BE0BA58C-98D158CA-BF158269")

    const handleDownload = () => {
        const pdfUrl = "https://faculdadequallis.com/documento.pdf"; // Substitua pela URL real
      
        fetch(pdfUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "documento.pdf"; // Nome do arquivo baixado
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => console.error("Erro ao baixar o PDF:", error));
      };

    // Função para alternar a visibilidade
    const toggleVisibility = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 4000);
        setTimeout(() => {
            setIsVisible(!isVisible);
        }, 4000);// Simula o carregamento por 3 segundos


    };

    return (
        <>
            <div className="row">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="jarviswidget jarviswidget-color-darken">
                        <div className="widget-body">

                            <div className="col-sm-8 col-sm-offset-2 centralizar">
                                <div id="form-consultar-certificado-digital" >

                                    <div className="panel panel-primary">

                                        <div className="panel-heading">
                                            <h3 className="panel-title text-center">
                                                <FaSearch className='espaco' />
                                                Validação de Documento Digital
                                            </h3>
                                        </div>

                                        <br />
                                        <br />

                                        <div className="row item-center">
                                            <div className="col-xs-8 col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="docRegistro">* Documento de Registro
                                                        <a title="CPF ou Documento Estrangeiro">
                                                            <FaInfoCircle className='aviso' />
                                                        </a>
                                                    </label>

                                                    <div className="form-group">
                                                        <input type="text" name="docRegistro" id="docRegistro" className="form-control" value={cpf} placeholder="CPF ou Documento Estrangeiro" onChange={(e) => setValor(e.target.value)} />
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                        <div className="row item-center">
                                            <div className="col-xs-8 col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="chave">* CHAVE:</label>

                                                    <div className="form-group">
                                                        <input type="text" name="chave" id="chave" value={chave} className="form-control" placeholder="chave" onChange={(e) => setValor(e.target.value)} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-center">
                                            <button onClick={toggleVisibility} className="btn btn-primary">
                                                <FaSearch className='espaco' />
                                                Validar
                                            </button>

                                            <button type="button" className="btn cinza" id="btn-limpar">
                                                Limpar
                                            </button>
                                        </div>

                                        <br>
                                        </br>
                                        <br>
                                        </br>
                                        <div className={`loading-overlay ${loading ? 'active' : ''}`}>
                                            <div className="loading-content">
                                                <p className='ptela'>Consultando Documento aguarde...</p>
                                            </div>
                                        </div>
                                        {isVisible && (
                                            <div className="panel panel-default margemdez " id="painel-informacoes-documento">
                                                <div className="panel-body ">
                                                    <div className="row" id="row-informacoes-documento">

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="pesNome"><b>Titular do Documento:</b></label>
                                                                <p className="form-control-static pesNome">PRISCILA NERES DA SILVA</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="tdocDescricao"><b>Tipo:</b></label>
                                                                <p className="form-control-static tdocDescricao">Certificado de Conclusão de Curso</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="docrequeridoDataRequerido"><b>Data de
                                                                    Emissão:</b></label>
                                                                <p className="form-control-static docrequeridoDataRequerido">03/03/2022 09:50</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="cursoNome"><b>Curso:</b></label>
                                                                <p className="form-control-static cursoNome">GESTÃO EM QUALIDADE EM SERVIÇOS DE SAÚDE E HOSPITALAR</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label htmlFor="instituicaoResponsavel">
                                                                    <b>Instituição Responsável:</b>
                                                                </label>
                                                                <p className="form-control-static instituicaoResponsavel">CENTRO UNIVERSITÁRIO FAVENI - UNIFAVENI</p>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6 esconder">
                                                            <div className="form-group" id="responsavelAssinatura">
                                                                <label htmlFor="assinaturaResponsavel"><b>Responsável Pela
                                                                    Assinatura:</b></label>
                                                                <p className="form-control-static assinaturaResponsavel"></p>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-12 esconder">
                                                            <div className="form-group no-display" id="divAveriguacaoPendente" >
                                                                <p className="form-control-static">
                                                                    <i className="fa fa-exclamation-circle " aria-hidden="true"></i>
                                                                    Documento encontra-se com uma averiguação em análise cadastrada!
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="col-sm-12 text-center">
                                                        <button type="button" className="btn btn-default no-display" onClick={handleDownload}><FaDownload className='espacodown fontep' />
                                                            Download
                                                        </button>
                                                        <button type="button" className="btn btn-danger no-display" data-toggle="modal" data-target="#exampleModal"><FaExclamationCircle className='espacodown fontep' />
                                                            Analisar Validação
                                                        </button>
                                                    


            
                                                    </div>
                                                </div>
                                            </div>

                                        )}



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                                            

                <div className="col-xs-12 text-center" >
                    Versa Tecnologia © 2025
                </div>
            </div>
            {/* inicio modal */}
            {/*<div className="modal fade in modalstyle" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ><div className="modal-backdrop fade in modaldiv"></div>
                <div className="modal-dialog" role='document'>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Solicitar averiguação do Documento</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="jarviswidget jarviswidget-color-darken no-margin-bottom">
                                        <div className="widget-body">
                                            <form name="form-averiguar-documento" id="form-averiguar-documento" method="post" encType="multipart/form-data">
                                                <div className="col-sm-12">
                                                    <p>Solicite a instituição para analisar este documento caso as informações não
                                                        estejam coerentes com o impresso ou com os dados exibidos nos campos!</p>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label htmlFor="s2id_autogen1">* Motivo da solicitação:</label>
                                                        <div className="select2-container form-control" id="s2id_docrequeridoMotivoAveriguar"><a href="javascript:void(0)" onClick={fecha} className="select2-choice select2-default" tabIndex="-1">   <span className="select2-chosen">Selecione uma opção</span><abbr className="select2-search-choice-close"></abbr>   <span className="select2-arrow"><b></b></span></a><input className="select2-focusser select2-offscreen" type="text" id="s2id_autogen1" /><div className="select2-drop select2-display-none select2-with-searchbox">   <div className="select2-search">       <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="select2-input" />   </div>   <ul className="select2-results">   </ul></div></div><input type="text" name="docrequeridoMotivoAveriguar" id="docrequeridoMotivoAveriguar" className="form-control select2-offscreen" placeholder="Selecione uma opção" tabIndex="-1" />
                                                    </div></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer text-center">
                            <button type="button"  className="btn btn-warning" data-dismiss="modal" title="Cancelar Análise">
                                Cancelar Análise
                            </button>
                            <button type="button" id="btn-modal-solicitar-averiguar-documento-confirmar" className="btn btn-primary" title="Confirmar Análise">
                                Confirmar Análise
                            </button>
                        </div>

                    </div>
                </div>
            </div>*/}

            {/* inicio modal teste */}






        </>
    )
}

export default App
