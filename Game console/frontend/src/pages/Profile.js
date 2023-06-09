import React from 'react';

const Profile = () => {
  // const [name, setName] = useState("");
  // const [pic, setPic] = useState();

  // const userUpdate = useSelector((state) => state.userUpdate);
  // const { loading, error, success } = userUpdate;

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/");
  //   } else {
  //     setName(userInfo.username);
  //     setEmail(userInfo.email);
  //     setPic(userInfo.pic);
  //   }
  // }, [history, userInfo]);

  // const postDetails = (pics) => {
  //   setPicMessage(null);
  //   if (pics.type === "image/jpeg" || pics.type === "image/png") {
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset", "notezipper");
  //     data.append("cloud_name", "piyushproj");
  //     fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPic(data.url.toString());
  //         console.log(pic);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     return setPicMessage("Please Select an Image");
  //   }
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   dispatch(updateProfile({ name, email, password, pic }));
  // };

  return (
   <div className="padding">
      <div className="mx-auto col-sm-9 offset-sm-1 col-md-7 offset-md-2 col-lg-5 offset-lg-3">
        <div className="card border-0 shadow rounded-3 my-5">
           <div className="card-body little-profile text-center">
           <div className='img-size'>
            <div className='col d-flex justify-content-center'>
             <div className="img-fluid md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYqXjw6IR_opev4UADLjT8TPcLmWYQsx_YQ&usqp=CAU" alt="user" />
             </div>
             </div>
            </div>
             <h3 className="m-b-0">Name</h3>
             <p>Hello</p>
               <a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a><br />
               {/* <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a> */}
             <div className="row text-center m-t-20">
               {/* <div className="col-lg-4 col-md-4 m-t-20">
                 <h3 className="m-b-0 font-light">10434</h3>
                 <small>Articles</small>
               </div>
               <div className="col-lg-4 col-md-4 m-t-20">
                 <h3 className="m-b-0 font-light">434K</h3>
                 <small>Followers</small>
               </div>
               <div className="col-lg-4 col-md-4 m-t-20">
                 <h3 className="m-b-0 font-light">5454</h3>
                 <small>Following</small>
               </div> */}
             </div>
             <div className="py-4 px-4">
               <div className="d-flex align-items-center justify-content-between mb-3">
                 <h5 className="mb-0">My photos</h5>
                 <a href="#" className="btn btn-link text-muted">Show all</a>
               </div>
               <div className="row">
                 <div className="col-lg-6 mb-2 pr-lg-1">
                   <img src="https://media-cdn.bnn.in.th/274185/Sony-PlayStation-5-Two-DualSense-Bundle-5.jpg" alt="" className="img-fluid rounded shadow-sm" />
                 </div>
                 <div className="col-lg-6 mb-2 pl-lg-1">
                   <img src="https://media-cdn.bnn.in.th/265614/Sony-PlayStation-4-Slim-1TB-2-square_medium.jpg" alt="" className="img-fluid rounded shadow-sm" />
                 </div>
                 <div className="col-lg-6 pr-lg-1 mb-2">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/PlayStation-Vita-1101-FL.jpg/220px-PlayStation-Vita-1101-FL.jpg" alt="" className="img-fluid rounded shadow-sm" />
                 </div>
                 <div className="col-lg-6 pl-lg-1">
                   <img src="https://media.studio7thailand.com/21160/Switch-H-New-Nintendo-Switch-Console-Neon-Red-Blue-1-square_medium.jpg" alt="" className="img-fluid rounded shadow-sm" />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div><br/><br/><br/>
     </div>
  );
};

export default Profile;
{/* 
// import { useEffect }from 'react'
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// import { useAuthContext } from "../hooks/useAuthContext"

// // components
// import WorkoutDetails from '../components/WorkoutDetails'
// import WorkoutForm from '../components/WorkoutForm'

// const Profile = () => { */}
{/* //   const {workouts, dispatch} = useWorkoutsContext()
//   const {user} = useAuthContext()

//   useEffect(() => { */}
{/* //     const fetchWorkouts = async () => { 
//       const response = await fetch('/api/workouts', {
//         headers: {'Authorization': `Bearer ${user.token}`},
//       })
//       const json = await response.json()

//       if (response.ok) {
//         dispatch({type: 'SET_WORKOUTS', payload: json})
//       }
//     }

//     if (user) {
//       fetchWorkouts()
//     }
//   }, [dispatch, user])

//   return (
//     <div className="home">
//       <div className="workouts">
//         {workouts && workouts.map((workout) => (
//           <WorkoutDetails key={workout._id} workout={workout} />
//         ))}
//       </div>
//       <WorkoutForm />
//     </div>
//   )
// }

// export default Profile

{/* <div className="padding">
      <div className="mx-auto col-sm-9 offset-sm-1 col-md-7 offset-md-2 col-lg-5 offset-lg-3">
        <div className="card border-0 shadow rounded-3 my-5">
          {/* <img className="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" /> */}
    //       <div className="card-body little-profile text-center">
    //         <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" />
    //         </div>
    //         <h3 className="m-b-0">Brad Macullam</h3>
    //         <p>Web Designer &amp; Developer</p>
    //           <a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a><br />
    //           <a href="javascript:void(0)" class="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">Follow</a>
    //         <div className="row text-center m-t-20">
    //           <div className="col-lg-4 col-md-4 m-t-20">
    //             <h3 className="m-b-0 font-light">10434</h3>
    //             <small>Articles</small>
    //           </div>
    //           <div className="col-lg-4 col-md-4 m-t-20">
    //             <h3 className="m-b-0 font-light">434K</h3>
    //             <small>Followers</small>
    //           </div>
    //           <div className="col-lg-4 col-md-4 m-t-20">
    //             <h3 className="m-b-0 font-light">5454</h3>
    //             <small>Following</small>
    //           </div>
    //         </div>
    //         <div className="py-4 px-4">
    //           <div className="d-flex align-items-center justify-content-between mb-3">
    //             <h5 className="mb-0">Recent photos</h5>
    //             <a href="#" className="btn btn-link text-muted">Show all</a>
    //           </div>
    //           <div className="row">
    //             <div className="col-lg-6 mb-2 pr-lg-1">
    //               <img src="https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg" alt="" className="img-fluid rounded shadow-sm" />
    //             </div>
    //             <div className="col-lg-6 mb-2 pl-lg-1">
    //               <img src="https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg" alt="" className="img-fluid rounded shadow-sm" />
    //             </div>
    //             <div className="col-lg-6 pr-lg-1 mb-2">
    //               <img src="https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg" alt="" className="img-fluid rounded shadow-sm" />
    //             </div>
    //             <div className="col-lg-6 pl-lg-1">
    //               <img src="https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg" alt="" className="img-fluid rounded shadow-sm" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div> */}