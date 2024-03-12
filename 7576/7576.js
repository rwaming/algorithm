function solution(mn, ...tomatos) {
    const [m, n] = mn;

    // 시현 설명 :
    // Queue를 이용
    // 첫 토마토 1의 위치를 보고 인덱스x,y를 넣어야함
    // 0,1 -> 1,0 -> 1,1 .... 처럼 가로열먼저 체크. 체크하면 디큐(하는 척)
    // 우리가 배열로 Queue처럼 쓸건데, Pop하는데 오래걸리니까, queue한
    // cursor같은 변수를 만들어서, 처음엔 0
    // dequeue를 직접하지 않고, cursor++;를 올려서

    let queue = []; // 배열[x,y] 혹은 객체{x: m, y: n} 형식으로 값1 토마토의 [i]를 넣기
    let cursor = 0;
    let day = 0;
    let numberTomatos = 0;


    // 첫날
    // 순회하다가, 1을 발견하면, x에는 가로줄의 인덱스, y에는 토마토의 인덱스를 넣는다.
    // const flags = Array.from(tomatos, () => new Array(tomatos[0].length).fill(false));
    tomatos.forEach(function (row, y) {
        row.forEach(function (tomato, x) {
            if (tomato === 1) {
                const mature = {
                    x,
                    y,
                };
                queue.push(mature);
            }
            if (tomato === 0) {
                numberTomatos++;
            }
        });
    });
    queue.push({x: -1}); // day 구분용
    // 전체
    while (true) {
        // 하루 끝났는지 체크
        if (queue[cursor].x === -1) {
            cursor++;
            if (cursor === queue.length){
                break;
            }
            day++;
            queue.push({x: -1}); // day 구분용
            continue;
        }

        const { x, y } = queue[cursor]; // 익토의 x,y
        cursor++;

        // 토마토 상하좌우 익히기 + 그 토마토 줍줍
        const mx = [0, 0, -1, 1]; // 상하좌우 확인용x
        const my = [-1, 1, 0, 0]; // 상하좌우 확인용y
        for (let i = 0; i < 4; i++) {
            // 상하좌우 순회
            const raw_x = x + mx[i];
            const raw_y = y + my[i];
            // 인덱스가 0보다 작거나, 가로세로 길이보다 크거나, 안익은토마토가 아니면 취소
            if (raw_x < 0 || raw_y < 0 || raw_x >= m || raw_y >= n || tomatos[raw_y][raw_x] !== 0) {
                continue;
            }
            if (tomatos[raw_y][raw_x] === 0) {
                // 좌표가 raw_x, raw_y인 토마토가 0이면
                tomatos[raw_y][raw_x] = 1; // 1로 바꾸기
                const mature = {
                    x: raw_x,
                    y: raw_y,
                };
                queue.push(mature); // queue에 좌표정보로 넣기
                numberTomatos--;
            }
        }
    }
    console.log(numberTomatos === 0 ? day : -1);
}

// const filePath = "input.txt";
const filePath = "/dev/stdin";
const line = require("fs").readFileSync(filePath, "utf8");
const rows = line.trim().split("\n"); // row 나눔
const input = rows.map(function (row) {
    return row.split(" ").map(function (n) {
        // col 나눔
        return parseInt(n); // 모든 요소를 Number로 바꿈
    });
});
solution(...input);

// 내 생각
// while (tomatos 내 요소 내 요소의 모든 1의 상하좌우에 0이 존재하면 실행 (없으면 중단)) {
// tomatos 내 요소 내 요소의 모든 1의 상하좌우를 1로 변경한다.
// if(tomato 내 요소 내 요소가 1이라면)
// 좌토마토: 가로[토마토i -1]
// 우토마토: 가로[토마토i +1]
// 상토마토: tomatos[토마토가로i -1][토마토i]
// 상토마토: tomatos[토마토가로i +1][토마토i]
// days++;
// }
// if (tomatos의 요소 내 요소에 0이 없다) {
//     console.log(days);
// }
// else {
//     console.log(-1);
// }
