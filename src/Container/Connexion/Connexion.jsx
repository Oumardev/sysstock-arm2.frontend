import React, {useEffect} from "react";
import "./Connexion.css";
import { toast } from "react-toastify";
import { userSelector, clearState } from "../../slices/userSlice";
import Logo from "../../assets/logoSysStock.svg";
import LoginFormContainer from "./LoginForm/LoginFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

/** Component Description:
 *  Cette page servira a ramener vers la page de connexion
 *  ou rédiriger vers le dashbord si l'utilisateur est déja connecté
*/
function ConnexionContainer() {
  const { isSuccess, isError, errorMessage } = useSelector(userSelector);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("isLogin") == 'true'){
      navigate('/dashbord');
    }
  },[]);

  useEffect(() => {
    console.log('error is detected?: ',errorMessage[0])
    let msg = errorMessage[0]

    if (isError && msg!=undefined) {
      toast.error(msg, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate('/dashbord');
    }
  }, [isError, isSuccess]);

  return (
    <div>
      <div className="connexion">
          <div className="connexion-left"><LoginFormContainer /></div>
              <div className="connexion-right">
                <img src={Logo}
                  alt="Logo SysStock"
                  style={{ width: "30%", objectFit: "cover", opacity: "1" }}
                />
          </div>
      </div>
    </div>
  );
}

export default ConnexionContainer;
