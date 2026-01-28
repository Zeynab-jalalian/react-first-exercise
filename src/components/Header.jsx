import "./Header.css";
function Header() {
  return (
    <div>
      <header>
        <div className="header-left">
          <h3>BookHub</h3>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <a href="#">
                <span className="fa fa-search"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-regular fa-floppy-disk"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-regular fa-share-from-square"></span>
              </a>
            </li>
            <li>
              <span className="fa-solid fa-star"></span>
            </li>
          </ul>
        </div>
      </header>
       <div className="homepage">
        <h1>This Month</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, aperiam</p>
        <a href="#">Shop Now</a>
        <div className="h-books">
            <img src="img/b1.jpg" alt="book" width="100" />
            <img src="img/b2.jpg" alt="book" width="100" />
            <img src="img/b3.jpg" alt="book" width="100" />
        </div>
    </div>
    </div>
  );
}

export default Header;
