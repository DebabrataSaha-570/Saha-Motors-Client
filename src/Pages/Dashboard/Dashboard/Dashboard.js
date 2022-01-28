import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddProduct from '../AddProduct/AddProduct';

const Dashboard = () => {
    const { user } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    {/* offcanvas trigerr  */}

                    <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
                    </button>
                    {/* offcanvas trigger  */}
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <a className="navbar-brand fw-bold text-uppercase" href="#">Saha Motors</a>
                    </Link>

                    <li className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <a className="nav-link active" aria-current="page" href="#">{user?.displayName}</a>
                    </li>


                    {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul> */}


                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div> */}
                </div>
            </nav>

            <div className="offcanvas bg-dark text-white offcanvas-start sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

                <div className="offcanvas-body p-0">
                    <nav className='navbar-dark'>
                        <ul className="navbar-nav mt-3">

                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>My Orders</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>Payment</span>
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}/review`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>Review</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllOrders`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>Manage All Orders</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>Make Admin</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>Manage Products</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none' }} to={`${url}/addProduct`}>
                                    <a href="#" className='nav-link px-3 active'>
                                        <span className="me-2">
                                            <i className="bi bi-speedometer2"></i>
                                        </span>
                                        <span>Add Product</span>
                                    </a>
                                </Link>
                            </li>
                            <li className='mt-5'>
                                <a href="#" className='nav-link px-3 active'>
                                    <span className="me-2">
                                        <i className="bi bi-speedometer2"></i>
                                    </span>
                                    <span>LogOut</span>
                                </a>
                            </li>



                        </ul>
                    </nav>

                </div>
            </div>

            <main className='mt-5 pt-3'>
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        {/* <MyOrders></MyOrders> */}
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>
            </main>
        </>
    );
};

export default Dashboard;