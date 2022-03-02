import React from "react";
import { Link } from "react-router-dom";

export default function Topbar(){
    return(
       
           <nav class="navbar navbar-expand-lg text-white navbar-dark bg-dark ">
  <div class="container-fluid">
    <h1 class="navbar-brand">Novel-Ex Technologies</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link to="/"> <button class="btn btn-bg-dark text-white" type="button" aria-current="page" >About</button></Link>
        </li>
        <li class="nav-item">
        <Link to="/skills"> <button class="btn btn-bg-dark text-white" aria-current="page">Skills</button></Link>
        </li>
        <li class="nav-item dropdown">
        <button class="btn btn-bg-dark text-white"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </button>
        
        </li>
        <li class="nav-item">
        <Link to="/contacts"><button class="btn btn-bg-dark text-white" aria-current="page">Contact</button></Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
       
    )
}