import React from 'react'

const Nav = () => {
  return (
    <>

<nav class="navbar navbar-expand-lg bg-light  fixed-top">
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span class="navbar-toggler-icon ">
              <i class="ri-menu-line"></i>
            </span>
          </button>
          <button
            class="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span
              class="navbar-toggler-icon"
              data-bs-target="#offcanvasExample"
            ></span>
          </button>

          <a
            class="navbar-brand fw-bold text-uppercase  text-muted me-auto " 
            href="/"
          >
            Billing Admin
          </a>
          <button
            class="navbar-toggler  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon ">
              <i class="ri-menu-line"></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="nav_right_side_style">
                    <div className="icon_bell">
                      <i class="ri-notification-2-line"></i>
                    </div>
                    <div className="user_rounded">
                      <ul class="navbar-nav  mb-1 mb-lg-0">
                        <a href="#" className="mt-1">
                          <img src="images/circle.png" width="45" alt="" />
                        </a>
                        <li class="nav-item dropdown">
                          <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="bi bi-person text-black"></i>
                          </a>
                          <ul
                            class="dropdown-menu  dropdown-menu-end"
                            aria-labelledby="navbarDropdown"
                          >
                            <li>
                              <a class="dropdown-item" href="#">
                                Profile
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Setting
                              </a>
                            </li>
                            <li>
                              <hr class="dropdown-divider" />
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">
                                Logout
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

    </>
  )
}

export default Nav