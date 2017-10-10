import React, {Component} from 'react';
import style from './NavMenu.css';
import r from 'superagent';
import cx from 'classnames';

class NavMenu extends Component {
  componentDidMount() {
    r.get('/ajax')
        .then(r => {
          console.log(r);
        })
  }

  render() {
    return (
      <div className="col-12 col-md-3 col-xl-2 bd-sidebar">

        <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">

          <div>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">대쉬보드</a>
              </li>
            </ul>
          </div>
          <div>
            <span className="nav-link active" href="#">베나클 설정</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">설치 설정</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">기본 설정</a>
              </li>
            </ul>
          </div>

          <div>
            <span className="nav-link active" href="#">회원 설정</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">회원 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">접속 회원</a>
              </li>
            </ul>
          </div>

          <div>
            <span className="nav-link active" href="#">컨텐츠 설정</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">클럽 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">포스트 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">댓글 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">대댓글 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">좋아요 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">공유 리스트</a>
              </li>
            </ul>
          </div>

          <div>
            <span className="nav-link active" href="#">데이터 베이스 설정</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">설치 설정</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">기본 설정</a>
              </li>
            </ul>
          </div>

          <div>
            <span className="nav-link active" href="#">포인트 & 결제</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">결제 리스트</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">포인트</a>
              </li>
            </ul>
          </div>

          <div>
            <span className="nav-link active" href="#">통계</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">기본 데이터</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">기본 설정</a>
              </li>
            </ul>
          </div>

          <div>
            <span className="nav-link active" href="#">광고</span>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">광고 문의</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">베너</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default NavMenu;