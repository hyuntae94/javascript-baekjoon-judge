class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    //삽입한 요소의 현재 인덱스 저장
    let idx = this.values.length - 1;
    //idx는 element의 인덱스이며, idx가 0이 되기 전까지 반복문을 돌린다.
    //인덱스 0이 되면 삽입한 요소가 이미 root자리에 도착했다는 것이므로 더 올라갈 곳이 없다.
    while (idx > 0) {
      //삽입한 요소와 비교해야 하는 부모 요소를 찾아서 변수로 할당한다.
      //위에서 살펴본 자식의 위치로 부모 위치 찾는 공식 Math.floor((n-1)/2)을 사용한다.
      const parseInt = Math.floor((idx - 1) / 2);
      //삽입한 요소보다 비교하려는 부모요소가 크거나같으면 반복문 종료
      if (this.values[parseInt] >= this.values[idx]) break;
      //삽입한 요소보다 비교하려는 부모요소가 작으면 자리를 서로 바꿔준다.
      let tmp = this.values[parseInt];
      this.values[parseInt] = this.values[idx];
      this.values[idx] = tmp;
      //자리를 바꿨으니 인덱스도 서로 바꾼다.
      idx = parseInt;
    }
  }
  extractMax() {
    //이진 힙의 max와 end변수 정의
    const max = this.values[0];
    const end = this.values.pop();

    //pop한 후에 남은 요소가 있다면
    if (this.values.length > 0) {
      //root자리에 가장 최근에 삽입됐던 end를 넣고
      this.values[0] = end;
      //root자리에 올라간 end의 sinkDown()을 시작한다.
      this.sinkDown();
    }
    //pop한 후에 남은 요소가 없으면 바로 return 하고 종료한다.
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    while (true) {
      //sinkDown할 element 변수 설정
      const element = this.values[idx];
      //부모 위치로부터 자식 위치 찾는 공식을 이용해서 left,right 자식의 위치를 구한다.
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild = null;
      let rightChild = null;
      let swap = null;
      //찾은 자식의 인덱스가 실제로 존재할 때에만, 그 값을 변수로 할당한다.
      //먼저 leftChild변수가 element와 비교해서 더 크면, 그 인덱스를 swap에 할당한다.
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      //rightChild도 위에서 leftChild에게 한 것처럼, 비교하고 swap에 할당하려고 하는데,
      //leftChildIdx가 존재하지 않아서 swap이 여전히 null일 수 있으므로
      //그러한 경우를 고려하여 조건을 추가한다.
      //swap이 null이고 rightChild가 element보다 크거나,
      //swap에 값(leftChildIdx)이 있고 rightChild가 leftChild보다 큰 경우에,
      //그 인덱스를 swap에 할당한다.
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      //만약 여전히 swap이 null이면 element는 이미 제 자리에 있는 것이므로 반복문을 종료
      if (swap === null) break;

      //그렇지 않고 swap값이 있다면, element와 swap할 대상의 자리를 서로 바꾼다.
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];

      //while문의 다음 턴에서 사용할 element의 새 인덱스를 swap으로 재할당해서 최신화해준다.
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(10);
heap.insert(20);
heap.insert(33);
heap.insert(50);
heap.insert(47);
heap.insert(12);
heap.insert(38);

console.log(heap.extractMax());
console.log(heap.values);

console.log(heap.extractMax());
console.log(heap.values);
