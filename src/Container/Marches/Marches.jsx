import React, { useEffect, useState } from 'react'
import { marcheSelector, clearState, listMarche, getRegionDepartementCommune, getZone } from "../../slices/marcheSlice";
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import Table from '../../Component/table/Marche/Table'
import AddMarcheModal from '../../Component/Modal/marche/AddMarcheModal'
import { ExportCSV } from "../../ExportCSV.js"
import { useNavigate } from 'react-router-dom'
import styles from "./marche.module.css"

const Spinner = () =>{
  return(
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  )
}

function MarcheContainer() {
  const { isFetching , isError, ls_marche, RegionDepartementCommune , ls_zone , marUpdated} = useSelector(marcheSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [widhdevice, setWidhdevice] = useState(window.innerWidth)

  const preprocess_marche = (data) =>{
    let newmarc = []

    for (let i=0; i<data.length; i++) {
      
      var objtemp = {
        'nom' : data[i].nom,
        'superficie' : data[i].superficie,
        'frequence' : data[i].frequence,
        'region' : data[i].zone.region,
        'departement' : data[i].zone.departement,
        'commune' : data[i].zone.commune,
      }
      
      // add objtemp to list of new newmarc
      newmarc.push(objtemp)
    }

    return newmarc
  }

   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        dispatch(getRegionDepartementCommune())
        dispatch(getZone())
        dispatch(listMarche())
      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [isError, marUpdated]);

    function reportWindowSize() {
      setWidhdevice(window.innerWidth)
    }

    window.onresize = reportWindowSize;
    var rowperpage = widhdevice <= 820 ? 10 : 4

    const handleSearch = (e) =>{
      let searchValues = e.target.value

      const results = ls_marche.filter((elem)=>{
        let srch = searchValues.toUpperCase()
        let nom = elem.nom.toUpperCase()
        let frequence = elem.frequence.toUpperCase()
        let zone = elem.zone.region.toUpperCase()
        let departement = elem.zone.departement.toUpperCase()
        let commune = elem.zone.commune.toUpperCase()
      
        return nom.includes(srch) || frequence.includes(srch) || commune.includes(srch) || zone.includes(srch) || departement.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)

    }

  
    return (
      <>
        <Header />
        {showModal ? <AddMarcheModal setShowModal={setShowModal} /> : <></>}
        <div className={styles.trtr}>
        <h2 className={styles.title}>Marchés</h2>
        <div className={styles.tableau}>
          <div className={styles.header_tr}>
            <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
            <ExportCSV csvData={preprocess_marche(ls_marche)} fileName={'marché'} />
            <a href="#" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat" onClick={() => setShowModal(true)} className={styles.addUser_btn} ><i class="fa fa-plus-circle" aria-hidden="true"></i>Ajouter</a>
          </div>
            <main className={styles.container}>
              <div className={styles.wrapper}>
                {isFetching ? <Spinner /> : <Table RegionDepartementCommune={RegionDepartementCommune} ls_zone={ls_zone} data={searchData ? searchData :ls_marche} rowsPerPage={widhdevice} />}
              </div>
            </main>
            </div>
        </div>
      <Footer/>
      </>
    );
  }

  export default MarcheContainer;
  