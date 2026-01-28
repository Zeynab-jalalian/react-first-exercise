import "./Footer.css"

function Footer() {
  return (
    <div>
       <div className="input">
        <div className="input-left">
         <p>Subscribe our newsletter for newest books updates</p>
        </div>
        <div className="input-right">
          <input type="text" placeholder="Type books'name" />
          <a href="#">Subscribe</a>
        </div>
       </div>
      <footer>
        <div className="footer1">
          <h1>BooksHub</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            ullam id omnis reprehenderit cumque? Rem, sint laborum?
          </p>
          <ul>
            <li>
              <a href="#">
                <span className="fa-brands fa-facebook"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-brands fa-twitter"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-brands fa-instagram"></span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fa-brands fa-telegram"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer2 f">
          <ul>
            <h3>About</h3>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Web</a>
            </li>
          </ul>
        </div>
        <div className="footer3 f">
          <ul>
            <h3>Services</h3>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Our servisec</a>
            </li>
            <li>
              <a href="#">Brand</a>
            </li>
            <li>
              <a href="#">Comments</a>
            </li>
          </ul>
        </div>
        <div className="footer4 f">
          <ul>
            <h3>Help</h3>
            <li>
              <a href="#">Questions</a>
            </li>
            <li>
              <a href="#">Problem</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
          </ul>
        </div>
        <div className="footer5 f">
          <ul>
            <h3>Politics</h3>
            <li>
              <a href="#">Rules</a>
            </li>
            <li>
              <a href="#">Limit</a>
            </li>
            <li>
              <a href="#">Exit</a>
            </li>
            <li>
              <a href="#">Enter</a>
            </li>
            <li>
              <a href="#">Org</a>
            </li>
          </ul>
        </div>
        <div className="footer6 f">
          <ul>
            <h3>Get in touch</h3>
            <li>
              <a href="#">Our friends and Clients</a>
            </li>
            <li>
              <a href="#">Sending email</a>
            </li>
            <li>
              <a href="#">Share your idea</a>
            </li>
            <li>
              <a href="#">Phone and Account</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
