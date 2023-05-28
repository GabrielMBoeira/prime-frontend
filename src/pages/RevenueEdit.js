import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';

function RevenueEdit() {

    const { id } = useParams();

    const [loading, setLoading] = useState(true)
    const [inputErrorList, setInputErrorList] = useState({})
    const [revenue, setRevenue] = useState({})

    const handleInput = (e) => {
        e.persist();
        setRevenue({ ...revenue, [e.target.name]: e.target.value })
    }

    useEffect(() => {

        axios.get(`http://localhost:8000/api/revenues/${id}/edit`).then(res => {
            setRevenue(res.data.revenue)
            setLoading(false)
        })
            .catch(function (error) {

                if (error.response) {

                    if (error.response.status === 404) {
                        alert(error.response.data.message)
                        setLoading(false);
                    }

                    if (error.response.status === 500) {
                        alert(error.response.data)
                        setLoading(false);
                    }
                }
            });

    }, [id])

    const updateRevenue = (e) => {

        e.preventDefault();
        setLoading(true);

        const data = {
            description: revenue.description,
            revenue: revenue.revenue,
            dateIni: revenue.dateIni,
        }

        axios.put(`http://localhost:8000/api/revenues/${id}/edit`, data)
            .then(res => {

                alert(res.data.message)
                setLoading(false);

            })
            .catch(function (error) {

                if (error.response) {

                    if (error.response.status === 422) {
                        console.log(error.response.data.errors)
                        setInputErrorList(error.response.data.errors)
                        setLoading(false);
                    }

                    if (error.response.status === 404) {
                        alert(error.response.data.message)
                        setLoading(false);
                    }

                    if (error.response.status === 500) {
                        alert(error.response.data)
                        setLoading(false);
                    }
                }
            })
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    if (Object.keys(revenue).length === 0) {
        return (
            <div className="container mt-5">
                <h4>No Such Revenue Id {id}</h4>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Edit Revenue
                                <Link to="/revenues" className="btn btn-primary float-end">Back</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateRevenue}>
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
                                        <input type="date" className="form-control" name="dateIni" value={revenue.dateIni} onChange={handleInput} />
                                        <small className='text-danger'>{inputErrorList.dateIni}</small>
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

export default RevenueEdit;