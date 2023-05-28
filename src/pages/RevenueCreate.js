import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function RevenueCreate() {


    const [loading, setLoading] = useState(false)
    const [inputErrorList, setInputErrorList] = useState({})
    const [revenue, setRevenue] = useState({
        description: '',
        revenue: '',
        date: ''
    })

    const handleInput = (e) => {
        e.persist();
        setRevenue({ ...revenue, [e.target.name]: e.target.value })
    }

    const saveRevenue = (e) => {

        e.preventDefault();
        setLoading(true);

        const data = {
            description: revenue.description,
            revenue: revenue.revenue,
            date: revenue.date,
        }

        axios.post(`http://localhost:8000/api/revenue`)
            .then(res => {
                alert(res.data.message)
            })
            .catch(function (error) {

                if (error.response) {

                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.setInputErrorList)
                        setLoading(true);
                    }

                    if (error.response.status === 500) {
                        alert(error.response.data)
                        setLoading(true);
                    }
                }
            })
    }

    if (loading) {
        return (
            <Loading />
        )
    }   

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Revenues
                                <Link to="/revenues" className="btn btn-primary float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={saveRevenue}>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="text" className="form-control" name="description" value={revenue.description} onChange={handleInput} />
                                    <small className='text-danger'>{inputErrorList.description}</small>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-md-4">
                                        <label className="form-label">Revenue</label>
                                        <input type="text" className="form-control" name="revenue" value={revenue.revenue} onChange={handleInput} />
                                        <small className='text-danger'>{inputErrorList.revenue}</small>
                                    </div>
                                    <div className="mb-3 col-md-4">
                                        <label className="form-label" >Date</label>
                                        <input type="date" className="form-control" name="date" value={revenue.date} onChange={handleInput} />
                                        <small className='text-danger'>{inputErrorList.date}</small>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueCreate;