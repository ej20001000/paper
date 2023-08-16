
import { useEffect, useState } from 'react';
import { getDigimonList } from './../api/DigimonAPI';
import DigimonItem from './../components/DigimonItem';
import boxStyle from './DigimonList.module.css';

function DigimonList() {

    const [page, setPage] = useState(0);
    const [resultList, setResultList] = useState([]);

    useEffect(() => {


        async function showList() {
            
            setResultList(await getDigimonList(page));
    
        }
    
        showList();
    }, [page])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    function prevPage() {
        if(page > 0) {
            setPage(page - 1);
            scrollToTop();
        } else alert('첫 페이지 입니다!');
    }

    function nextPage() {
        setPage(page + 1);
        scrollToTop();
    }



    return (
        <>
            <div className={boxStyle.DigimonBox}>
                {resultList.map(digimon => <DigimonItem key={digimon.id} digimon={digimon}/>)}
            </div>
            <div style={{marginTop: 50, textAlign: 'center'}}>
                <button className={boxStyle.pagingButton} onClick={prevPage}>이전</button>
                <button className={boxStyle.pagingButton} onClick={nextPage}>다음</button>
            </div>
        </>
    );
}

export default DigimonList;