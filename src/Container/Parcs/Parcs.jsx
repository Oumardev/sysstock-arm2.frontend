import React, { useState , useEffect } from 'react'
import { userSelector, clearState , listParc, listMarche, getRegionDepartementCommune, getZone } from "../../slices/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../Component/table/Parc/Table'
import AddParcModal from '../../Component/Modal/parc/AddParcModal';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import styles from "./utilisateur.module.css"
import { useNavigate } from 'react-router-dom';
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

function ParcContainer() {

  const { isFetching , ls_parc, isError, parcUpdated, RegionDepartementCommune , ls_zone } = useSelector(userSelector);
  const [showModal, setShowModal] = useState(false)
  const [searchData, setSearchData] = useState(null)

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const preprocess_parc = (data) =>{
    let newparc = []

    for (let i=0; i<data.length; i++) {
      
      var objtemp = {
        'nom' : data[i].nom,
        'region' : data[i].zone.region,
        'departement' : data[i].zone.departement,
        'commune' : data[i].zone.commune,
      }
      
      // add objtemp to list of new newparc
      newparc.push(objtemp)
    }

    return newparc
  }

    useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        console.log('tu est connecté')

        dispatch(getRegionDepartementCommune())
        dispatch(getZone())
        dispatch(listMarche())
        dispatch(listParc())

      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [parcUpdated]);


    const handleSearch = (e) =>{
      let searchValues = e.target.value

      const results = ls_parc.filter((elem)=>{
          let srch = searchValues.toUpperCase()
          let nom = elem.nom.toUpperCase()
          let region = elem.zone.region.toUpperCase()
          let departement = elem.zone.departement.toUpperCase()
          let commune = elem.zone.commune.toUpperCase()
      
          return nom.includes(srch) || region.includes(srch) || departement.includes(srch) || commune.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)
    }
    
    return (
      <>
        <Header />
        {showModal ? <AddParcModal setShowModal={setShowModal} /> : <></>}
        <div className={styles.trtr}>
        <h2 className={styles.title}>Parc</h2>
        <div className={styles.tableau}>
        <div className={styles.header_tr}>
          <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
          <ExportCSV csvData={preprocess_parc(ls_parc)} fileName={'parc'} />
          <a href="#" data-toggle="modal" data-target="#addParc" data-whatever="@fat" onClick={() => setShowModal(true)} className={styles.addUser_btn} ><i class="fa fa-plus-circle" aria-hidden="true"></i>Ajouter</a>
        </div>
          <main className={styles.container}>
            <div className={styles.wrapper}>
              {isFetching ? <Spinner /> : <Table RegionDepartementCommune={RegionDepartementCommune} ls_zone={ls_zone} data={searchData ? searchData :ls_parc} rowsPerPage={4} />}
            </div>
          </main>
          </div>
        </div>
      <Footer/>
      </>
    );
  }
  
  export default ParcContainer;
  