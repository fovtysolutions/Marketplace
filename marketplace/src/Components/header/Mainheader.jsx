import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faUser,
	faCog,
	faSignInAlt,
	faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/StickyBar.css";

export default function Mainheader() {
	return (
		<>
		<div className="sticky-top top-bar">
  <div className="container-fluid">
    <div className="row align-items-center">
      {/* Logo */}
      <div className="col-6 col-md-3">
        <div className="logo">
          <img
            src="../images/template/logo.svg"
            alt="Logo"
            className="img-fluid"
          />
        </div>
      </div>

      {/* Search Bar (Hidden on small screens) */}
      <div className="col-md-6 d-none d-md-block">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* Icons Section (Hidden on mobile) */}
      <div className="col-md-3 d-none d-md-flex justify-content-end">
        <div className="button-group">
          <button className="icon-button">
            <div className="icon-text">
              <div className="icon-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span>Sign In/Join</span>
            </div>
          </button>
          <button className="icon-button">
            <div className="icon-text">
              <div className="icon-icon">
                <FontAwesomeIcon icon={faCog} />
              </div>
              <span>Message</span>
            </div>
          </button>
          <button className="icon-button">
            <div className="icon-text">
              <div className="icon-icon">
                <FontAwesomeIcon icon={faSignInAlt} />
              </div>
              <span>Inquiry Basket</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Button (Visible on small screens) */}
      <div className="col-6 d-md-none text-end">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  </div>

  {/* Offcanvas Menu for Mobile */}
  <div
    className="offcanvas offcanvas-start"
    tabIndex="-1"
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasMenuLabel">
        <div className="logo">
          <img
            src="../images/template/logo.svg"
            alt="Logo"
            className="img-fluid"
          />
        </div>
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Sign In/Join</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Message</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Inquiry Basket</a>
        </li>
      </ul>
    </div>
  </div>
</div>
			{/* <div className="sticky-top top-bar">
				<div className="container-fluid">
					<div className="row align-items-center">

						<div className="col-6 col-md-3">
							<div className="logo">
								<img
									src="../images/template/logo.svg"
									alt="Logo"
									className="img-fluid"
								/>
							</div>
						</div>


						<div className="col-md-6 d-none d-md-block">
							<div className="search-bar">
								<input
									type="text"
									placeholder="Search..."
									className="form-control"
								/>
								<button className="search-button">
									<FontAwesomeIcon icon={faSearch} />
								</button>
							</div>
						</div>

						
						<div className="col-md-3 d-none d-md-flex justify-content-end">
							<div className="button-group">
								<button className="icon-button">
									<div className="icon-text">
										<div className="icon-icon">
											<FontAwesomeIcon icon={faUser} />
										</div>
										<span>Sign In/Join</span>
									</div>
								</button>
								<button className="icon-button">
									<div className="icon-text">
										<div className="icon-icon">
											<FontAwesomeIcon icon={faCog} />
										</div>
										<span>Message</span>
									</div>
								</button>
								<button className="icon-button">
									<div className="icon-text">
										<div className="icon-icon">
											<FontAwesomeIcon icon={faSignInAlt} />
										</div>
										<span>Inquiry Basket</span>
									</div>
								</button>
							</div>
						</div>

					
						<div className="col-6 d-md-none text-end">
							<button
								className="btn btn-primary"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasMenu"
								aria-controls="offcanvasMenu"
							>
								<FontAwesomeIcon icon={faBars} />
							</button>
						</div>
					</div>
				</div>
			<div
					className="offcanvas offcanvas-start"
					tabIndex="-1"
					id="offcanvasMenu"
					aria-labelledby="offcanvasMenuLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasMenuLabel">
						<div className="logo">
								<img
									src="../images/template/logo.svg"
									alt="Logo"
									className="img-fluid"
								/>
							</div>
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Sign In/Join
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Message
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Inquiry Basket
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div> */}

		</>
	);
}
