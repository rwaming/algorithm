function solution(mnh, ...textArr) {
  const [m, n, h] = mnh.split(/\s/);
  const box = [];

  // put tomato in box
  const tomatoBoxM = textArr.map((text) => text.split(/\s/));
  tomatoBoxM.forEach((v, i) => {});
}

const filePath = '/Users/rwam/project/test/7569/input.txt';
// const filePath = "/dev/stdin";
const file = require('fs').readFileSync(filePath, 'utf8');
const input = file.split('\n');

solution(...input);
