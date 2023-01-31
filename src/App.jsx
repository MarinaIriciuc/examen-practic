import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import { addEmployee } from "./features/employee/employeeSlice";
import {Link } from "react-router-dom";

function App() {

    const dispatch = useDispatch()

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    function addNewUser(event) {
        event.preventDefault()
        const user = {
            nume: event.target.elements.nume.value,
            prenume: event.target.elements.prenume.value,
            meserie: event.target.elements.meserie.value,
            salariu: Number(event.target.elements.salariu.value),
            data_angajare: formattedToday
        }

        dispatch(addEmployee(user))
    }
  return (
      <div>
          <div className="row justify-content-center">
              <div className="col-6 mt-5">
                  <div className="card">
                      <div className="card-body">
                          <form onSubmit={addNewUser}>
                              <div className="d-flex">
                                  <div className="d-flex align-items-center">
                                      <h6>Nume</h6>
                                      <input name="nume" type="text" className="form-control mx-2 ms-4"/>
                                  </div>
                                  <div className="d-flex align-items-center">
                                      <h6>Prenume</h6>
                                      <input name="prenume" type="text" className="form-control mx-2"/>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                  <h6>Meserie</h6>
                                  <input name="meserie" type="text" className="form-control mx-2"/>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                  <h6>Salariu</h6>
                                  <input name="salariu" type="number" className="form-control ms-3"/>
                              </div>
                              <div className="d-flex justify-content-center mt-3">
                                  <button type="submit" className="btn btn-outline-dark">Submit</button>
                              </div>
                          </form>
                      </div>
                  </div>
                  <Link to={"people"}>
                      <button className="btn btn-outline-dark mt-2">People</button>
                  </Link>
              </div>
          </div>
      </div>
  )
}

export default App
