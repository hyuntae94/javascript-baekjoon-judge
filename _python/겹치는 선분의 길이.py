def solution(lines):
    answer = []
    
    visited = [0] * 201
    
    for line in lines :
        line[0] += 100
        line[1] += 100
        
        for i in range(line[0], line[1]):
            if visited[i] == 0 : 
                visited[i] = 1
            elif visited[i] == 1 :
                visited[i] = 2
        
    return visited.count(2) 