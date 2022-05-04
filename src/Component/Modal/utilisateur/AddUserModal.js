import React, {useState, useEffect } from "react";
import './modal.css'
import icon_profile from '../../../assets/profile-picture.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import convertImgToBase64 from '../../../Utils/helpers'
import $ from 'jquery';
import * as Yup from "yup";
import { createUser } from "../../../slices/userSlice";
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

function AddUserModal({setShowModal}) {

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
          .email('email invalide'),

        telephone: Yup.number()
            .typeError('Format invalide')
            .required('Champs requis!'),

        password : Yup.string()
            .min(8,'Minimum 8 caractères')
            .required('Champs requis'),

        passwordConfirm : Yup.string()
            .oneOf([Yup.ref('password'), null], "Mot de passe différent")
            .required('Champs requis'),

        role : Yup.string()
            .required('Champs requis')

      });
      
    
    return(
        <React.Fragment>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un utilisateur</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                {errorMsg == '' ? '' :  <div class="alert alert-danger" role="alert">{errorMsg}</div>}
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        photo: '', 
                        nom: '', 
                        prenom: '', 
                        email: '', 
                        telephone: '', 
                        password: '',
                        passwordConfirm: '',
                        role : ''
                    }}
                    
                    validationSchema = {addUserSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            user: {
                                last_name: values.nom,
                                first_name: values.prenom,
                                username: values.telephone,
                                email: values.email === undefined ? "" : values.email,
                                password: values.password,
                            },

                            photo_base64: values.photo,
                            is_administrateur: values.role === "is_administrateur" ? true : false,
                            is_agent_parc_arm: values.role === "is_agent_parc_arm" ? true : false,
                            is_agent_marche_arm:
                              values.role === "is_agent_marche_arm" ? true : false,
                            is_admin_arm: values.role === "is_admin_arm" ? true : false,
                          };

                          // create user
                          dispatch(createUser(data))
                          setShowModal(false)
                          document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

                        console.log(data)
                    }}>
                {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => (
                    <Form>
                        <div style={modalStyle.content_form}>
                            <div className="ple-pic" style={{display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                                <img src={imageProfile == null ? icon_profile : imageProfile } style={{width:"100px", borderRadius:"60px"}} />
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
                                <div className="form-group" style={modalStyle.form}>
                                    <label for="recipient-name" className="col-form-label">Telephone:</label>
                                    <Field type="text" name="telephone" className="form-control" id="recipient-name" />
                                    <ErrorMessage className="error-msg" name="telephone" component={'div'} />
                                </div>
                            </div>

                            <div class="row">
                                <div className="form-group" style={modalStyle.form}>
                                    <label for="recipient-name" className="col-form-label">Mot de passe:</label>
                                    <Field type="password" name="password" className="form-control" id="recipient-name" />
                                    <ErrorMessage className="error-msg" name="password" component={'div'} />
                                </div>
                                <div className="form-group" style={modalStyle.form}>
                                    <label for="recipient-name" className="col-form-label">Confirmer mot de passe:</label>
                                    <Field type="password" name="passwordConfirm" className="form-control" id="recipient-name" />
                                    <ErrorMessage className="error-msg" name="passwordConfirm" component={'div'} />
                                </div>
                            </div>

                            <div class="row">
                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Role</label>
                                </div>
                                <select value={values.role} onChange={handleChange} onBlur={handleBlur} id="role" name="role" class="custom-select">
                                    <option value="" selected>Choisissez un role...</option>
                                    <option value="is_administrateur">Administrateur</option>
                                    <option value="is_admin_arm">Administrateur ARM</option>
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="role" component={'div'} />
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

export default AddUserModal