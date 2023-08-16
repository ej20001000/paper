import ItemStyle from './MenuItem.module.css';
import { Link } from "react-router-dom";

function MenuItem({menu}) {
    return (
        <Link to={`/menu/${menu.menuCode}`}>
            <div className={ItemStyle.MenuItem}>
                <h3>이름 : {menu.menuName}</h3>
                <h4>가격 : {menu.menuPrice}</h4>
                <h4>종류 : {menu.categoryName}</h4>
            </div>
        </Link>
    );
}

export default MenuItem;