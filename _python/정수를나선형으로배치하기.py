def solution(n):
    
    # n*n행렬을 생성해준다  
    array = [ [0] * n for _ in range(n)]
    dr = 0
    dc = 0
    value = 1
    array[dr][dc] = value
    
    # (0,0)부터 시작해서 시계방향으로 돈다(우,하,좌,상)
    # 단, 벽에 부딪히거나 이미 방문했다면 방향을 바꿔진행한다.
    # 우로 진행 => 열 + 1
    # 좌로 진행 => 열 - 1
    # 상으로 진행 => 행 - 1
    # 하로 진행 => 행 + 1
    curDir = "right"

    while True :
        array[dr][dc] = value
        # 탈출조건    
        if value == n*n :
            break

        if curDir == "right":
            # todo
            nextCol = dc + 1
            if nextCol >= n or array[dr][nextCol] != 0:
                curDir = 'down'
                dr += 1
            else : dc += 1
        elif curDir == "down":
            # todo
            nextRow = dr + 1
            if nextRow >= n or array[nextRow][dc]  != 0:
                curDir = 'left'
                dc -= 1
            else : dr += 1
        elif curDir == "left":
            # todo
            nextCol = dc - 1
            if nextCol < 0 or array[dr][nextCol] != 0 :
                curDir = 'up'
                dr -= 1;
            else : dc -= 1
        elif curDir == "up":
            # todo
            nextRow = dr - 1
            if nextRow < 0 or array[nextRow][dc] !=0 :
                curDir = 'right'
                dc += 1
            else : dr -= 1
        value += 1
    
    return array
    
    