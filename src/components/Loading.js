import './Loading.css';

function Loading() {

    return (

        <div className="loading">
            <div className="spinner-border text-primary d-flex justify-content-center align-items-center" role="status">
                <span className="visually-hidden">Loading... </span>
            </div>
            <span className="mx-2">Loading... Please wait.</span>
        </div>
    )
}

export default Loading;