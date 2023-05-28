import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

function Revenue() {

    const [loading, setLoading] = useState(true);
    const [revenues, setRevenues] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/api/revenues`).then(res => {
            setRevenues(res.data.revenues)
            setLoading(false)
        });

    }, [])

    if(loading) {
        return (
            <Loading />
        )
    }


    let revenueDetails = "";
    revenueDetails = revenues.map((item, index) => {

        const formattedDate = new Date(item.dateIni).toLocaleDateString('pt-BR');

        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.revenue}</td>
                <td>{formattedDate}</td>
                <td>
                    <Link to={`/revenues/${item.id}/edit`} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Revenues
                                <Link to="/revenues/create" className="btn btn-primary float-end">Create Revenue</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Description</th>
                                        <th>Revenues</th>
                                        <th>Date</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {revenueDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Revenue;