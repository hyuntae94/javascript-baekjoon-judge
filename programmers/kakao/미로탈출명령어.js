function solution(n, m, x, y, r, c, k) {
    
    class Node{
        constructor(data){
            this.data = data;
            this.next = null;
        }
    }

    class Queue{
        constructor(){
            this.head = null;
            this.rear = null;
            this.length = 0;
        }

        isEmpty(){
            if (this.length === 0) return true;
            return false;
        }

        enqueue(data){
            const node = new Node(data);

            if (!this.head){
                this.head = node;
            } else {
                this.rear.next = node;
            }
            this.rear = node;
            this.length++;
        }

        dequeue(){
            if (!this.head) return -1;

            const data = this.head.data;
            this.head = this.head.next;
            this.length--;

            return data;
        }
    }    
        
    const dr = [1,0,0,-1];
    const dc = [0,-1,1,0];
    const dir = ['d','l','r','u'];
    const visited = Array.from( {length : n + 1}, () => Array.from( {length : m + 1}, () => new Array(k+1).fill(0)));
    const queue = new Queue();
    
    queue.enqueue([x,y,0,'']);
    visited[x][y][0] = 1;
    
    while(!queue.isEmpty()){
        
        const [curR, curC, step, str] = queue.dequeue();
    
        //반복 종료조건
        
        //이동횟수가 k이고 현재위치가 (r,c)인 경우
        if (curR === r && curC === c && step === k){
            return str;
        }
        
        for(let i=0; i<4; i++){
            
            const [nextR, nextC] = [curR + dr[i], curC + dc[i]];
            
            if (nextR < 1 || nextC < 1 || nextR > n || nextC > m) continue;
            
            if (!visited[nextR][nextC][step+1] && step+1 <= k){
                visited[nextR][nextC][step+1] = 1;
                queue.enqueue([ nextR, nextC, step + 1, str + dir[i] ]);                
            }
        }
    }
    //결과값의 길이가 0인 경우 "impossible" 반환
    return 'impossible';

}