import React, { useEffect, useState } from 'react'
import { userSelector, clearState, listUser } from "../../slices/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Table from '../../Component/table/Utilisateur/Table'
import AddUserModal from '../../Component/Modal/utilisateur/AddUserModal';
import styles from "./utilisateur.module.css"

const Spinner = () =>{
  return(
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}

function UtilisateurContainer() {
  const { isFetching, isError, userUpdated, ls_users } = useSelector(userSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [searchData, setSearchData] = useState(null)

   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        console.log('tu est connecté')
        dispatch(listUser())
      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [isError, userUpdated]);
    
    const onLogOut = () => {
      localStorage.clear()
      navigate('/')
    };

    const handleSearch = (e) =>{
      let searchValues = e.target.value

      const results = ls_users.filter((elem)=>{
          let srch = searchValues.toUpperCase()
          let nom = elem.user.last_name.toUpperCase()
          let prenom = elem.user.first_name.toUpperCase()
          let username = elem.user.username.toUpperCase()
      
          return nom.includes(srch) || prenom.includes(srch) || username.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)

    }

    return (
      <>
        <Header />
        {showModal ? <AddUserModal setShowModal={setShowModal} /> : <></>}
        <div className={styles.trtr}>
          <h2 className={styles.title}>Utilisateurs</h2>
          <div className={styles.tableau}>
              <div className={styles.header_tr}>
                <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
                <a href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" onClick={() => setShowModal(true)} className={styles.addUser_btn} ><i class="fa fa-plus-circle" aria-hidden="true"></i>Ajouter</a>
              </div>
                <main className={styles.container}>
                  <div className={styles.wrapper}>
                    {isFetching ? <Spinner /> : <Table data={searchData ? searchData :ls_users} rowsPerPage={4} />}
                  </div>
                </main>
            </div>
        </div>
      <Footer/>
      </>
    );
  }

  export default UtilisateurContainer;
  