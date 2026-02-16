import { useState } from "react";
import "./Books.css";
import Item from "./Item";


function Books() {
  const [bookitems,setBookitems]=useState([
   {
    img: "/react-first-exercise/img/n1.jpg",
    price: "120",
  },
  {
    img: "/react-first-exercise/img/n2.jpg",
    price: "44",
  },
  {
    img: "/react-first-exercise/img/n3.jpg",
    price: "87",
  },
  {
    img: "/react-first-exercise/img/n4.jpg",
    price: "200",
  },
  {
    img: "/react-first-exercise/img/n5.jpg",
    price: "313",
  },
]);

  return (
    <div>
      <div className="new">
        <h1>New Released Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quia
        </p>
        <div className="n-books">
          <Item {...bookitems[0]} />
          <Item {...bookitems[1]} />
          <Item {...bookitems[2]} />
          <Item {...bookitems[3]} />
          <Item {...bookitems[4]} />
        </div>
      </div>
    </div>
  );
}

export default Books;
