import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { sortEmployees, filterEmployees } from "../features/employee/employeeSlice";

function People(){
    const employees = useSelector(state => state.employee.users)
    const filteredEmployees = useSelector(state => state.employee.filteredUsers)
    const dispatch = useDispatch()
    const users = employees ?? filteredEmployees


    return(
        <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="card">
                <div className="card-body d-flex">
                   <div>
                       <div>
                           <span>Sorteaza dupa:</span>
                           <div className="d-flex">
                               <input onClick={() => dispatch(sortEmployees('nume'))} name="nume"  type="radio" className="form-check"/>
                               <span className="ms-3">Nume</span>
                           </div>
                           <div className="d-flex">
                               <input onClick={() => dispatch(sortEmployees('pret'))} name="nume"  type="radio" className="form-check"/>
                               <span className="ms-3">Pret</span>
                           </div>
                       </div>
                       <div className="mt-3">
                           <span>Filtreaza dupa pret</span>
                           <div className="d-flex">
                               <input onClick={() => dispatch(filterEmployees('low'))} name="2500" type="radio" className="form-check"/>
                               <span className="ms-3">&#60; 2500</span>
                           </div>
                           <div className="d-flex">
                               <input onClick={() => dispatch(filterEmployees('medium'))} name="2500"  type="radio" className="form-check"/>
                               <span className="ms-3">2500-4000</span>
                           </div>
                           <div className="d-flex">
                               <input onClick={() => dispatch(filterEmployees('high'))} name="2500"  type="radio" className="form-check"/>
                               <span className="ms-3">> 4000</span>
                           </div>
                       </div>
                   </div>
                    <div className="vr mx-3"></div>
                    <div>
                        <ul>
                            {users.map(function (employee, index){
                                return(
                                    <li key={index}>
                                        <div>
                                            Nume: {employee.nume}
                                        </div>
                                        <div>
                                            Prenume: {employee.prenume}
                                        </div>
                                        <div>
                                            Meserie: {employee.meserie}
                                        </div>
                                        <div>
                                            Salariu: {employee.salariu}
                                        </div>
                                        <div>
                                            Data angajarii: {employee.data_angajare}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Link to={"/"}>
                <button className="btn btn-outline-dark mt-3">Home</button>
            </Link>
        </div>
    )
}

export default People;