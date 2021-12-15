
// import { useDispatch } from "react-redux";

// const getAllHotels = () => async(dispatch) => {
//     try {
//         await dispatch(setLoading(true))
//         let arr  = [];

//         await db.collection("hotels").get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 let data = {
//                     id : doc.id,
//                     data : doc.data()
//                 }
//                 arr.push(data)
//                 console.log(doc.id, " => ", doc.data());
//             });
//             dispatch(setallHotels(arr))
//         })
        
//     }
//     catch (err) {
//         dispatch(setLoading(true))
//         dispatch(setErrors(err));
//         dispatch(setLoading(false))
//         console.log(err,"all users")

    