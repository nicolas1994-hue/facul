import { useState } from 'react'
import './App.css'
import './smartadmin-production.min.css'
import './LoadingScreen.css';

import { FaSearch } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

function App() {

    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);


    // Função para alternar a visibilidade
    const toggleVisibility = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000); 
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
                                                        <input type="text" name="docRegistro" id="docRegistro" className="form-control" placeholder="CPF ou Documento Estrangeiro" />
                                                    </div>
                                                   

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row item-center">
                                            <div className="col-xs-8 col-sm-4">
                                                <div className="form-group">
                                                    <label htmlFor="chave">* CHAVE:</label>

                                                    <div className="form-group">
                                                        <input type="text" name="chave" id="chave" className="form-control" placeholder="chave" />
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
                                                        <button type="button" className="btn btn-default no-display" id="botao-documento-download"><FaDownload className='espacodown fontep' />
                                                            Download
                                                        </button>
                                                        <button type="button" className="btn btn-danger no-display" id="botao-solicitar-averiguar-documento"><FaExclamationCircle className='espacodown fontep' />
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


                <div className="col-xs-12 text-center " >
                    Versa Tecnologia © 2025    </div>
            </div>




        </>
    )
}

export default App
