# algorithm

This is a repository which store data about algorithm and Backjoon questions I studied.

## List

### 7569

> 2024.03.12.Tue

A solution which estimates when tomatoes ripen.

#### Description

It is a progress version of **[7576](#7576)**.

#### Condition

The number of columns : M<br>
The number of rows : N<br>
The number of z-axis : H

#### Output

Same as **[7576](#7576)**.

#### Resolve

<details>
<summary><b>Try</b></sumamry>
<pre>
queue 이용하기
= 배열을 이용해서, 하나의 z안에 x열이 있게 하자.

시작 전
  토마토 박스 배열
    = 타겟임
  며칠짼지 파악할 변수
    = 반환용
  익은 토마토 좌표 모음
    = 1 좌표만 찾아서 함수 돌린다.
  주변을 익힌 토마토(쓸모없어진 1 갯수)
    = 이미 사용한 토마토는 없앤다. (queue스럽게)
  익토 좌표 모음 length-1랑 익힌 토마토랑 같아지면, 반복문 종료

  ? 배열 특징 - 여기에 대입하면서 찾는 게 더 빠를까? 그냥 하나하나 체크하는 게 더 빠를까?
      ? 9개라면
      배열 특징 살리기
        1. 첫 대입(탐색 최대 9, 대입 최대 9 = 최대 18)
        2. 탐색에 적은 시간 (1~5 이런 식)
        3. 추후 1로 바뀌면 하나씩 대입 (최대 8)
        4. 주변을 익힌 토마토만큼 i++
      그냥 진행
        1. 탐색 9 * 반복한만큼
  X 플래그
    이미 체크한 것은 체크하지 않는다.
    = 이미 체크한 것을 하지 않으려면,
      1. 체크했다고 대입
      2. 이게 체크한 건지 확인해야한다.
    이미 체크한 것을 체크하지 않으려고 위 과정을 거치는 것보다, 그냥 한번 더 체크하는 게 더 빠른 것 같다.

반복문 시작
  1은 주위에 0이 있는지 파악 후, 그것을 1로 바꾼다.
  = x, y, z의 -1, 1
    O 단, 대상의 i가 -1보다 크고, length와 같거나 크지 않을 경우에만 체크한다. <- 근데 이거 체크하면 하나당 2씩 더 해야하는 거 아님?
    X ? if를 빼고, !나 undifined같은 걸로 더 빨라질 수 있을까?
        = 이건 저것보다 미리 할 수가 없잖아. 똑같은 시기에 하거나 더 미리 해야 의의가 있음.

모든 토마토 체크시
  익힌 토마토 !== 0
    익힌 토마토 리셋 = 0
    하루 지남 = day +1
  else
    day 반환하고 반복문 끝내기
</pre>
</details>

### 7576 <a name="7576"></a>

A solution which estimates when tomatoes ripen.

#### Description

- There are raw or ripe tomatoes in a warehouse having columns and rows of a tomato farm.
- A ripe tomato can ripen one to four tomatoes lying on top, bottom, left, right sides of those in one day.
- But, if there are nothing on four sides of a ripe tomato, nothing happens.

#### Condition

The number of columns : M<br>
The number of rows : N

No tomato : -1<br>
Raw tomato : 0<br>
Ripe tomato : 1

2 <= M,N <= 1,000

1 <= tomato

#### Output

- **All tomatoes are ripened**
  : The number of days which it takes to ripen all tomatoes
- **All tomatoes are already ripened when you gave**
  : 0
- **There are raw tomatoes in a warehouse**
  : -1
