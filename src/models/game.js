import { Player } from "./player";

export const Game = (function () {
  const _players = [Player("X"), Player("O")];
  let _activePlayerIndex = 0;
  let _gameboard = null;
  let _gameOver = false;

  const getPlayers = () => _players;
  const activePlayer = () => _players[_activePlayerIndex];
  const setGameboard = (gameboard) => {
    _gameboard = gameboard;
  };
  const _cycleActivePlayer = () => {
    _activePlayerIndex = (_activePlayerIndex + 1) % 2;
  };

  return { getPlayers, activePlayer, setGameboard };
})();
