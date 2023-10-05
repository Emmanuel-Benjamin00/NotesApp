import React, { useContext, useEffect } from 'react';
import { NotesDataTaken } from '../context/NotesDataContext';
import { useNavigate } from 'react-router-dom';
import TimeElapsedCounter from './Timeupd';
import notessymbol from "../assets/description.svg"
import edit from "../assets/edit.svg"
import deleteimg from "../assets/delete.svg"

function Notes() {
    let { data, setData } = useContext(NotesDataTaken);
    let navigate = useNavigate()

    let handleDelete = (index) => {
        let newArray = [...data]
        newArray.splice(index, 1);
        setData(newArray)
    }

    return (
        <div className="container-fluid">
            <div className="mb-4">
                <div className='d-flex  mb-3'>
                    <img src={notessymbol} ></img>
                    <h4 className="mb-0 text-gray-800 mx-2 heading-notes">My Notes</h4>
                </div>
                <h6 className="mb-0 text-gray-800 ms-1 mb-3 recent-view" >Recently viewed</h6>
                <div className="row each-note">
                    {data.map((e, i) => {
                        return (
                            <div key={i} className="col-xl-4 col-md-6 mb-4 rec-view-card m-2">
                                <div>
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold  mb-1 d-flex justify-content-between mb-4 mt-3">
                                                    <h6 className='card-head'>{e.title}</h6>
                                                    <div>
                                                        <img className="mx-1 pointer " src={edit} onClick={() => { navigate(`/edit/${i}`) }} />
                                                        <img className="mx-1 pointer" src={deleteimg} onClick={() => handleDelete(i)} />
                                                    </div>
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800 note-card-content">{e.note}</div>


                                                <div className='my-3 elapsed-time'>
                                                    <div><TimeElapsedCounter /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Notes;
