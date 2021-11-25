const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
        <style>
          nav {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #0a0a23;
          }
  
          ul {
            display: flex;
            padding: 0;
          }

          li {
            padding-left: 100px;
            list-style: none;
          }
          
          a {
            font-weight: 700;
            margin: 0 0px;
            color: #fff;
            text-decoration: none;
          }
          
          a:hover {
            padding-bottom: 0px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
        </style>
        <header>
          <nav>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="work.html">Work</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="contact.html">Recursos</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
      `;      
      class Header extends HTMLElement {
        constructor() {
          super();
        }
      
        connectedCallback() {
          const shadowRoot = this.attachShadow({ mode: 'closed' });
      
          shadowRoot.appendChild(headerTemplate.content);
        }
    }
  customElements.define('header-component', Header);
