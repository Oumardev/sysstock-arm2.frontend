import React, { useState } from "react";
import useTable from "../../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import EditVarieteModal from "../../Modal/variete/EditVarieteModal";
import pp from '../../../assets/pp.jpg'

const Table = ({ data, rowsPerPage }) => {

  const [showModal, setShowModal] = useState(false)
  const [showInfoModal, setShowInfoModal] = useState(false)

  const [dataModal, setDataModal] = useState({})
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  const handleEdit = (userData) =>{
    setDataModal(userData)
    setShowModal(true)
  }

  

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>IMAGE</th>
            <th className={styles.tableHeader}>NOM</th>
            <th className={styles.tableHeader}>DESCRIPTION</th>
            <th className={styles.tableHeader}>ORIGINE</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}> <img style={{width: "30px", borderRadius: "30px"}} src={el.image_base64 == null || el.image_base64 == "" ? pp :  el.image_base64 } /> </td>
              <td className={styles.tableCell}>{el.nom}</td>
              <td className={styles.tableCell}>{el.description}</td>
              <td className={styles.tableCell}>{el.origine}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;