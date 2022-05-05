import React, {useState, useEffect } from "react";
import './modal.css'
import icon_profile from '../../../assets/profile-picture.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import convertImgToBase64 from '../../../Utils/helpers'
import * as Yup from "yup";
import { editProduit } from "../../../slices/produitSlice";
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

function EditProductModal({dataModal : { id, nom ,description,image_base64}, setShowModal}) {

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
      
    
    return(
        <React.Fragment>
            <div className="modal fade" id="editProduit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier un produit</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                {errorMsg == '' ? '' :  <div class="alert alert-danger" role="alert">{errorMsg}</div>}
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        id: id,
                        photo: image_base64, 
                        nom: nom, 
                        description: description
                    }}
                    enableReinitialize={true}
                    validationSchema = {editProductSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            id: values.id,
                            image_base64: values.photo, 
                            nom: values.nom, 
                            description: values.description
                        };

                          // edit product
                          dispatch(editProduit(data))
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
                                    style={{height: '80px'}}
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

export default EditProductModal