import React, { useEffect, useState } from 'react'
import { parcSelector, clearState, listParc, listPrixParc } from "../../slices/parcSlice";
import { varieteSelector , listVariete } from "../../slices/varieteSlice";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Table from '../../Component/table/PrixParc/Table'
import AddPrixParcModal from '../../Component/Modal/parc/AddPrixParcModal';
import styles from "./utilisateur.module.css"
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
  const { isFetching, isError, ls_prixParc, prixParcUpdated } = useSelector(parcSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [searchData, setSearchData] = useState(null)

  const preprocess_prixmarche = (data) =>{
    let newparc = []

    for (let i=0; i<data.length; i++) {
      
      var objtemp = {
        'variete' : data[i].variete.nom,
        'origine_variete' :  data[i].variete.origine,
        'parc' : data[i].parc.nom,
        'prix_bascule' : data[i].prix_bascule,
        'prix_sac' : data[i].prix_sac,
        'quantite_stockee' : data[i].quantite_stockee,
      }
      
      // add objtemp to list of new newparc
      newparc.push(objtemp)
    }

    return newparc
  }

   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        console.log('tu est connecté')

        dispatch(listParc())
        dispatch(listVariete())
        dispatch(listPrixParc())

      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [isError, prixParcUpdated]);
    
    const onLogOut = () => {
      localStorage.clear()
      navigate('/')
    };

    const handleSearch = (e) =>{
      let searchValues = e.target.value

      const results = ls_prixParc.filter((elem)=>{
        let srch = searchValues.toUpperCase()
        let parc = elem.parc.nom.toUpperCase()
        let variete = elem.variete.nom.toUpperCase()

        return parc.includes(srch) || variete.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)

    }

  
    return (
      <>
        <Header />
        {showModal ? <AddPrixParcModal setShowModal={setShowModal} /> : <></>}
        <div className={styles.trtr}>
        <h2 className={styles.title}>Prix parc</h2>
        <div className={styles.tableau}>
        <div className={styles.header_tr}>
          <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
          <ExportCSV csvData={preprocess_prixmarche(ls_prixParc)} fileName={'prix-parc'} />
          <a href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" onClick={() => setShowModal(true)} className={styles.addUser_btn} ><i class="fa fa-plus-circle" aria-hidden="true"></i>Ajouter</a>
        </div>
          <main className={styles.container}>
            <div className={styles.wrapper}>
              {isFetching ? <Spinner /> : <Table data={searchData ? searchData :ls_prixParc} rowsPerPage={4} />}
            </div>
          </main>
        </div>
        </div>
      <Footer/>
      </>
    );
  }

  export default PrixMarcheContainer;
  