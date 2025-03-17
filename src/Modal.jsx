import './App.css'
import './smartadmin-production.min.css'
import './index.css'

function Moda() {

    return (
        <>

            <div className="modal fade in modalstyle" role="dialog" aria-hidden="true" data-keyboard="true" data-backdrop="static" aria-labelledby="label" id="modal-solicitar-averiguar-documento" ><div className="modal-backdrop fade in modaldiv" ></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="Close" id="fechar-docrequerido-atualizar-rejeitar">×
                            </button>
                            <h4 className="modal-title">Solicitar averiguação do Documento</h4>
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
                                                        <div className="select2-container form-control" id="s2id_docrequeridoMotivoAveriguar"><a href="javascript:void(0)" onClick={()=>{return false}} className="select2-choice select2-default" tabIndex="-1">   <span className="select2-chosen">Selecione uma opção</span><abbr className="select2-search-choice-close"></abbr>   <span className="select2-arrow"><b></b></span></a><input className="select2-focusser select2-offscreen" type="text" id="s2id_autogen1"/></div><input type="text" name="docrequeridoMotivoAveriguar" id="docrequeridoMotivoAveriguar" className="form-control select2-offscreen" placeholder="Selecione uma opção" tabIndex="-1"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer text-center">
                            <button type="button" id="btn-modal-solicitar-averiguar-documento-cancelar" className="btn btn-warning" title="Cancelar Análise">
                                Cancelar Análise
                            </button>
                            <button type="button" id="btn-modal-solicitar-averiguar-documento-confirmar" className="btn btn-primary" title="Confirmar Análise">
                                Confirmar Análise
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Moda