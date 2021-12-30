export const Gameboard = (function () {
  const _board = ["", "", "", "", "", "", "", "", ""];

  const getSquares = () => _board;
  const resetBoard = () => {
    _board.forEach((s) => (s = ""));
  };
  const setSquareMark = (squareId, mark) => {
    _board[squareId - 1] = mark;
  };
  const boardFull = () => _board.every((s) => s !== "");

  const playerWins = () => {
    const threeEqual = (s1, s2, s3) => {
      return s1 === s2 && s2 === s3 && s1 !== "";
    };

    return (
      threeEqual(_board[0], _board[1], _board[2]) ||
      threeEqual(_board[3], _board[4], _board[5]) ||
      threeEqual(_board[6], _board[7], _board[8]) ||
      threeEqual(_board[0], _board[3], _board[6]) ||
      threeEqual(_board[1], _board[4], _board[7]) ||
      threeEqual(_board[2], _board[5], _board[8]) ||
      threeEqual(_board[0], _board[4], _board[8]) ||
      threeEqual(_board[6], _board[4], _board[2])
    );
  };

  return { getSquares, resetBoard, setSquareMark, boardFull, playerWins };
})();
