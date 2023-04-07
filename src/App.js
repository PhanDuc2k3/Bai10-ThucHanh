//ThucHanh1
// import logo from './logo.svg';
// import './App.css';
// import Photo1 from './6103.png';
// import {base64Photo} from './Constaint';
// import Logo from './logo.svg'
// function App() {
//   return (
//     <div>
//       <div> Day la anh trong reactjs</div>
//       <img src={Photo1} width='200' height='100' className='img'/>
//       <div className='require-title'>Day la anh dung require</div>
//       <img src={require('./6103.png')} className='img'/>
//       <div className='require-title'>Day la dung link online</div>
//       <img src='https://i.imgur.com/0BJobQo.jpg' className='img'/>
//       <div className='require-title'>Day la dung anh b64</div>
//       <img src={base64Photo} className='img3'/>
//       <div className='require-title'>Day la anh dung sgv</div>
//       <img src={Logo} className='imp3'/>
//       </div> 
//   );
// }

// export default App;

//ThucHanh2
// import './style.module.css';
// import React from 'react';
// import { useState } from 'react';
// export default function App() {
//   const [numClicked, setNumClicked] = useState(0);
//   const handleClick = () => {
//     setNumClicked((current) => {
//       return current = current + 1;
//     });
//   };
//   return (
//     <div className="App">
//       <button onClick={handleClick}>Click here</button>
//       <h2>You clicked {numClicked} times</h2>
//     </div>
//   );
// }





//ThucHanh3
// import React from "react";
// import styles from "./app.module.css";

// export default function App() {

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Login</h1>
//       <form>
//         <p className={styles.fieldTitle}>Nhập email:</p>
//         <input
//           name="email"
//           type="text"
//           className={styles.input}
//         />
//         <p className={styles.fieldTitle}>Nhập password:</p>
//         <input
//           name="password"
//           type="password"
//           className={styles.input}
//         />
//         <br />
//         <label>
//           <input
//             className={styles.checkbox}
//             name="isRead"
//             type="checkbox" /> I read and accept the privacy policy:
//         </label>

//         <button className={styles.btnSubmit}>Submit nè</button>
//       </form>
//     </div>
//   );
// }


// import React from "react";

// export default function App() {

//   return (
//     <div className="p-4">
//       <h1 className="text-blue-500 font-bold text-4xl">Login</h1>
//       <form>
//         <p className="mt-8">Nhập email:</p>
//         <input
//           className="border rounded border-blue-600 h-9 w-full mt-2"
//           name="email"
//           type="text"
//         />
//         <p className="mt-4">Nhập password:</p>
//         <input
//           className="border rounded border-blue-600 h-9 w-full mt-2"
//           name="password"
//           type="password"
//         />
//         <br />
//         <label>
//           <input
//             className="mt-4"
//             name="isRead"
//             type="checkbox" /> I read and accept the privacy policy
//         </label>
//         <br />
//         <button className="mt-8 h-9 border rounded w-40 bg-blue-400 text-white font-bold">
//           Submit nè
//         </button>
//       </form>
//     </div>
//   );
// }