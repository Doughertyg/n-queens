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
  var solution = undefined; //fixme

  var arr = function(n) {
    var result = [];

    for (var i = 0; i < n; i++) {
      var row = [];

      for (var j = 0; j < n; j++) {
      
        if (i === j) {
          row.push(1);      

        } else {
          row.push(0);
        }    
      }
      result.push(row);
    }

    return result;
  };

  solution = arr(n);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;

  for (var i = n; i > 0; i--) {
    solutionCount *= i;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  var board = new Board({n: n});

  var recursive = function(rowIndex, board) {
    //base case
    if (rowIndex === board.get('n')) {
      return true;
    }
    
    //recursive cases
    for (var i = 0; i < board.get('n'); i++) {
      var colIndex = i;

      board.togglePiece(rowIndex, colIndex);
      if (!board.hasAnyQueenConflictsOn(rowIndex, colIndex)) {
        if (recursive(rowIndex + 1, board)) {
          return true;
        }    
      }
      
      board.togglePiece(rowIndex, colIndex);
    }

    return false;
  };

  
  recursive(0, board);
  for (var i = 0; i < n; i++) {
    solution.push(board.get(i));
  }
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var recursive = function(rowIndex, board) {
    //base case
    if (rowIndex === board.get('n')) {
      solutionCount++;
      return true;
    }
    
    //recursive cases
    for (var i = 0; i < board.get('n'); i++) {
      var colIndex = i;

      board.togglePiece(rowIndex, colIndex);
      if (!board.hasAnyQueenConflictsOn(rowIndex, colIndex)) {
        recursive(rowIndex + 1, board);   
      }
      
      board.togglePiece(rowIndex, colIndex);
    }

    return false;
  };

  
  recursive(0, board);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
