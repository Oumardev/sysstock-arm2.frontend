import React, { useEffect, useState } from 'react'
import { varieteSelector, clearState, listVariete } from "../../slices/varieteSlice";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Table from '../../Component/table/Variete/Table'
import AddProductModal from '../../Component/Modal/produit/AddProductModal';
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

function VarieteContainer() {
  const { isFetching, isError, ls_variete, varUpdated } = useSelector(varieteSelector);
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [searchData, setSearchData] = useState(null)
  const [widhdevice, setWidhdevice] = useState(window.innerWidth)

  const preprocess_variete = (data) =>{
    let newvar = []

    for (let i=0; i<data.length; i++) {
      
      var objtemp = {
        'nom' : data[i].nom,
        'description' : data[i].description,
      }
      
      // add objtemp to list of new var
      newvar.push(objtemp)
    }

    return newvar
  }

   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        dispatch(listVariete())

      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }
    }, [isError, varUpdated]);
    
    function reportWindowSize() {
      setWidhdevice(window.innerWidth)
    }

    window.onresize = reportWindowSize;
    var rowperpage = widhdevice <= 820 ? 10 : 4

    const handleSearch = (e) =>{
      let searchValues = e.target.value
      const results = ls_variete.filter((elem)=>{
          let srch = searchValues.toUpperCase()
          let nom = elem.nom.toUpperCase()
          let description = elem.description.toUpperCase()
          let origine = elem.origine.toUpperCase()
      
          return nom.includes(srch) || description.includes(srch) || origine.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)

  }

    return (
      <>
        <Header />
        <div className={styles.trtr}>
        <h2 className={styles.title}>Variétés</h2>
        <div className={styles.tableau}>
        <div className={styles.header_tr}>
          <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
          <ExportCSV csvData={preprocess_variete(ls_variete)} fileName={'variete'} />
        </div>
          <main className={styles.container}>
            <div className={styles.wrapper}>
              {isFetching ? <Spinner /> : <Table data={searchData ? searchData :ls_variete} rowsPerPage={rowperpage} />}
            </div>
          </main>
        </div>
        </div>
      <Footer/>
      </>
    );
  }

  export default VarieteContainer;
  