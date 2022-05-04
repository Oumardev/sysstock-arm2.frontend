import React from "react";
import './modal.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

function EditPasswordModal({setShowModal ,user_id}) {

    const dispatch = useDispatch()

    const editPasswordSchema = Yup.object().shape({

        password : Yup.string()
            .min(8,'Minimum 8 caractères')
            .required('Champs requis'),

        passwordConfirm : Yup.string()
            .oneOf([Yup.ref('password'), null], "Mot de passe différent")
            .required('Champs requis')
    });
      
    
    return(
        <React.Fragment>
            <div className="modal fade" id="editPasswordModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modifier le mot de passe</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                <p style={{color:'red'}}>Voulez vous vraiment modifier le mot de passe ?</p>
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        password: '',
                        passwordConfirm: ''
                    }}
                    
                    validationSchema = {editPasswordSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            user:{
                                id : user_id,
                                password: values.password,
                            }
                        };

                          // Edit password
                          
                          dispatch(editUser(data))
                          setShowModal(false)
                          document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
                    }}>
                {({ handleSubmit }) => (
                    <Form>
                        <div style={modalStyle.content_form}>
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
                        </div>
                            
                        <div className="modal-footer">
                            <button type="button" style={{width:'auto'}} className="btn-cancel" data-dismiss="modal"> <i class="fa fa-trash" aria-hidden="true"></i> Annuler</button>
                            <button type="button" onClick={handleSubmit} className="btn-add"> <i class="fa fa-floppy-o" aria-hidden="true"></i> Appliquer</button>
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

export default EditPasswordModal