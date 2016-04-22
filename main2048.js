var board = new Array();
var score = 0;

$(document).ready(() => {
  newgame();
});

function newgame() {
  // 初始化棋盘格
  init();
  // 在随机两个格子生成数字
}

function init() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let gridCell = $('#grid-cell-' + i + '-' + j);
      gridCell.css('top', getPosTop(i, j));
      gridCell.css('left', getPosLeft(i, j));
    }
  }
  
  for (let i = 0; i < 4; i++) {
    board[i] = new Array();
    for (let j = 0; j < 4; j++) {
      board[i][j] = 0;
    }
  }
  
  updateBoardView();
}

function updateBoardView() {
  $('.number-cell').remove();
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      $('#grid-container').append('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
      
      let theNumberCell = $('#number-cell-'+i+'-'+j);
      
      if (board[i][j] === 0) {
        theNumberCell.css('width', 0);
        theNumberCell.css('height', 0);
        theNumberCell.css('top', getPosTop(i, j) + 50);
        theNumberCell.css('left', getPosLeft(i, j) + 50);
      } else {
        theNumberCell.css('width', 100);
        theNumberCell.css('height', 100);
        theNumberCell.css('top', getPosTop(i, j));
        theNumberCell.css('left', getPosLeft(i, j));
      }
    }
  }
}
