const [[N],A,[B,C]] = `5
10 9 10 9 10
7 2`.toString().trim().split('\n').map(el => el.split(' ').map(Number));

    const solution = () => {

        let answer = 0;

        for(let i=0; i<N; i++){
            const students = A[i];

            //총감독관 1명은 무조건 필요
            answer += 1;

            const restStudent = students - B;

            if (restStudent > 0){
                answer += Math.ceil(restStudent / C);
            }
        }

        return answer;
    }

    console.log(solution())