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

#### [Resolve](https://github.com/rwaming/algorithm#:~:text=1%20hour%20ago-,7569.md,-7569%20%2D%20Place%20description)

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
