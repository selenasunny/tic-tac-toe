class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],
                       [null,null,null],
                       [null,null,null]];
        this.player = 'x';
        
        

    }

    getCurrentPlayerSymbol() {
        //should return x or o        
         return this.player;    


    }

    nextTurn(rowIndex, columnIndex) {
        //should properly update class state (change current player, update marks storage etc.)
        
         if (this.matrix[rowIndex][columnIndex]==null) {this.matrix[rowIndex][columnIndex]=this.player;
           }
         else return;    
         if (this.player=='x') {this.player='o';  }
         else this.player='x';                 


        

    }

    isFinished() {
        //should return true if game is finished (e.g. there is a winner or it is a draw)
        if (this.getWinner()||this.isDraw()) {return true;}
        else return false;

    }

    getWinner() {
        //should return winner symbol (x or o) or null if there is no winner yet
        if (this.matrix[0][0]==this.matrix[0][1]&&this.matrix[0][1]==this.matrix[0][2]) {this.winner=this.matrix[0][0];}
    else if (this.matrix[1][0]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[1][2]){this.winner=this.matrix[1][0];}
    else if (this.matrix[2][0]==this.matrix[2][1]&&this.matrix[2][1]==this.matrix[2][2]){this.winner=this.matrix[2][0];}
    else if (this.matrix[0][0]==this.matrix[1][0]&&this.matrix[1][0]==this.matrix[2][0]){this.winner=this.matrix[0][0];}
    else if (this.matrix[0][1]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[2][1]){this.winner=this.matrix[0][1];}
    else if (this.matrix[0][2]==this.matrix[1][2]&&this.matrix[1][2]==this.matrix[2][2]){this.winner=this.matrix[0][2];}
    else if (this.matrix[0][0]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[2][2]){this.winner=this.matrix[0][0];}
    else if (this.matrix[2][0]==this.matrix[1][1]&&this.matrix[1][1]==this.matrix[0][2]){this.winner=this.matrix[2][0];}
                 
        return this.winner; 
        return null;
             
        
    }

    noMoreTurns() {
        //should return true if there is no more fields to place a x or o
        var count=0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.matrix[i][j]!=null) {
                    count ++;
                }
            }
        }
        if (count==9) {return true;}
        return false;
    }

    isDraw() {
       // should return true if there is no more turns and no winner
       var count=0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.matrix[i][j]!=null) {
                    count ++;
                }
            }
        }
        if (count==9&&!this.getWinner()) {return true;}
        return false;

    }

    getFieldValue(rowIndex, colIndex) {
        //should return matrix[row][col] value (if any) or null
       return this.matrix[rowIndex][colIndex];
       
        
    }
}

module.exports = TicTacToe;
