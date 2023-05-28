import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className='home'>
            <div className="boxLogin m-2">
                <form className="formLogin m-5">
                    <form>
                        <div className="title">
                            Login
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label text-light">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="d-flex justify-content-end my-5">
                            <Link type="submit" to={'/revenues'} className="btn btn-primary btn-sm">Sing In</Link>
                        </div>
                    </form>
                </form>
            </div>
        </div>
    )
}

export default Home;