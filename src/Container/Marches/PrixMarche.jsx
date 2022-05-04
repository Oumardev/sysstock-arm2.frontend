import React, { useEffect, useState } from 'react'
import { userSelector, clearState, listMarche, listVariete, listPrixMarche } from "../../slices/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Table from '../../Component/table/PrixMarche/Table'
import AddPrixMarcheModal from '../../Component/Modal/marche/AddPrixMarcheModal';
import styles from "./marche.module.css"
import { ExportCSV } from "../../ExportCSV.js"

const Spinner = () =>{
  return(
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}

function PrixMarcheContainer() {
  const { isFetching, isError, ls_prixMarche, prixMarUpdated } = useSelector(userSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [searchData, setSearchData] = useState(null)

  const preprocess_prixmarche = (data) =>{
    let newmarc = []

    for (let i=0; i<data.length; i++) {
      
      var objtemp = {
        'variete' : data[i].variete.nom,
        'origine_variete' :  data[i].variete.origine,
        'marche' : data[i].marche.nom,
        'prix_detaillant' : data[i].prix_detaillant,
        'prix_demi_gros' : data[i].prix_demi_gros,
        'prix_gros' : data[i].prix_gros,
        'sac_demi_gros' : data[i].sac_demi_gros,
        'quantite_stockee' : data[i].quantite_stockee,
      }
      
      // add objtemp to list of new newmarc
      newmarc.push(objtemp)
    }

    return newmarc
  }

  console.log('ls_prix Marché: ',ls_prixMarche)
   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        console.log('tu est connecté')

        dispatch(listMarche())
        dispatch(listVariete())
        dispatch(listPrixMarche())

      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [isError, prixMarUpdated]);
    
    const onLogOut = () => {
      localStorage.clear()
      navigate('/')
    };

    const handleSearch = (e) =>{
      let searchValues = e.target.value

      const results = ls_prixMarche.filter((elem)=>{
        let srch = searchValues.toUpperCase()
        let marche = elem.marche.nom.toUpperCase()
        let variete = elem.variete.nom.toUpperCase()
      
        return marche.includes(srch) || variete.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)
    }

  
    return (
      <>
        <Header />
        {showModal ? <AddPrixMarcheModal setShowModal={setShowModal} /> : <></>}
        <div className={styles.trtr}>
        <h2 className={styles.title}>Prix marche</h2>
        <div className={styles.tableau}>
          <div className={styles.header_tr}>
            <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
            <ExportCSV csvData={preprocess_prixmarche(ls_prixMarche)} fileName={'prix-marché'} />
            <a href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" onClick={() => setShowModal(true)} className={styles.addUser_btn} ><i class="fa fa-plus-circle" aria-hidden="true"></i>Ajouter</a>
          </div>
            <main className={styles.container}>
              <div className={styles.wrapper}>
                {isFetching ? <Spinner /> : <Table data={searchData ? searchData :ls_prixMarche} rowsPerPage={3} />}
              </div>
            </main>
        </div>
        </div>
      <Footer/>
      </>
    );
  }

  export default PrixMarcheContainer;
  