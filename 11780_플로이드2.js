const [[N], [M], ...input] = `5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//두 노드간의 최소 거리가 담긴 이중배열
const distArr = Array.from({ length: N+1 }, () => new Array(N+1).fill(Infinity));

//두 노드사이의 최단경로
const paths = Array.from({length:N+1}, () => new Array(N+1).fill(0));

const set = new Set();

const init = () => {
  for (const [from, to, cost] of input) {
    if (distArr[from][to] > cost) distArr[from][to] = cost;
  }
}
const Floyd_Warshall = () => {
  for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
      for (let j = 1; j <= N; j++) {
          if (i === j) continue;
          if (distArr[i][j] > distArr[i][k] + distArr[k][j]){
              distArr[i][j] = distArr[i][k] + distArr[k][j];
              paths[i][j]=k;
          }
      }
    }
  }
}

const find_route = (start,end) => {
	
	if (paths[start][end] === 0){
		set.add(start);
		set.add(end);
		return;
	}
	find_route(start, paths[start][end]);
	find_route(paths[start][end], end);
}


const solution = () =>  {
  init();
  Floyd_Warshall();
  let answer = '';

  for(let i=1; i<= N; i++){
    for(let j=1; j<= N; j++){
      if (distArr[i][j] === Infinity) answer += '0 ';
      else answer += `${distArr[i][j]} `;
    }

    answer += '\n';
  }
  for(let i=1; i<=N; i++){
    for(let j=1; j<=N; j++){
      if (distArr[i][j] === Infinity) answer += '0 ';
      else {
				set.clear();
				find_route(i,j);
				answer += `${set.size} `;
				const tmp = [...set];
				answer += tmp.join(' ');
      }
			answer += '\n';
    }
  }
	return answer;
}


console.log(solution());



