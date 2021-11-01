import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap-icons";

export default () => {
  return (
    <>
      <header class="header">
        <div class="header-wraper">
          <div class="header-contact">
            <div class="container">
              <ul class="contact-menu">
                <li class="contact-item">
                  <i class="icon-contact"></i>
                  <a href="mailto:rovpc1211@gmail.com" class="contact-link">
                    rovpc1211@gmail.com
                  </a>
                </li>
                <li class="contact-item">
                  <i class="bi bi-telephone icon-contact"></i>
                  <a href="tel:0374889957" class="contact-link">
                    {" "}
                    0374889957
                  </a>
                </li>
              </ul>
              <div class="contact-social">
                <div class="social-link">
                  <a href="https://www.facebook.com/">
                    <i class="bi bi-facebook social-logo"></i>
                  </a>
                </div>
                <div class="social-link">
                  <a href="https://twitter.com/">
                    <i class="bi bi-twitter social-logo"></i>
                  </a>
                </div>
                <div class="social-link">
                  <a href="https://www.instagram.com/">
                    <i class="bi bi-instagram social-logo"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav class="header-nav">
            <div class="container">
              <div class="header-bottom">
                <div class="logo">
                  <a href="index.html">
                    <img
                      src="asset/img/logo/logo-3.png"
                      alt="greenland"
                      title="greendland"
                    />
                  </a>
                </div>
                <div class="nav-list">
                  <ul class="nav-menu">
                    <li class="nav-item">
                      <a href="" class="nav-link nav-link_active">
                        trang chủ
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        dự án
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        tin tức
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        giới thiệu
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">
                        liên hệ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
