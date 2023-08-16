import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//     return (
//         <div>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/mypage">마이페이지</Link></li>
//                 <li><Link to="/login">로그인</Link></li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;

function Navbar() {

    const activeStyle = {
        background: 'red'
    }

    return (
        <div>
            <ul>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle: undefined }>Home</NavLink></li>
                <li><NavLink to="/mypage" style={ ({isActive}) => isActive? activeStyle: undefined }>마이페이지</NavLink></li>
                <li><NavLink to="/login" style={ ({isActive}) => isActive? activeStyle: undefined }>로그인</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;