import React, {useState, useEffect } from "react";
import icon_profile from '../../../assets/profile-picture.svg'
import './modal.css'

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
        alignItems: "center"
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

function InfoUserModal({dataModal : { id, photo_base64, user} , setShowModal}){

    return(
        <React.Fragment>
            <div className="modal fade" id="infoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{padding:"70px"}}>
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Information sur l'utilisateur</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div style={modalStyle.content_form}>
                        {/** Space for the picture */}
                        <div className="ple-pic" style={{display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
                            <img src={photo_base64 == "" ? icon_profile : photo_base64} style={{width:"100px", borderRadius:"60px"}} />
                        </div>
                    
                        <div className="row">
                            <div className="info_user"><i className="fa fa-user" aria-hidden="true"></i>Nom: {user.last_name}</div>
                            <div className="info_user"><i className="fa fa-user" aria-hidden="true"></i>Prenom: {user.first_name}</div>
                        </div>

                        <div className="row">
                            <div className="info_user"><i class="fa fa-envelope" aria-hidden="true"></i>Email: {user.email}</div>
                            <div className="info_user"><i class="fa fa-sign-in" aria-hidden="true"></i>Username: {user.username}</div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )

}

export default InfoUserModal