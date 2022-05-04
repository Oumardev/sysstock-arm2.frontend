import React from "react";
import { useDispatch } from "react-redux";
import { deleteMarche } from '../../../slices/userSlice'

const modalStyle = {
    body : {
        margin : "10px",
        padding: '0rem'
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

const DeleteMarcheModal = ({dataModal: {id}, setShowModal}) =>{

    const dispatch = useDispatch()

    const handleDelete = () =>{
        
        dispatch(deleteMarche(id))
        setShowModal(false)
        document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
    }

    return(
        <React.Fragment>
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Supprimer un marché</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                    <div style={modalStyle.content_form}>
                        <p style={{color:'red'}}>Voulez vous vraiment supprimer ce marché ?</p>
                    </div>
                </div>

                <div className="modal-footer" style={{borderRadius: '20px'}}>
                    <button type="button" className="btn-cancel" data-dismiss="modal">Annuler</button>
                    <button type="button" onClick={()=> handleDelete()} className="btn-add"> <i class="fa fa-trash" aria-hidden="true"></i> Supprimer</button>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default DeleteMarcheModal