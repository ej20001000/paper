import { Link } from "react-router-dom";
import itemStyle from './DigimonItem.module.css';

function DigimonItem({digimon}) {
    return (
        <Link to={`/digimon/${digimon.id}`}>
            <div className={itemStyle.DigimonItem}>
                <img src={digimon.image} style={{width: 300, height: 300}}/>
                <h2>ID : {digimon.id}</h2>
                <h2>{digimon.name}</h2>
            </div>
        </Link>
    );
}

export default DigimonItem;