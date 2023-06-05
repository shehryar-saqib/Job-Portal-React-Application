import { BrowserRouter, Link,useLocation } from 'react-router-dom';
import {HomePage} from './HomePage'
import close from "./images/icon-remove.svg";
import logo from "./images/job.png";



export const Header = () => {

    const location = useLocation();

    
    if (location.pathname === '/' || location.pathname === '/register') {
        return (
        <header>
        
            
            <nav>
            <div className="header-content">
            <img src={logo} alt="Jobbies Logo" className="logo1" /> {/* Add the logo */}
            <h1 style={{ margin: 'auto' }}>Jobbies</h1>
            </div>
            </nav>
     
        </header>
        );
    }

    return(
    
        <header>
            <nav>
            <div className="header-content">
          <img src={logo} alt="Jobbies Logo" className="logo1" /> {/* Use the imported logo as the src */}
          <h1 className="jobbies">Jobbies</h1>
        </div>
                <ul>
       
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">Logout</Link></li>

      
                </ul>
            </nav>
        </header>
    )

}



// export const Header = ({ keywords, removeKeywords, clearAll }) => {
//     return(
//         <header>
//             <nav>
//                 <h1>Jobbies</h1>
//                 <ul>
//                     <BrowserRouter>
//                     <li><Link to="/register">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/register">SignUp</Link></li>
//                     </BrowserRouter>
//                 </ul>
//             </nav>
//       <div className="header-container">
//         <ul>
//         {keywords?.map((key, id) => {
//             return(
//             <li key={id}>
//               {key}
//               <button className="close" onClick={() => removeKeywords(key)}>
//                 <img src={close} alt="" />
//               </button>
//             </li>
//             );
//         })}
//         <a href="/#" onClick={() => clearAll()}>
//           Clear
//         </a>
//       </ul>
//     </div>
//     </header>  
//     );
// }


