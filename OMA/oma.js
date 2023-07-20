document.addEventListener('DOMContentLoaded', (event) => {

    for (var i = 0; i < boardList.length; ++i) {
        boardList.item(i).addEventListener("click", putOma, false);
    }

    for (var i = 0; i < omaButtons.length; ++i) {
        omaButtons.item(i).addEventListener("click", selectOma, false);
    }
})

function putOma() {
    var span = this.getElementsByTagName('span')[0];

    if (whichOma == ''){
        return;
    }       
     
    console.log(this.id, whichOma,whichColor, blackP[whichOma]);

    //보드 변수에 놓은 값넣기
    board[this.id - 1] = whichColor + whichOma

    //삼각형 이상해서 예외처리
    if(whichOma == 'a'){
        span.className = whichOma;

        if(whichColor == 'w'){
            span.style.borderBottom ='115px solid white';
        } else{
            span.style.borderBottom ='115px solid black';
        } 
            
    } else{
        span.style.borderBottom = null;
        //보드에 클래스값 추가
        span.className = whichColor + ' ' + whichOma;
    }



    // 흰색 검은색 번갈아가게 하기
    if (whichColor == 'b'){
        blackP[whichOma] -= 1;
        whichColor = 'w';
    }
    else{
        whiteP[whichOma] -= 1;
        whichColor = 'b';
    }
    // oma 선택  초기화
    whichOma = '';
    
}

function selectOma() {
    whichOma = this.id;

    if(whichColor == 'w'){
        if(whiteP[whichOma] == 0)
            whichOma = '';
    } else if(whichColor == 'b'){
        if(blackP[whichOma] == 0)
            whichOma = '';
    }
}

//플레이어 기물 나눠줌
var blackP = { 'o': 3, 'm': 3, 'a': 3 };
var whiteP = { 'o': 3, 'm': 3, 'a': 3 };

//보드 만들기
var board = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
var isEnd = false;
var turns = 0;
var whichColor = 'w';
var boardList = document.getElementsByClassName('content');
var omaButtons = document.getElementsByClassName('omaButton');
var whichOma = '';

// console.log(boardList.item(0));

// // startGame()