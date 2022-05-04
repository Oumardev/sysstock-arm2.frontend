import React, { useState, useEffect } from "react";
import './modal.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { userSelector, editPrixMarche } from "../../../slices/userSlice";
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


function EditPrixMarcheModal({dataModal : { id ,variete, marche, prix_detaillant, prix_demi_gros, sac_demi_gros, prix_gros, quantite_stockee } ,setShowModal}) {

    const { ls_variete , ls_marche} = useSelector(userSelector)

    const dispatch = useDispatch()


    const getvariete_id = (variete = undefined)=>{
        if(variete){
            const item = ls_variete.filter((item)=>{
                return item.nom == variete
            })
            
            if(item.length != 0)
                return item[0].id
        }
    }

    const getmarche_id = (marche = undefined)=>{
        if(marche){
            const item = ls_marche.filter((item)=>{
                return item.nom == marche
            })
            
            if(item.length != 0)
                return item[0].id
        }
    }


    const editPrixMarcheSchema = Yup.object().shape({
        variete: Yup.string()
          .min(1, 'Trop court!')
          .max(100, 'Trop long!')
          .required('Champs requis'),

        marche: Yup.string()
          .required('Champs requis'),

        prix_detaillant: Yup.string()
            .required('Champs requis'),

        prix_demigros: Yup.string()
            .required('Champs requis'),

        sac_demigros : Yup.string()
            .required('Champs requis'),

        prix_gros : Yup.string()
            .required('Champs requis'),
        
        quantite_stocke : Yup.number()
            .required('Champs requis'),

    });
      
    
    return(
        <React.Fragment>
            <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier un prix marche</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
               
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        id: id,
                        variete: variete.nom ?? '', 
                        marche: marche.nom ?? '', 
                        prix_detaillant: prix_detaillant, 
                        prix_demigros: prix_demi_gros, 
                        sac_demigros: sac_demi_gros ?? '',
                        prix_gros: prix_gros,
                        quantite_stocke : quantite_stockee
                    }}
                    
                    validationSchema = {editPrixMarcheSchema}
                    enableReinitialize={true}
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            id : values.id, 
                            variete_id : getvariete_id(values.variete),
                            marche_id : getmarche_id(values.marche),
                            prix_detaillant : values.prix_detaillant,
                            prix_demi_gros : values.prix_demigros,
                            sac_demi_gros : values.sac_demigros,
                            prix_gros : values.prix_gros,
                            quantite_stockee : values.quantite_stocke
                        };
                        
                        // edit Prix Marche

                        dispatch(editPrixMarche(data))
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
                                <select value={values.variete} onChange={handleChange} onBlur={handleBlur} id="variete" name="variete" class="custom-select">
                                    <option value="" selected>Choisissez une variete...</option>
                                        {
                                            ls_variete.map((item, key)=>{
                                                return <option key={key} value={item.nom}>{item.nom}</option>
                                            })
                                        }
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="variete" component={'div'} />

                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">marche</label>
                                </div>
                                {console.log(values)}
                                <select value={values.marche} onChange={handleChange}  onBlur={handleBlur} id="marche" name="marche" class="custom-select">
                                    <option value="" selected>Choisissez un marche...</option>
                                    {
                                        ls_marche.map((item, key)=>{
                                            return <option key={key} value={item.nom}>{item.nom}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="marche" component={'div'} /> 
                        </div>

                        <div className="row">
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Prix detaillant:</label>
                                <Field type="text" name="prix_detaillant" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="prix_detaillant" component={'div'} />
                            </div>
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Prix demi gros:</label>
                                <Field type="text" name="prix_demigros" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="prix_demigros" component={'div'} />
                            </div>
                        </div>

                        <div className="row">
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Sac demi gros</label>
                                </div>
                                
                                <select value={values.sac_demigros} onChange={handleChange}  onBlur={handleBlur} id="sac_demigros" name="sac_demigros" class="custom-select">
                                    <option value="" selected>Choisissez un sac demi gros...</option>
                                    <option value={`sac_10_kg`}>10 KG</option>
                                    <option value={`sac_25_kg`}>25 KG</option>
                                    <option value={`sac_50_kg`}>50 KG</option>
                                    <option value={`sac_100_kg `}>100 KG</option>
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="sac_demigros" component={'div'} /> 
                        </div>

                        <div className="row">
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Prix gros:</label>
                                <Field type="text" name="prix_gros" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="prix_gros" component={'div'} />
                            </div>
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

export default EditPrixMarcheModal