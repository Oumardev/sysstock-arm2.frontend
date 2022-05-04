import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import EditUserModal from "../../Modal/utilisateur/EditUserModal";
import InfoUserModal from "../../Modal/utilisateur/InfoUserModal";
import DeleteUserModal from "../../Modal/utilisateur/DeleteUserModal";
import pp from '../../../assets/pp.jpg'

const Table = ({ data, rowsPerPage }) => {

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

  const handleInfo = (userData) =>{
    setDataModal(userData)
    setShowInfoModal(true)
  }

  const handleDelete = (userData) =>{
    setDataModal(userData)
    setShowDeleteModal(true)
  }

  return (
    <>
      {showModal ? <EditUserModal dataModal={dataModal} setShowModal={setShowModal} /> : <></>}
      {showInfoModal ? <InfoUserModal dataModal={dataModal} setShowModal={setShowInfoModal} /> : <></>}
      {showDeleteModal ? <DeleteUserModal dataModal={dataModal} setShowModal={setShowDeleteModal} /> : <></>}
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>AVATAR</th>
            <th className={styles.tableHeader}>PRENOM</th>
            <th className={styles.tableHeader}>NOM</th>
            <th className={styles.tableHeader}>EMAIL</th>
            <th className={styles.tableHeader}>USERNAME</th>
            <th className={styles.tableHeader}>ROLE</th>
            <th className={styles.tableHeader}>ORGANISATION</th>
            <th className={styles.tableHeader}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}> <img style={{width: "30px", borderRadius: "30px"}} src={el.photo_base64 == null || el.photo_base64 == "" ? pp :  el.photo_base64 } /> </td>
              <td className={styles.tableCell}>{el.user.first_name}</td>
              <td className={styles.tableCell}>{el.user.last_name}</td>
              <td className={styles.tableCell}>{el.user.email}</td>
              <td className={styles.tableCell}>{el.user.username}</td>
              <td className={styles.tableCell}>{el.is_administrateur ? 'ADMIN' : 'INCONNU' }</td>
              <td className={styles.tableCell}>{''}</td>
              <td className={styles.tableCell}>  
              <a href="#" style={{color:"black"}} data-toggle="modal" data-target="#editModal" data-whatever="@fat" onClick={() => handleEdit(el)} className={styles.addUser_btn} ><i class="fa fa-pencil" aria-hidden="true"></i></a>
              <a href="#" style={{color:"black"}} data-toggle="modal" data-target="#infoModal" data-whatever="@fat" onClick={() => handleInfo(el)} className={styles.addUser_btn} ><i class="fa fa-eye" aria-hidden="true"></i></a>
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