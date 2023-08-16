import { useEffect, useState } from 'react';
import boxStyle from './Menu.module.css';
import { useSearchParams } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { searchMenu } from '../api/MenuAPIs';

function MenuSearchResult() {
    
    // console.log(useSearchParams()[0].get('menuName'));
    const [searchParam] = useSearchParams();
    const searchMenuName = searchParam.get('menuName');
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));

        }, []
    );

    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    )
}

export default MenuSearchResult;