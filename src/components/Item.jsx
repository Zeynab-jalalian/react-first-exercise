

function Item({img,price}) {
  return (
    <div>
       <div className="n-book">
            <img src={img} alt="new-book" width="100" />
            <p>The Book's Name</p>
            <h3>{price}</h3>
          </div>
    </div>
  )
}

export default Item
