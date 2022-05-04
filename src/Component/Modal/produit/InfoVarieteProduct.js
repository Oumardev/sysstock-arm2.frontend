import React, { useEffect, useState } from "react"
import { listProductVariete, userSelector } from "../../../slices/userSlice";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Table from '../../table/VarieteOfProduit/Table'
import styles from '../../../Container/Produits/utilisateur.module.css'


const NotFoundVariete = ()=>{
    return(
        <React.Fragment>
            <h2>Ce produit n'existe pas</h2>
        </React.Fragment>
    )
}

const ListProductVariete = ({ID_PRODUIT ,varietes})=>{

    const [searchData, setSearchData] = useState(null)

    const handleSearch = (e) =>{
        let searchValues = e.target.value
        const results = varietes.filter((elem)=>{
            let srch = searchValues.toUpperCase()
            let nom = elem.nom.toUpperCase()
            let description = elem.description.toUpperCase()
            let origine = elem.origine.toUpperCase()
        
            return nom.includes(srch) || description.includes(srch) || origine.includes(srch)
        })
  
        setSearchData(results)
        if(searchValues == '') setSearchData(null)

    }

    return(
        <div className={styles.trtr}>
            <div className={styles.tableau}>
                <div className={styles.header_tr}>
                    <input type="text" className={styles.search_btn} onChange={(e)=> handleSearch(e)} placeholder='Rechercher' />
                </div>

                <main className={styles.container}>
                    <div className={styles.wrapper}>
                        <Table data={searchData ? searchData :varietes} rowsPerPage={4} ID_PRODUIT={ID_PRODUIT} />
                    </div>
                </main>
            </div>
        </div>
    )
}

// {id: 18, nom: 'TOMATE-CERISE', image_base64: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD…AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==', description: 'Tomates cerise.', origine: 'local'}
const InfoVarieteProduct = (props) =>{

    const { ls_product_variete, varUpdated } = useSelector(userSelector)
    const dispatch = useDispatch()
    
    const { id } = useParams();
    
    useEffect(()=>{
        const value = {'id' : id}
        dispatch(listProductVariete(value))
    },[varUpdated])

    return(
        <>
            <Header />
                {ls_product_variete.varietes ? <ListProductVariete ID_PRODUIT={id} varietes={ls_product_variete.varietes} /> : <NotFoundVariete />}
            <Footer />
        </>
    )
}

export default InfoVarieteProduct