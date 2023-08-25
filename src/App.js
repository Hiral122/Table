import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: "Sports Shoes 1",
      price: 350,
      qty: 1,
      total : 350,
      imgURL:
        "https://e7.pngegg.com/pngimages/354/583/png-clipart-shoe-sneakers-running-shoes-white-sport.png",
    },
    {
      id: 2,
      name: "Sports Shoes 2",
      price: 350,
      qty: 1,
      total : 350,

      imgURL:
        "https://w7.pngwing.com/pngs/323/773/png-transparent-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-sneakers-thumbnail.png",
    },
    {
      id: 3,
      name: "Sports Shoes 3",
      price: 350,
      qty: 1,
      total : 350,

      imgURL:
        "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png",
    },
    {
      id: 4,
      name: "Sports Shoes 4",
      price: 350,
      qty: 1,
      total : 350,

      imgURL:
        "https://e7.pngegg.com/pngimages/354/583/png-clipart-shoe-sneakers-running-shoes-white-sport.png",
    },
  ]);
//  increment
  let incrqty = (shoeId) => {
    setShoes((prevState) => {
      return prevState.map((shoe) => {
        if (shoe.id === shoeId) {
          return {
            ...shoe,
            qty: shoe.qty + 1,
            total: shoe.total + shoe.price, // Increase the total as well
          };
        }
        return shoe;
      });
    });
  };
  //decrement
  let decrqty = (shoeId) => {
    setShoes((prevState) => {
      return prevState.map((shoe) => {
        if (shoe.id === shoeId && shoe.qty > 0) {
          const newQty = shoe.qty - 1;
          const newTotal = newQty * shoe.price; // Update total
          return {
            ...shoe,
            qty: newQty,
            total: newTotal,
          };
        }
        return shoe;
      });
    });
  };

  //delete
  let deleteShoes = (shoeId)=>[
    setShoes((prevState)=>{
return prevState.filter(shoe => shoe.id !== shoeId)
    })


  ]
  let calTotal =()=>{
    let total=0;
    for(let shoe of shoes)
    {
      total+=(shoe.qty * shoe.price);
    }
    return total
  }
  


  return (
    <div className="container">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Qty</th>
            <th scope="col">Actions</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe) => (
            <tr key={shoe.id}>
              <th scope="row">{shoe.id}</th>
              <td>{shoe.name}</td>
              <td>{shoe.price}</td>
             
              <td>
                <img src={shoe.imgURL} alt="img" width={50} height={50} />
              </td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-dash-circle-fill me-1"
                  viewBox="0 0 16 16"
                  onClick={()=>incrqty(shoe.id)}
                >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                {shoe.qty}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill ms-1"
                  viewBox="0 0 16 16"
                  onClick={()=>decrqty(shoe.id)}
                >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>

                </svg>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=>deleteShoes(shoe.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </td>
              <td>{shoe.total}</td>
            </tr>
          ))}
          <tr>
          <td colSpan={5 }>  </td>
          <td className="text-success fs-5 fw-bold">Grand Total :
          </td>
          <td className="fw-bold fs-2">{calTotal()}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
