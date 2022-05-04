import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import EditParcModal from "../../Modal/parc/EditParcModal";
import DeleteParcModal from "../../Modal/parc/DeleteParcModal"

const Table = ({ RegionDepartementCommune , ls_zone , data, rowsPerPage }) => {

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
      {showModal ? <EditParcModal dataModal={dataModal} setShowModal={setShowModal} RegionDepartementCommune={RegionDepartementCommune} ls_zone={ls_zone} /> : <></>}
      {showDeleteModal ? <DeleteParcModal dataModal={dataModal} setShowModal={setShowDeleteModal} /> : <></>}
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>NOM PARC</th>
            <th className={styles.tableHeader}>ZONE</th>
            <th className={styles.tableHeader}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.nom}</td>
              <td className={styles.tableCell}>{el.zone.region} | {el.zone.departement} | {el.zone.commune}</td>

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