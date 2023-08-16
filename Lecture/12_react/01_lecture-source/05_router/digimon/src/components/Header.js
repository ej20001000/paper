import headerStyle from './Header.module.css';

function Header() {
    return (
        <div className={headerStyle.header}>
            <img src="https://www.pngall.com/wp-content/uploads/2/Digimon-Logo-PNG-Free-Download.png" style={{width: '300px', height: '200px'}}/>
        </div>
    );
}

export default Header;