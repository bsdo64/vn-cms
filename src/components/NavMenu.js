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
        <div className={style['nav-docs']}>

          <div className="nav-docs-section">
            <h3>베나클 설정</h3>
            <ul>

              <li>
                <a href="/react/docs/installation.html">설치 설정</a>

              </li>

              <li>
                <a href="/react/docs/hello-world.html">기본 설정</a>

              </li>

            </ul>
          </div>

          <div className="nav-docs-section">
            <h3>데이터</h3>
            <ul>

              <li>
                <a href="/react/docs/react-dom.html">회원</a>

              </li>

              <li>
                <a href="/react/docs/react-api.html">포스트</a>

              </li>

              <li>
                <a href="/react/docs/react-dom.html">댓글</a>

              </li>

              <li>
                <a href="/react/docs/react-dom-server.html">대댓글</a>

              </li>

              <li>
                <a href="/react/docs/dom-elements.html">좋아요</a>

              </li>

              <li>
                <a href="/react/docs/events.html">링크</a>

                <ul>
                  <li><a href="#">일반링크</a></li>
                  <li><a href="#">베나링크</a></li>
                </ul>
              </li>

            </ul>
          </div>

          <div className="nav-docs-section">
            <h3>DB</h3>
            <ul>

              <li>
                <a href="/react/docs/react-dom.html">회원</a>

              </li>

            </ul>
          </div>

          <div className="nav-docs-section">
            <h3>통계</h3>
            <ul>

              <li>
                <a href="/react/docs/jsx-in-depth.html">기본 데이터</a>

              </li>

              <li>
                <a href="/react/docs/jsx-in-depth.html">기본 데이터</a>

              </li>

            </ul>
          </div>

          <div className="nav-docs-section">
            <h3>광고</h3>
            <ul>

              <li>
                <a href="/react/docs/jsx-in-depth.html">기본 데이터</a>

              </li>
              <li>
                <a href="/react/docs/jsx-in-depth.html">베너</a>

              </li>
              <li>
                <a href="/react/docs/jsx-in-depth.html">광고 문의</a>

              </li>

            </ul>
          </div>

        </div>
    )
  }
}

export default NavMenu;