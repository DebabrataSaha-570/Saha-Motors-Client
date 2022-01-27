import React from 'react';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    {/* offcanvas trigerr  */}

                    <button class="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
                    </button>
                    {/* offcanvas trigger  */}
                    <a class="navbar-brand fw-bold text-uppercase" href="#">Saha Motors</a>

                    <li class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>


                    {/* <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul> */}


                    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div> */}
                </div>
            </nav>

            <div class="offcanvas bg-dark text-white offcanvas-start sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                <div class="offcanvas-body p-0">
                    <nav className='navbar-dark'>
                        <ul className="navbar-nav">
                            <li>
                                <div className="text-muted small fw-bold px-3">CORE</div>
                            </li>
                            <li>
                                <a href="#" className='nav-link px-3 active'>
                                    <span className="me-2">
                                        <i class="bi bi-speedometer2"></i>
                                    </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="my-4">
                                <hr className='dropdown-divider' />
                            </li>
                            <li>

                                <div className="text-muted small fw-bold px-3">INTERFACE</div>
                            </li>
                            <li>
                                <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <span className="me-2"> <i className="bi bi-layout-split"></i> </span>
                                    <span>Layouts</span>
                                    <span className='right-icon ms-auto'><i className="bi bi-chevron-down"></i></span>
                                </a>
                                <div class="collapse" id="collapseExample">
                                    <div>
                                        <ul class="navbar-nav ps-3 ">
                                            <li>
                                                <a href="#" className='nav-link px-3'>
                                                    <span className="me-2"> <i className="bi bi-layout-split"></i> </span>
                                                    <span>Nested Link</span>
                                                    <span className='right-icon ms-auto'><i className="bi bi-chevron-down"></i></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

            <main className='mt-5 pt-3'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 fw-bold fs-3">
                            Dashboard
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div class="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
                                <div class="card-header">Header</div>
                                <div class="card-body">
                                    <h5 class="card-title">Primary card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;