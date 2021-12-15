import React from "react";

function localstorage() {
  //  setdata with localstorage
  let obj = { nameofrooms: '1',
  price: 1001,
  ServicesHotel: "Good", nameofrooms1: '2',
  price: 1005,
  ServicesHotel: "Good",}

  const SetData = () => {

  localStorage. setItem('testObject', JSON.stringify(obj));
  localStorage.setItem("My name", "ahmed");
  };
  //  getdata with localstorage

  const GetData = () => {

    let data = localstorage.getItem(obj);
    console.log('obj', JSON.parse(obj));
    // console.log(obj)
  };

  return (
    <>
      <div>
        <button  className="btn btn-success tex-center" onClick={SetData}>
          SetData
        </button>

        <button className="btn btn-success text-center" onClick={GetData}>
          getData
        </button>
      </div>
    </>
  );
}

export default localstorage;
