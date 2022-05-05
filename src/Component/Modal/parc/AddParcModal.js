import React, {useState, useEffect } from "react";
import './modal.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { addParc } from "../../../slices/parcSlice";
import { marcheSelector, getRegionDepartementCommune, getZone } from "../../../slices/marcheSlice";
import { useDispatch, useSelector } from "react-redux";

const modalStyle = {
    body : {
        margin : "10px"
    },

    form :{
        margin : "5px"
    },

    content_form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "15px"
    },

    label : {
        cursor: "pointer",
        backgroundColor: "black",
        color: "white",
        margin: "5px",
        padding: "5px",
        borderRadius: "10px"
     },
     
     uploadphoto : {
        opacity: 0,
        position: "absolute",
        zIndex: "-1",
     },

     errorMsg : {
         color : 'red'
     }
}

function AddParcModal({setShowModal}) {

    const [errorMsg, setErrorMsg] = useState('')
    const [departement, setDepartement] = useState([])
    const [commune, setCommune] = useState([])
    const dispatch = useDispatch()
    const { RegionDepartementCommune , ls_zone} = useSelector(marcheSelector)

    useEffect(()=>{
        dispatch(getRegionDepartementCommune())
        dispatch(getZone())
    },[])

    const getZoneId = (payload) =>{

        for (let i=0; i<ls_zone.length; i++) {
            if( ls_zone[i].region == payload.region && 
                ls_zone[i].departement == payload.departement &&
                ls_zone[i].commune == payload.commune ){

                    return ls_zone[i].id
                }
        }

    }

    const addParcSchema = Yup.object().shape({

        nom: Yup.string()
          .required('Champs requis'),

        region: Yup.string()
            .required('Champs requis'),

        departement : Yup.string()
            .required('Champs requis'),

        commune : Yup.string()
            .required('Champs requis'),

    });
      
    const getDepartementOfRegion =(regionName) =>{

        const reg = RegionDepartementCommune.filter((region)=>{
            return region.nom == regionName
        })
        const dep = reg[0].departement
       
        setDepartement(dep)
    }

    const getCommuneOfDepartement = (depName) =>{
      
        const depr = departement.filter((dep)=>{
            return dep.nom == depName
        })

        const com = depr[0].commune

        setCommune(com)
    }

    function handleDepartement(e){
        const departmnt = e.target.value
        
        if(departmnt!='')
            getCommuneOfDepartement(departmnt)
    }


    function handleRegion(e){
        const region = e.target.value
        
        if(region!='')
            getDepartementOfRegion(region)
    }
    
    return(
        <React.Fragment>
            <div className="modal fade" id="addParc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un parc</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={modalStyle.body}>
                
                {/** Begin forms  */}
                <Formik
                    initialValues={{ 
                        nom: '', 
                        region: '', 
                        departement: '',
                        commune: ''
                    }}
                    
                    validationSchema = {addParcSchema}
                    
                    onSubmit={(values, { setSubmitting }) => {

                        const data = {
                            nom: values.nom,
                            zone: {
                                region: values.region,
                                departement: values.departement,
                                commune: values.commune
                            },
                        };

                        const zone_id = getZoneId(data.zone)
                        
                        const formatData = {nom: values.nom, zone_id: zone_id}

                        // add PARC
                        dispatch(addParc(formatData))
                        setShowModal(false)
                        document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

                        console.log(data)
                    }}>
                {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, setFieldValue }) => (
                    <Form>
                        <div style={modalStyle.content_form}>
                        <div class="row">
                            <div className="form-group" style={modalStyle.form}>
                                <label for="recipient-name" className="col-form-label">Nom:</label>
                                <Field type="text" name="nom" className="form-control" id="recipient-name" />
                                <ErrorMessage className="error-msg" name="nom" component={'div'} />
                            </div>
                        </div>

                        <div class="row">  

                            <div class="input-group mt-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Region</label>
                                </div>
                                
                                <select value={values.region} onChange={(e) => {handleChange(e) 
                                    handleRegion(e)}}  onBlur={handleBlur} id="region" name="region" class="custom-select">
                                    <option value="" selected>Choisissez une region...</option>
                                    {
                                        RegionDepartementCommune.map((item)=>{
                                            return <option value={item.nom}>{item.nom}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <ErrorMessage className="error-msg" name="region" component={'div'} /> 
                        </div>

                        <div class="row">  
                            {
                                values.region != '' && (
                                    <>
                                        <div class="input-group mt-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Département</label>
                                            </div>
                                            <select value={values.departement} onChange={(e) => {handleChange(e) 
                                                handleDepartement(e)}} id="departement" name="departement" class="custom-select">
                                                <option value="">Choisissez un departement...</option>
                                                {
                                                    departement.map((item)=>{
                                                        return <option value={item.nom}>{item.nom}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <ErrorMessage className="error-msg" name="frequence" component={'div'} />
                                    </>
                                )
                            }

                            {
                                values.departement != '' && (
                                    <>
                                        <div class="input-group mt-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Commune</label>
                                            </div>
                                            <select value={values.commune} onChange={handleChange} onBlur={handleBlur} id="commune" name="commune" class="custom-select">
                                                <option value="" disabled selected>Choisissez une commune...</option>
                                                {
                                                    commune.map((item)=>{
                                                        return <option value={item}>{item}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <ErrorMessage className="error-msg" name="region" component={'div'} /> 
                                    </>
                                )
                            }
                        </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn-cancel" data-dismiss="modal">Annuler</button>
                            <button type="button" onClick={handleSubmit} className="btn-add">Enregistrer</button>
                        </div>
                    </Form>
                    )}
                </Formik>
                </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default AddParcModal