import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pp from '../../assets/pp.jpg'
import { userSelector, getUserProfile } from '../../slices/userSlice'
import EditPasswordModal from '../../Component/Modal/utilisateur/EditPassword'
import Header from '../../Component/Header/Header'
import './app.profile.css'
import { useDispatch, useSelector } from "react-redux";


const Profile = () =>{

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { my_user } = useSelector(userSelector)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
     
        if(localStorage.getItem("isLogin") == 'true'){
            let user_id = localStorage.getItem("user_id")
            user_id = parseInt(user_id)
            dispatch(getUserProfile(user_id))
        }else{
            localStorage.clear()
            navigate('/')
        }

    }, []);

    const styles = {
        pp:{
            height : '200px',
            borderRadius: '75px',
            marginBottom: '20px'
        }
    }

    const user = my_user 

    return(
        <React.Fragment>
            <Header />
            {showModal ? <EditPasswordModal setShowModal={setShowModal} user_id={localStorage.getItem("user_id")} /> : <></>}
            <div className="profileContainer">
                {
                user.user && ( 
                        <div className="infoContainer">
                            <img style={styles.pp} src={user.photo_base64 ?? pp} alt="User profile picture" />

                            <h6>Nom : {user.user.first_name}</h6>
                            <h6>Prénom : {user.user.last_name}</h6>
                            <h6>Email : {user.user.email}</h6>
                            <h6>Username : {user.user.username}</h6>

                            <a style={{color:'red'}} type="button" data-toggle="modal" onClick={()=> setShowModal(true)} data-target="#editPasswordModal" data-whatever="@fat" class="btn btn-link">Modifier le mot de passe</a>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default Profile;