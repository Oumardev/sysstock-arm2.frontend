import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import EditPrixMarcheModal from "../../Modal/marche/EditPrixMarcheModal";
import DeletePrixMarcheModal from "../../Modal/marche/DeletePrixMarcheModal"

const Table = ({ data, rowsPerPage }) => {

  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [dataModal, setDataModal] = useState({})
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const handleEdit = (userData) =>{
    console.log('edit')
    setDataModal(userData)
    setShowModal(true)
  }

  const handleDelete = (userData) =>{
    setDataModal(userData)
    setShowDeleteModal(true)
  }

  return ( 
    <>
      {showModal ? <EditPrixMarcheModal dataModal={dataModal} setShowModal={setShowModal} /> : <></>}
      {showDeleteModal ? <DeletePrixMarcheModal dataModal={dataModal} setShowModal={setShowDeleteModal} /> : <></>}
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>NOM MARCHE</th>
            <th className={styles.tableHeader}>VARIETE</th>
            <th className={styles.tableHeader}>PRIX DETAILLANT</th>
            <th className={styles.tableHeader}>PRIX DEMI GROS</th>
            <th className={styles.tableHeader}>SAC DEMI GROS</th>
            <th className={styles.tableHeader}>PRIX GROS</th>
            <th className={styles.tableHeader}>QUANTITE STOCKEE</th>
            <th className={styles.tableHeader}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.marche.nom}</td>
              <td className={styles.tableCell}>{el.variete.nom}</td>
              <td className={styles.tableCell}>{el.prix_detaillant}</td>
              <td className={styles.tableCell}>{el.prix_demi_gros}</td>
              <td className={styles.tableCell}>{el.sac_demi_gros == 'sac_10_kg' && '10 KG'} {el.sac_demi_gros == 'sac_25_kg' && '25 KG'} {el.sac_demi_gros == 'sac_50_kg' && '50 KG'} {el.sac_demi_gros == 'sac_100_kg' && '100 KG'}</td>
              <td className={styles.tableCell}>{el.prix_gros}</td>
              <td className={styles.tableCell}>{el.quantite_stockee}</td>

              <td className={styles.tableCell}>  
              <a href="#" style={{color:"black"}} data-toggle="modal" data-target="#editModal" data-whatever="@fat" onClick={() => handleEdit(el)} className={styles.addUser_btn} ><i class="fa fa-pencil" aria-hidden="true"></i></a>
              <a href="#" style={{color:"black"}} data-toggle="modal" data-target="#deleteModal" data-whatever="@fat" onClick={() => handleDelete(el)} className={styles.addUser_btn} ><i class="fa fa-trash" aria-hidden="true"></i></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;