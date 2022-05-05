import React, { useEffect, useState } from 'react'
import { produitSelector, clearState, listProduit } from "../../slices/produitSlice";
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import Table from '../../Component/table/Produit/Table'
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

function ProduitContainer() {
  const { isFetching, isError, ls_produit, prodUpdated } = useSelector(produitSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const preprocess_produit = (data) =>{
    let newprod = []

    for (let i=0; i<data.length; i++) {
      
      var objtemp = {
        'nom' : data[i].nom,
        'description' : data[i].description,
        'varietes' : ''
      }
      
      // add variete list
      for (let j=0; j<data[i].varietes.length; j++) 
        objtemp.varietes += data[i].varietes[j].nom + ' ,'
      
      // add objtemp to list of new prod
      newprod.push(objtemp)
    }

    return newprod
  }

  const [showModal, setShowModal] = useState(false)
  const [searchData, setSearchData] = useState(null)
  const [widhdevice, setWidhdevice] = useState(window.innerWidth)

   useEffect(() => {
     
      if(localStorage.getItem("isLogin") == 'true'){
        dispatch(listProduit())
      }else{
        localStorage.clear()
        navigate('/')
      }

      if (isError) {
        dispatch(clearState());
        navigate('/')
      }

    }, [isError, prodUpdated]);
    
    function reportWindowSize() {
      setWidhdevice(window.innerWidth)
    }

    window.onresize = reportWindowSize;
    var rowperpage = widhdevice <= 820 ? 10 : 4

    const handleSearch = (e) =>{
      let searchValues = e.target.value

      const results = ls_produit.filter((elem)=>{
          let srch = searchValues.toUpperCase()
          let nom = elem.nom.toUpperCase()
          let description = elem.description.toUpperCase()
      
          return nom.includes(srch) || description.includes(srch)
      })

      setSearchData(results)
      if(searchValues == '') setSearchData(null)

    }

    return (
      <>
        <Header />
        {showModal ? <AddProductModal setShowModal={setShowModal} /> : <></>}
        <div className={styles.trtr}>
        <h2 className={styles.title}>Produits</h2>
        <div className={styles.tableau}>
          <div className={styles.header_tr}>
            <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
            <ExportCSV csvData={preprocess_produit(ls_produit)} fileName={'produit'} />
            <a href="#" data-toggle="modal" data-target="#addProduct" data-whatever="@fat" onClick={() => setShowModal(true)} className={styles.addUser_btn} ><i class="fa fa-plus-circle" aria-hidden="true"></i>Ajouter</a>
          </div>
            <main className={styles.container}>
              <div className={styles.wrapper}>
                {isFetching ? <Spinner /> : <Table data={searchData ? searchData :ls_produit} rowsPerPage={rowperpage} />}
              </div>
            </main>
          </div>
        </div>
      <Footer/>
      </>
    );
  }

  export default ProduitContainer;
  