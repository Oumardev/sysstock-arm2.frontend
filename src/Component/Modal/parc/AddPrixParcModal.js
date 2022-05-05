import React, {useState, useEffect } from "react";
import './modal.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { parcSelector , listParc, addPrixParc  } from "../../../slices/parcSlice";
import { varieteSelector , listVariete  } from "../../../slices/varieteSlice";
import { useDispatch, useSelector } from "react-redux";

const modalStyle = {
    body : {
        margin : "10px"
    },

    form :{
        margin : "5px"
    },

    content_form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "15px"
    },

    label : {
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        margin: "5px",
        padding: "5px",
        borderRadius: "10px"
     },
     
     uploadphoto : {
        opacity: 0,
        position: "absolute",
        zIndex: "-1",
     },

     errorMsg : {
         color : 'red'
     }
}


function AddPrixParcModal({setShowModal}) {

    const dispatch = useDispatch()
    const { ls_parc} = useSelector(parcSelector)
    const { ls_variete } = useSelector(varieteSelector)

    useEffect(()=>{
        dispatch(listVariete())
        dispatch(listParc())
    },[])

    const getvariete_id = (variete = undefined)=>{
        if(variete){
            const item = ls_variete.filter((item)=>{
                return item.nom == variete
            })
            
            if(item.length != 0)
                return item[0].id
        }
    }

    const getParc_id = (marche = undefined)=>{
        if(marche){
            const item = ls_parc.filter((item)=>{
                return item.nom == marche
            })
            
            if(item.length != 0)
                return item[0].id
        }
    }


    const addPrixParcSchema = Yup.object().shape({
        variete: Yup.string()
          .min(1, 'Trop court!')
          .max(100, 'Trop long!')
          .required('Champs requis'),

        parc: Yup.string()
          .required('Champs requis'),

        prix_bascule: Yup.string()
            .required('Champs requis'),

        prix_sac: Yup.string()
            .required('Champs requis'),
        
        quantite_stocke : Yup.number()
            .required('Champs requis'),

    });
      
    
    return(
        <React.Fragment>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un prix parc</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
               
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        variete: '', 
                        parc: '', 
                        prix_bascule: '', 
                        prix_sac: '', 
                        quantite_stocke : 0
                    }}
                    
                    validationSchema = {addPrixParcSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            variete_id : getvariete_id(values.variete),
                            parc_id : getParc_id(values.parc),
                            prix_bascule : values.prix_bascule,
                            prix_sac : values.prix_sac,
                            quantite_stockee : values.quantite_stocke
                        };
                        
                        // add Prix Parc

                        console.log(data)
                        dispatch(addPrixParc(data))
                        setShowModal(false)
                        document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

                    }}>
                {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => (
                    <Form>
                        <div style={modalStyle.content_form}>
                        <div className="row">  
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Variete</label>
                                </div>
                                <select value={values.frequence} onChange={handleChange} onBlur={handleBlur} id="variete" name="variete" class="custom-select">
                                    <option value="" selected>Choisissez une variete...</option>
                                        {
                                            ls_variete.map((item)=>{
                                                return <option value={item.nom}>{item.nom}</option>
                                            })
                                        }
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="variete" component={'div'} />

                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">parc</label>
                                </div>
                                
                                <select value={values.parc} onChange={handleChange}  onBlur={handleBlur} id="parc" name="parc" class="custom-select">
                                    <option value="" selected>Choisissez un parc...</option>
                                    {
                                        ls_parc.map((item)=>{
                                            return <option value={item.nom}>{item.nom}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="parc" component={'div'} /> 
                        </div>

                        <div className="row">
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Prix bascule:</label>
                                <Field type="text" name="prix_bascule" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="prix_bascule" component={'div'} />
                            </div>
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Prix sac:</label>
                                <Field type="text" name="prix_sac" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="prix_sac" component={'div'} />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Quantite stocke:</label>
                                <Field type="text" name="quantite_stocke" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="quantite_stocke" component={'div'} />
                            </div>
                        </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn-cancel" data-dismiss="modal">Annuler</button>
                            <button type="button" onClick={handleSubmit} className="btn-add">Enregistrer</button>
                        </div>
                    </Form>
                    )}
                </Formik>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default AddPrixParcModal