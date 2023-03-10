function Navbar() {
    return (
  
<header class="header">
      <div class="portal-header portal-header-compact">
        <div class="container portal-header-inner">
          <a href="#" aria-label="Portalnavn" class="logo">
            <span class="d-none d-print-block">Portalnavn</span>
          </a>
          <button
            class="function-link button-menu-open js-menu-open ml-auto d-print-none"
            aria-haspopup="menu"
            title="Åben mobil menu"
          >
            <svg class="icon-svg" focusable="false" aria-hidden="true">
              <use xlinkHref="#menu" />
            </svg>
            Menu
          </button>

          <div class="portal-info">
            <p class="user">Anders Andersen, Forsikringens Forsikringsfirma</p>
            <button class="button button-secondary alert-leave d-print-none">
              Log af
            </button>
          </div>
        </div>
      </div>

      <div class="overlay"></div>
      <nav class="nav">
        <button
          class="function-link button-menu-close js-menu-close"
          title="Luk mobil menu"
        >
          <svg class="icon-svg" aria-hidden="true">
            <use xlinkHref="#close"></use>
          </svg>
          Luk
        </button>

        <div class="portal-info-mobile">
          <p class="user bold">Lone Hansen</p>
          <a href="#" class="button button-secondary button-signout">
            Log af
          </a>
        </div>

        <div class="solution-info-mobile">
          <p class="bold">Myndighedsnavn</p>
          <p>Support: 12 34 56 78</p>
        </div>
      </nav>

      <div class="overlay"></div>
      <nav class=" nav">
        <button
          class="function-link button-menu-close js-menu-close"
          title="Luk mobil menu"
        >
          <svg class="icon-svg" aria-hidden="true">
            <use xlinkHref="#close"></use>
          </svg>
          Luk
        </button>
        <div class="navbar navbar-primary">
          <div class="navbar-inner container">
            <ul class="nav-primary">
              <li>
                <a href="#" class="nav-link">
                  <span>Første menupunkt</span>
                </a>
              </li>
              <li class="current">
                <a href="#" class="nav-link">
                  <span>Andet menupunkt</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link">
                  <span>Tredje menupunkt</span>
                </a>
              </li>
              <li>
                <a href="#" class="nav-link">
                  <span>Fjerde menupunkt</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="navbar">
          <div class="navbar-inner container navbar-context-actions">
            <div class="nav-actions">
              <a href="#" class="function-link">
                <svg class="icon-svg" aria-hidden="true">
                  <use xlinkHref="#print"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="portal-info-mobile">
          <p class="user bold">Ida Ester Petersen</p>
          <a
            href="#"
            class="button button-secondary button-signout alert-leave"
          >
            Log af
          </a>
        </div>

        <div class="solution-info-mobile">
          <p class="h5 authority-name">Myndighedsnavn</p>
          <p>
            Support: 12 34 56 78 ·{" "}
            <a href="#" class="icon-link function-link alert-leave">
              Kontakt
              <svg class="icon-svg" aria-hidden="true" focusable="false">
                <use xlinkHref="#open-in-new"></use>
              </svg>
            </a>
          </p>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;