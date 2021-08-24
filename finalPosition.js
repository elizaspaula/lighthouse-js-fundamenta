const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

// [-1, 4] [x,y]
// [east,north north, north , nort]

const finalPosition = function (moves) {
  let x = 0;
  let y = 0;

  for (const position of moves) {
    console.log(position);
    if (position === "north") {
      y++;
    } else if (position == "south") {
      y--;
    } else if (position == "east") {
      x++;
    } else if (position == "west") {
      x--;
    }
  }
  return [x, y];
};
console.log(finalPosition(moves));
