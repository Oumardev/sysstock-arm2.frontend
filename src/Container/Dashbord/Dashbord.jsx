import React, { useEffect, useState } from 'react'
import { userSelector, clearState } from "../../slices/userSlice";
import Map from './Map';
import "./styles.css"
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import { useNavigate } from 'react-router-dom';
import Info from './Info';
import Charts from './Charts';
import Menu from './Menu';

function DashbordContainer() {
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState('riz_brise')

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
        <div className="main">
          {/* <Map />
          <Info /> */}
          <Menu setShowMenu={setShowMenu} />
         { showMenu == 'riz_brise' ? <Charts /> : 'Aucune information a afficher'}
        </div>
      </>
    );
  }
  
  export default DashbordContainer;
  