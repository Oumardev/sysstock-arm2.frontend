import React, {useState, useEffect } from "react";
import './modal.css'
import icon_profile from '../../../assets/profile-picture.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import convertImgToBase64 from '../../../Utils/helpers'
import * as Yup from "yup";
import { editVariete } from "../../../slices/userSlice";
import { useDispatch } from "react-redux";

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


function EditVarieteModal({dataModal : { id, nom ,description, origin, image_base64}, setShowModal, ID_PRODUIT}) {

    const [errorMsg, setErrorMsg] = useState('')
    const [imageProfile, setImageProfile] = useState(null)

    const dispatch = useDispatch()

    const handleImage = (event)=>{
        setImageProfile(URL.createObjectURL(event.target.files[0]))
    }    

    const editProductSchema = Yup.object().shape({
        nom: Yup.string()
          .required('Champs requis'),

        description: Yup.string()
          .required('Champs requis')
});
      
 function WayMe(){
     
 }
    
    return(
        <React.Fragment>
            <div className="modal fade" id="editProduit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier une variete</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                {errorMsg == '' ? '' :  <div class="alert alert-danger" role="alert">{errorMsg}</div>}
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        id : id,
                        photo: image_base64, 
                        nom: nom, 
                        description: description,
                        origin : origin,
                        produit_id: ID_PRODUIT 
                    }}
                    enableReinitialize={true}
                    validationSchema = {editProductSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            id : values.id,
                            produit_id: parseInt(values.produit_id),
                            nom: values.nom, 
                            image_base64: values.photo, 
                            description: values.description,
                           // origine : values.origin
                        };

                          // edit variete
                          dispatch(editVariete(data))
                          setShowModal(false)
                          document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

                        console.log(data)
                    }}>
                {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => (
                    <Form>
                        <div style={modalStyle.content_form}>
                        <div className="ple-pic" style={{display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                            <img src={image_base64 == null ? icon_profile : image_base64 } style={{width:"100px", borderRadius:"60px"}} />
                            <label for="photo" style={modalStyle.label}>Chosir une image</label>
                            <input
                                onChange={(e)=> {
                                    handleImage(e)
                                        const convertImg = async() =>{
                                            const img = await convertImgToBase64(e.target.files[0]) 
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
                                <label for="recipient-name" className="col-form-label">description:</label>
                                <textarea  
                                    class="form-control" 
                                    name="description"  
                                    id="exampleFormControlTextarea1" 
                                    rows="5"
                                    onChange={handleChange}
                                    style={{height: '80px'}}
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

export default EditVarieteModal