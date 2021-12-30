export const Player = (mark) => {
  let _wins = 0;
  let _name = mark;
  const getMark = () => mark;
  const addWin = () => {
    _wins += 1;
    return _wins;
  };
  const getWins = () => _wins;
  const setName = (name) => {
    _name = name;
    return _name;
  };
  return { getMark, addWin, setName };
};
