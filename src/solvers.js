/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var len = n;
  // if(n === 2) {
  //   debugger;
  // }
  var newBoard = new Board({n : len});

  console.log(`n is ${n}`);
  console.log(newBoard); 

  validationAndPlace = function(colIndex, board) {
    if(colIndex >= n) return true;
    for(var rowIndex = 0; rowIndex < n; rowIndex++) {
      var currRow = board.get(rowIndex);
      currRow[colIndex] = 1;
      board.set(rowIndex, currRow);
      if(!board.hasRowConflictAt(rowIndex)) {
        if(validationAndPlace(colIndex + 1, board)) {
          return true;
        }   
      }
      currRow[colIndex] = 0;
      board.set(rowIndex, currRow);
    }
    return false;
  }

  if(n === 1) {
    solution = [[1]];
  } else {
    validationAndPlace(0, newBoard);

    for(var i = 0; i < n; i++) {
      solution.push(newBoard.get(i));
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
