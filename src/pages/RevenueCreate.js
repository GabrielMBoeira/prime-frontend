import { Link } from 'react-router-dom';

function RevenueCreate() {

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
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" />
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-md-4">
                                        <label className="form-label">Revenue</label>
                                        <input type="text" className="form-control" id="revenue" />
                                    </div>
                                    <div className="mb-3 col-md-4">
                                        <label className="form-label" >Date</label>
                                        <input type="date" className="form-control" id="date" />
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