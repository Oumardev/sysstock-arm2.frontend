import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import EditVarieteModal from "../../Modal/variete/EditVarieteModal";
import DeleteVarieteModal from '../../Modal/produit/DeleteVarieteModal'
import pp from '../../../assets/pp.jpg'

const Table = ({ data, rowsPerPage, ID_PRODUIT }) => {

  const [showModal, setShowModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [dataModal, setDataModal] = useState({})
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const handleEdit = (userData) =>{
    setDataModal(userData)
    setShowModal(true)
  }

  const handleDelete = (userData) =>{
    setDataModal(userData)
    setShowDeleteModal(true)
  }

  return (
    <>
      {showModal ? <EditVarieteModal dataModal={dataModal} setShowModal={setShowModal} ID_PRODUIT={ID_PRODUIT} /> : <></>}
      {showDeleteModal ? <DeleteVarieteModal dataModal={dataModal} setShowModal={setShowDeleteModal} /> : <></>}
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>IMAGE</th>
            <th className={styles.tableHeader}>NOM</th>
            <th className={styles.tableHeader}>DESCRIPTION</th>
            <th className={styles.tableHeader}>ORIGINE</th>
            <th className={styles.tableHeader}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}> <img style={{width: "30px", borderRadius: "30px"}} src={el.image_base64 == null || el.image_base64 == "" ? pp :  el.image_base64 } /> </td>
              <td className={styles.tableCell}>{el.nom}</td>
              <td className={styles.tableCell}>{el.description}</td>
              <td className={styles.tableCell}>{el.origine}</td>
              <td className={styles.tableCell}>  
              <a href="#" style={{color:"black"}} data-toggle="modal" data-target="#editProduit" data-whatever="@fat" onClick={() => handleEdit(el)} className={styles.addUser_btn} ><i class="fa fa-pencil" aria-hidden="true"></i></a>
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