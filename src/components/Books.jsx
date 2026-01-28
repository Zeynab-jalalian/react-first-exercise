import "./Books.css";
import Item from "./Item";

function Books() {
  return (
    <div>
      <div className="new">
        <h1>New Released Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quia
        </p>
        <div className="n-books">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
}

export default Books;
