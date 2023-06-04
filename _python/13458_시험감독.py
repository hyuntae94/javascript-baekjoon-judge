import math

N = int(input())
A = list(map(int, input().split()));
B,C = map(int, input().split());

def solution() :
    
    answer = 0

    for i in range(N) :
        students = A[i]

        answer += 1

        restStudent = students - B;

        if restStudent > 0 :
            answer += math.ceil(restStudent / C);
    
    return answer

print(solution());