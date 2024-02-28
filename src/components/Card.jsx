import React, { useRef, useState } from 'react';
import one from "./img/img1.webp";
import two from "./img/img2.jpg";
import three from "./img/img3.webp";
import four from "./img/img4.webp";

const Card = () => {

  let brand = useRef()
  let price = useRef()
  const [data, setdata] = useState([
    {
      id: 1,
      brand: "omega",
      price: "5055",
      img: one
    },
    {
      id: 2,
      brand: "tissot",
      price: "4200",
      img: two
    },
    {
      id: 3,
      brand: "analog",
      price: "2000",
      img: three
    },
    {
      id: 4,
      brand: "superior luxury",
      price: "3500",
      img: four
    },
    {
      id: 5,
      brand: "omega",
      price: "5055",
      img: one
    },
    {
      id: 6,
      brand: "tissot",
      price: "4200",
      img: two
    },
  ]);

  let submit =()=>{
    let user={
        id:7,
        brand:brand.current.value,
        price:price.current.value,
        img:three
    } 

    setdata([...data,user])
}

  let deleteData = (id) => {
    console.log(id);
    setdata(data.filter((val) => val.id !== id))
  }

  return (
    <>
      {data.map((val) => (
        <div key={val.id} className='col-md-3' style={{ marginBottom: "4rem" }}>
          <div className="card" style={{ width: '18rem' }}>
            <img src={val.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brand:- {val.brand}</h5>
              <p className="card-text">Price:- $ {val.price}</p>
              <button className="btn btn-primary" style={{ marginRight: "10px" }}>Add</button>
                  <button onClick={() => deleteData(val.id)} className="btn btn-danger">Delete</button>
                </div>
          </div>
        </div>
      ))}
        <div className="container" style={{marginBottom:'6rem'}}>
        <div className="row">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Enter Brand" ref={brand} />
          </div>
          <div className="col-md-4">
            <input type="number" className="form-control" placeholder="Enter Price" ref={price} />
          </div>
          <div className="col-md-4">
            <button onClick={submit} className="btn btn-success">Add New Item</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
