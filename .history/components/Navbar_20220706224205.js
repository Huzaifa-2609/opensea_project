import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar = (props) => {
  const location=useRouter();
  return (
    <div>
      <nav className="navbar shadow-sm fixed-top navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand text-color fw-bolder" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        
    <div className="collapse navbar-collapse" style={{width:"50%"}} id="navbarSupportedContent">

            <div className="row height d-flex justify-content-center align-items-center">
             
                <div className="form">
                  <i className="fa fa-search"></i>
                  <input type="text" className="form-control form-input" placeholder="Search anything..."/>
                </div>
            
            </div>
            
  
      <ul className="navbar-nav gap-4 m-auto mb-2 mb-lg-0" style={location.pathname==="/signup"?{visibility:"hidden"}:{}}>
      <li className="nav-item">
          <Link href="/"><a className="nav-link " aria-current="page" >Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/"><a className="nav-link " aria-current="page" >Prices</a></Link>
        </li>
        <li className="nav-item">
          <Link href="/"><a className="nav-link " >Learn</a></Link>
        </li>
        
        <li className="nav-item dropdown">
          <Link href="/"><a className="nav-link dropdown-toggle pe-none"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Developers
          </a></Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link href="/"><a className="dropdown-item" >Action</a></Link></li>
            <li><Link href="/"><a className="dropdown-item" >Another action</a></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link href="/"><a className="dropdown-item" >Something else here</a></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link  href="/"><a className="nav-link">Company</a></Link>
        </li>
      </ul >
      {/* <form className="d-flex" role="search">
        <ul className="navbar-nav gap-3 media" style={location.pathname==="/signup"?{display:"none"}:{}}>
      <li className="nav-item float-right">
          <Link href="/login"><a className="nav-link"  >Sign in</a></Link>
    </li>
      <li className="nav-item mx-2">
    <Link href='/signup'><a className="btn btn1 btn-primary bd-color bg-color"  style={location.pathname==="/signup"?{display:"none"}:{}} type="submit">Get Started</a></Link>
    </li>
        </ul>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar