import React from 'react'

export default function Topbar() {
  return (
    <>
    <div className="topbar">
        <div className="container-topbar">
            <div className="col-md-6">
            <div className="menu-topbar-left d-none d-xl-block">
                <ul className="nav-small">
                    <li><a className="font-xs" href="page-about-us.html">About Us</a></li>
                    <li><a className="font-xs" href="#">Contact Us</a></li>
                    <li><a className="font-xs" href="#">FAQ</a></li>
                </ul>
            </div>
            </div>
            <div className="col-md-6">
            <div className="menu-topbar-right d-none d-xl-block">
                <ul className="nav-small">
                    <li><a className="font-xs" href="page-about-us.html">Join Free</a></li>
                    <li><a className="font-xs" href="page-careers.html">Sign In</a></li>
                    <li><a className="font-xs" href="page-register.html">Forgot your password?</a></li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    {/* <div className="topbar">
  <div className="container-topbar">
    <div className="menu-topbar-left d-none d-xl-block">
      <ul className="nav-small">
        <li><a className="font-xs" href="page-about-us.html">About Us</a></li>
        <li><a className="font-xs" href="page-careers.html">Careers</a></li>
        <li><a className="font-xs" href="page-register.html">Open a shop</a></li>
      </ul>
    </div>
    <div className="menu-topbar-right d-none d-xl-block">
      <ul className="nav-small">
        <li><a className="font-xs" href="page-about-us.html">About Us</a></li>
        <li><a className="font-xs" href="page-careers.html">Careers</a></li>
        <li><a className="font-xs" href="page-register.html">Open a shop</a></li>
      </ul>
    </div>
  </div>
</div> */}

    </>
  )
}
