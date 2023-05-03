function solution(cap, n, deliveries, pickups) {
  let sum = 0;
  //가장 거리가 먼 집부터 배달 또는 수거
  //가장 거리가 먼 집의 상자를 먼저 배달 또는 수거

  //deliveries, pickups 배열의 맨 뒤가 0이 아닐떄까지
  while (1) {
    if (
      deliveries[deliveries.length - 1] !== 0 &&
      pickups[pickups.length - 1] !== 0
    )
      break;

    if (deliveries[deliveries.length - 1] === 0) {
      deliveries.pop();
    }

    if (pickups[pickups.length - 1] === 0) {
      pickups.pop();
    }
  }

  // console.log(deliveries, pickups)

  while (1) {
    // console.log(1)
    //두 배열 모두 길이가 0 이면 종료
    if (deliveries.length === 0 && pickups.length === 0) break;

    //가장 긴 배열 확인
    let max = Math.max(deliveries.length, pickups.length);

    sum += max * 2;

    let a = cap;

    for (let i = deliveries.length - 1; i >= 0; i--) {
      let count = deliveries[i];

      if (a > count) {
        deliveries.pop();
        a -= count;
      } else if (a === count) {
        deliveries.pop();
        break;
      } else if (a < count) {
        deliveries[i] = count - a;
        break;
      }
    }

    while (1) {
      if (deliveries[deliveries.length - 1] === 0) {
        deliveries.pop();
      } else break;
    }
    // console.log('deliveries : ', deliveries);

    let b = cap;
    for (let i = pickups.length - 1; i >= 0; i--) {
      let count = pickups[i];

      if (b > count) {
        pickups.pop();
        b -= count;
      } else if (b === count) {
        pickups.pop();
        break;
      } else if (b < count) {
        pickups[i] = count - b;
        break;
      }
    }

    while (1) {
      if (pickups[pickups.length - 1] === 0) {
        pickups.pop();
      } else break;
    }
    // console.log('pickups : ', pickups);
  }
  return sum;
}

// testcase
// cap  n   deliveries          pickups         result
// 4    5   [1,0,3,1,2]       [0,3,0,4,0]        16
// 2    7   [1,0,2,0,1,0,2]   [0,2,0,1,0,2,0]    30

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
// solution(2,7,[1,0,2,0,1,0,2],[0,2,0,1,0,2,0])
