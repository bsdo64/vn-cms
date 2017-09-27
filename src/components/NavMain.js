import React, {Componet} from 'react';
import style from './NavMain.css';
import cx from 'classnames';

const NavMain = () => {
  return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Venacle</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">홈<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">데이터</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">운영</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">문서</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">설정</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">도움말</a>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  )
};

export default NavMain;