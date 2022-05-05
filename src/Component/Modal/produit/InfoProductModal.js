import React, {useState } from "react";
import icon_profile from '../../../assets/profile-picture.svg'
import { addVariete } from "../../../slices/varieteSlice";
import convertImgToBase64 from '../../../Utils/helpers'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import './modal.css'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

const AddVariete = ({ID_PRODUIT ,setIsAddVariete, setShowModal}) =>{

    const [imageProfile, setImageProfile] = useState(null)
    const dispatch = useDispatch()

    const handleImage = (event)=>{
        setImageProfile(URL.createObjectURL(event.target.files[0]))
    }   

    const editProductSchema = Yup.object().shape({
        nom: Yup.string()
          .required('Champs requis'),

        description: Yup.string()
          .required('Champs requis'),

        origin: Yup.string()
          .required('Champs requis'),
    });

    return (
        <React.Fragment>
            {/** Begin forms  */}
            <Formik
            initialValues={{ 
                photo: '', 
                nom: '', 
                description: '',
                origin : '',
                produit_id: ID_PRODUIT
            }}
            
            validationSchema = {editProductSchema}
            
            onSubmit={(values, { setSubmitting }) => {

                const data = {
                    image_base64: values.photo, 
                    nom: values.nom, 
                    description: values.description,
                    origine: values.origin,
                    produit_id : values.produit_id
                };

                // Add variété
                dispatch(addVariete(data))
                
                setShowModal(false)
                document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

                console.log(data)
            }}>
            {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => (
                <Form>
                    <div style={modalStyle.content_form}>
                    <div className="ple-pic" style={{display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                        <img src={imageProfile == null ? icon_profile : imageProfile} style={{width:"100px", borderRadius:"60px"}} />
                        <label for="photo" style={modalStyle.label}>Chosir une image</label>
                        <input
                            onChange={(e)=> {
                                handleImage(e)
                                    const convertImg = async() =>{
                                        const img = await convertImgToBase64(e.target.files[0]) 
                                        console.log(img)
                                        setFieldValue('photo', img)
                                    }
                                    convertImg()
                                }
                            }  
                            type="file" name="photo" id="photo" 
                            style={modalStyle.uploadphoto} 
                        />
                    </div>
                    <div class="row">
                        <div className="form-group" style={modalStyle.form}>
                            <label for="recipient-name" className="col-form-label">Nom:</label>
                            <Field type="text" name="nom" className="form-control" id="recipient-name" />
                            <ErrorMessage className="error-msg" name="nom" component={'div'} />
                        </div>
                    </div>

                        <div className="form-group" style={modalStyle.form}>
                            <label for="recipient-name" className="col-form-label">Description:</label>
                            <textarea  
                                class="form-control" 
                                name="description"  
                                id="exampleFormControlTextarea1" 
                                rows="5"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                >
                            </textarea>
                            <ErrorMessage className="error-msg" name="description" component={'div'} />
                        </div>

                        <div class="row">
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Origin</label>
                                </div>
                                
                                <select value={values.origin} onChange={handleChange} onBlur={handleBlur} id="origin" name="origin" class="custom-select">
                                    <option value="" selected>Choisissez une origine...</option>
                                    <option value="local">Local</option>
                                    <option value="import">Import</option>
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="origin" component={'div'} />
                        </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" onClick={() => setIsAddVariete(false)} className="btn-cancel" data-dismiss="modal">Annuler</button>
                            <button type="button" onClick={handleSubmit} className="btn-add">Enregistrer</button>
                        </div>
                </Form>
            )}
        </Formik>
    </React.Fragment>
    )
}

const handleRemoveStyle = () =>{
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
}

function InfoProductModal({dataModal : { id, nom ,description,image_base64} , setShowModal}){

    const [isAddVariete, setIsAddVariete] = useState(false)


    return(
        <React.Fragment>
            <div className="modal fade" id="infoProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{padding:"70px"}}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Information sur Produit</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <div style={modalStyle.content_form}>
                        {/** Space for the picture */}
                        <div className="ple-pic" style={{display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                            <img src={image_base64 == "" ? icon_profile : image_base64} style={{width:"100px", borderRadius:"60px"}} />
                        </div>
                    
                        <div className="row" >
                            <div className="info_user"><i className="fa fa-user" aria-hidden="true"></i>Nom: {nom}</div>
                            <div className="info_user"><i className="fa fa-user" aria-hidden="true"></i>description: {description}</div>
                        </div>

                        <Link to={''+id+'/'} onClick={()=> handleRemoveStyle()} class="btn btn-link">Voir ses varietes...</Link>
                        <button type="button" class="btn btn-light" disabled={isAddVariete} onClick={()=> setIsAddVariete(true)}>Ajouter une variétés</button>
                        </div>
                        {isAddVariete ? <AddVariete ID_PRODUIT={id} setShowModal={setShowModal} setIsAddVariete={setIsAddVariete} /> : <></>}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )

}

export default InfoProductModal