import React, {useState, useEffect } from "react";
import './modal.css'
import icon_profile from '../../../assets/profile-picture.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import convertImgToBase64 from '../../../Utils/helpers'
import $ from 'jquery';
import * as Yup from "yup";
import { editUser } from "../../../slices/userSlice";
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

function EditUserModal({dataModal : { id, photo_base64, user} , setShowModal}) {


    const [errorMsg, setErrorMsg] = useState('')
    const [imageProfile, setImageProfile] = useState(null)

    const dispatch = useDispatch()

    const handleImage = (event)=>{
        setImageProfile(URL.createObjectURL(event.target.files[0]))
    }    

    const addUserSchema = Yup.object().shape({
        nom: Yup.string()
          .min(2, 'Trop court!')
          .max(30, 'Trop long!')
          .required('Champs requis'),

        prenom: Yup.string()
          .min(2, 'Trop court!')
          .max(30, 'Trop long!')
          .required('Champs requis'),

        email: Yup.string()
          .email('email invalide')

      });
      
    
    return(
        <React.Fragment>
            <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier un utilisateur</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        id: id,
                        photo: photo_base64, 
                        nom: user.last_name, 
                        prenom: user.first_name, 
                        email: user.email
                    }}

                    enableReinitialize={true}
                    
                    validationSchema = {addUserSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            user: {
                                id : values.id,
                                last_name: values.nom,
                                first_name: values.prenom,
                                email: values.email === undefined ? "" : values.email,
                            },

                            photo_base64: values.photo
                          };
                        
                          dispatch(editUser(data))
                          setShowModal(false)
                          document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

                        console.log(data)
                    }}>
                {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => (
                    <Form>
                        <div style={modalStyle.content_form}>
                        <div className="ple-pic" style={{display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                            <img src={values.photo == "" ? icon_profile : values.photo} style={{width:"100px", borderRadius:"60px"}} />
                            <label for="photo" style={modalStyle.label}>Changer l'image</label>
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
                                <label for="recipient-name" className="col-form-label">Prénom:</label>
                                <Field type="text" name="prenom" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="prenom" component={'div'} />
                            </div>
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Nom:</label>
                                <Field type="text" name="nom" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="nom" component={'div'} />
                            </div>
                        </div>

                        <div class="row">
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Email:</label>
                                <Field type="text" name="email" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="email" component={'div'} />
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

export default EditUserModal