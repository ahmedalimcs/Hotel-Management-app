import React from 'react'
import  {useState}  from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth, provider } from "../firebase";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const HotelBook = [
    {
      nameofrooms: '1',
      price: 1001,
      ServicesHotel: "Good",
    },
    {
        nameofrooms: '2',
        price: 1002,
        ServicesHotel: "Good",
    },
    {
        nameofrooms: '3',
        price: 1003,
        ServicesHotel: "Good",
    },
    {
        nameofrooms: '4',
        price: 1004,
        ServicesHotel: "Good",
    },
    {
        nameofrooms: '5',
        price: 1005,
        ServicesHotel: "Good",
    }
  ];

 function Screen() {

    const [filter,setfilter] = useState([])
    const [name,setname] = useState('')
    const [Cnic,setCnic] = useState('')
    const [Address,setAddress] = useState('')
    const [contact,setContactnumber] = useState('')
    const [person,setperson] = useState('')
    const [days,setdays] = useState('')


    const googleSignup = ()=>{

      signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);

    }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.log(errorMessage);
        
    });
     

    }



  

    const UserLogin = async (e) =>{
      e.preventDefault()
      let obj1 = {
          name : "user",
          Cnic : "42101-5611084-5",
          Address : "flat d60",
          contact : "03158032714",
          person : "05",
          days : "no of days"
      }
      console.log(obj1)

      const date = new Date();
    const id = date.getTime().toString();

    await setDoc(doc(db, "HotelManagementsystem", id), {
        name: "user",
        cnic: "42101-5611084-5",
        contact: "0315-8032714",
        nameofrooms: '2',
        price: 1002,
        ServicesHotel: "Good",
       
      
      });

   
          
        
  };

  


    return (
            // filterration process
            // add to card
        <>
        <h1 className='text-center'>FilterationProcess</h1>
        <div className='text-center'>
      {HotelBook.filter(nameofrooms => nameofrooms).map(filterednoofrooms => (
        <li id='unique' key={HotelBook}>
        {<p>name of rooms.</p>}
        {<p>Price</p>}
        {<p>ServicesHotel.</p>}
        {HotelBook.nameofrooms}
        {HotelBook.price}
        {HotelBook.ServicesHotel}
        </li>
        
        ))}
      </div>

      
  {/* );        Ui Design Hotel management app */}

        <div>
            <h1 className='text-center text-danger'>HotelManagementApp</h1>
            <div className='text-center'>
            <img src="https://ih1.redbubble.net/image.1073072208.2661/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg" alt="" width="200px" />
           </div>
           <div className='text-center'>
               {/* <li>No of rooms</li>
               <li>Price</li>
               <li>ServiceHotel</li> */}
               <select>
                   <option value="">Selected</option>
                   <option value="">No of rooms</option>
                   <option value="">Price</option>
                   <option value="">ServiceHotel</option>
                   </select>
           </div>
           <div>
               <img src="https://media.istockphoto.com/photos/downtown-cleveland-hotel-entrance-and-waiting-taxi-cab-picture-id472899538?b=1&k=20&m=472899538&s=170667a&w=0&h=oGDM26vWKgcKA3ARp2da-H4St2dMEhJg23TTBeJgPDE=" alt="" width="1300px" />
           </div>

             {/* user form selected Hotel management */}
             <div className='border border-2px'></div>
             <h1 className='text-center text-danger'>RegistrationForm</h1>

           <div className='text-center'>
           <div className="div">
          <form onSubmit={UserLogin} className="for">
            <h1 className="h1 text-center text-danger">Userlogin</h1>
            <br></br>
            <div>
            <i class="fa fa-envelope icon"></i>
            <input 
              className="bid"
              type="text"
              name=""
              id=""
              value={name}
              placeholder="Enter username" required onChange={(a => setname(a.target.value))}/>
            </div>
            <br></br>
            <br></br>
            <div>
            <i class="fa fa-key icon"></i>
             <input
             className="inp"
              type="password"
              name=""
              id=""
              required
              value={Cnic}
              placeholder="Enter password"
              onChange={(a => setCnic(a.target.value))}/>
            </div>
            <br></br>
            <br></br>
            <input type="text" name="" id="" required placeholder='Address' value={Address} onChange={(a => setAddress(a.target.value))} />
            <br></br>
            <br></br>
            <input type="text" name="" id="" required placeholder='Contactnumber' value={contact} onChange={(a => setContactnumber(a.target.value))} />
            <br></br>
            <br></br>
            <input type="text" name="" id="" required placeholder='persons' value={person} onChange={(a => setperson(a.target.value))} />
            <br></br>
            <br></br>
            <input type="text" name="" id="" required placeholder='setdays' value={days} onChange={(a => setdays(a.target.value))} />
            <br></br>
            <br></br>
            <button className="btn bg-danger p-2">Submitt</button>
            <br></br>
            <br></br>
            <i class="bi bi-facebook"></i>
          </form>
        </div>
          <div/>

           </div>

           <div>

             <h1 className='text-danger text-center'>Add to Card Data</h1>

             <div>

             <div class="card-group">
  <div class="card">
    <img src="https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/ae87da19-9f23-450a-8927-6f4c700aa104.jpg"></img> 
    <div class="card-body">
      <h5 class="card-title">No of rooms</h5>
      <p class="card-text"> <p>Price</p></p>
      <p class="card-text"><small class="text-muted">ServiceHotel</small></p>
    </div>
  </div>
  <div class="card">
    <img src = "https://www.planetware.com/wpimages/2020/01/best-underwater-hotels-muraka-conrad-maldives-rangali-island.jpg" height="330px"></img>
    <div class="card-body">
      <h5 class="card-title">No of rooms</h5>
      <p class="card-text">Price</p>
      <p class="card-text"><small class="text-muted">ServiceHotel</small></p>
    </div>
  </div>
  <div class="card">
    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUYTCUeWtpDdP57CCuBAZJmFeRPnENkE2qA&usqp=CAU"></img>
    <div class="card-body">
      <h5 class="card-title">No of rooms</h5>
      <p class="card-text">Price</p>
      <p class="card-text"><small class="text-muted">ServiceHotel</small></p>
    </div>
  </div>
</div>

</div>
</div>
<div className='text-center m-2'>
<button className='btn bg-black text-center text-danger p-2' onClick={googleSignup}>Signupwithgoogle</button>
</div>
</div>
  <div>

  {/* <!-- Button trigger modal --> */}

{/* <button  type="button" className="btn btn-primary text-center bg-black p-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
  ClickManagement
</button> */}


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">BookingNow</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Price</button>
        <button type="button" class="btn btn-primary">ServiceHotel</button>
      </div>
    </div>
  </div>
</div>
</div>
    {/* used grid system */}
  <div className='row'>
     <div className="col-md-3">
     <img src="https://www.ezeeabsolute.com/images/clients/Beaches%26DreamsResort.png" alt="" />
     </div>
     <div className="col-md-3">
     <img src="https://www.ezeeabsolute.com/images/clients/spamotel.png" alt="" />
     </div>
     <div className="col-md-3">
     <img src="https://www.ezeeabsolute.com/images/clients/Innotel.png" alt="" />
     </div>
     <div className="col-md-3">
     <img src="https://www.ezeeabsolute.com/images/clients/JasminMonumentHotel.png" alt="" />
     </div>

  </div>
      
</>
    )
}

export default Screen;
