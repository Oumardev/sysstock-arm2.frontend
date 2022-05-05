import React, { useEffect } from 'react'
import { userSelector, clearState } from "../../slices/userSlice";
import underConstruct from '../../assets/under_construction.svg'
import "./styles.css"
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import { useNavigate } from 'react-router-dom';


function DashbordContainer() {
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()

   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [isError]);
    
    return (
      <>
        <Header />
        <div className="content">
            <img class="img-construct" src={underConstruct} alt="en construction" />
        </div>
      </>
    );
  }
  
  export default DashbordContainer;
  