import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css"

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
        
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Principal
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Marcações
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Serviços
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sobre nós
                </a>
              </li>
             {/* <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
