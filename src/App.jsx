import { useState } from 'react'
import './App.css'
import './smartadmin-production.min.css'
import './font-awesome.min.css'
import { FaSearch } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="jarviswidget jarviswidget-color-darken">
                <div className="widget-body">

                    <div className="col-sm-8 col-sm-offset-2 centralizar">
                        <form action="#" method="post"  id="form-consultar-certificado-digital" >

                            <div className="panel panel-primary">

                                <div className="panel-heading">
                                    <h3 className="panel-title text-center">
                                    <FaSearch />
                                        Validação de Documento Digital
                                    </h3>
                                </div>

                                <br/> 
                                <br/> 

                                <div className="row item-center">
                                    <div className="col-xs-8 col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="docRegistro">* Documento de Registro
                                                <a title="CPF ou Documento Estrangeiro">
                                                <FaInfoCircle className='aviso'/>
                                                </a>
                                            </label>

                                            <div className="form-group">
                                                <input type="text" name="docRegistro" id="docRegistro" className="form-control"  placeholder="CPF ou Documento Estrangeiro" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="row item-center">
                                    <div className="col-xs-8 col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="chave">* CHAVE:</label>

                                            <div className="form-group">
                                                <input type="text" name="chave" id="chave" className="form-control"  placeholder="chave" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="item-center">
                                    <button type="button" className="btn btn-primary" id="btn-consultar">
                                    <FaSearch />
                                        Validar
                                    </button>

                                    <button type="button" className="btn cinzaekmjn" id="btn-limpar">
                                        Limpar
                                    </button>
                                </div>

                                <br>
                                </br>
                                <br>
                                </br>

                                <div className="panel panel-default esconder" id="painel-informacoes-documento">
                                    <div className="panel-body">
                                        <div className="row" id="row-informacoes-documento">

                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="pesNome"><b>Titular do Documento:</b></label>
                                                    <p className="form-control-static pesNome"></p>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="tdocDescricao"><b>Tipo:</b></label>
                                                    <p className="form-control-static tdocDescricao"></p>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="docrequeridoDataRequerido"><b>Data de
                                                            Emissão:</b></label>
                                                    <p className="form-control-static docrequeridoDataRequerido"></p>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="cursoNome"><b>Curso:</b></label>
                                                    <p className="form-control-static cursoNome"></p>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="instituicaoResponsavel">
                                                        <b>Instituição Responsável:</b>
                                                    </label>
                                                    <p className="form-control-static instituicaoResponsavel"></p>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group" id="responsavelAssinatura">
                                                    <label htmlFor="assinaturaResponsavel"><b>Responsável Pela
                                                            Assinatura:</b></label>
                                                    <p className="form-control-static assinaturaResponsavel"></p>
                                                </div>
                                            </div>

                                            <div className="col-sm-12 col-md-12">
                                                <div className="form-group no-display" id="divAveriguacaoPendente" >
                                                    <p className="form-control-static">
                                                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                                                        Documento encontra-se com uma averiguação em análise cadastrada!
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-sm-12 text-center">
                                            <button type="button" className="btn btn-default no-display" id="botao-documento-download"><i className="fa fa-download"></i>
                                                Download
                                            </button>
                                            <button type="button" className="btn btn-danger no-display" id="botao-solicitar-averiguar-documento"><i className="fa fa-exclamation-circle"></i> Analisar Validação
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                    </div>
                </div>
     </div>
  )
}

export default App
