import React from "react";
// import PropTypes from 'prop-types';
const FoodItems = (props) => {

  let { title, description, price, kind, foodImg } = props;
  return (
    <div className="b">

      <div className="card" style={{ width: "15rem" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span className={`badge rounded-pill float-left bg-${props.kind === 'Non-Veg' ? 'danger' : 'success'} `}>{kind}</span>
        </div>
        <img src={foodImg} id="imgfood" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p>
            <small>&#8377;{price}</small>
          </p>
          {/* <a href="..." rel="noreferrer" target="_blank"> */}
            <button className="orderButton" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>

              <span className="button-text" >Order Now</span>
            </button>
          {/* </a> */}
        </div>
      </div>
    </div>

  );
};

export default FoodItems;
