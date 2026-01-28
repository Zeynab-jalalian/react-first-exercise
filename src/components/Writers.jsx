import "./Writers.css"

function Writers() {
  return (
    <div>
       <div className="authors">
        <h1>Favorite Authors</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, rerum eos. Quam, eius illo! Excepturi ullam
            nisi adipisci veniam velit</p>
        <div className="as-box">
            <div className="a-box">
                <img src="img/ag.jpg" alt="author" />
                <h3>Agatha Christie</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="a-box">
                <img src="img/ac.jpg" alt="author" />
                <h3>Albert Camus</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="a-box">
                <img src="img/fd.jpg" alt="author" />
                <h3>Fyodor Dostoevsky</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="a-box">
                <img src="img/ja.jpg" alt="author" />
                <h3>Jane Austen</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>
            <div className="a-box">
                <img src="img/lt.jpg" alt="author"  />
                <h3>Lev Tolstoy</h3>
                <p>Lorem ipsum dolor sit</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Writers
