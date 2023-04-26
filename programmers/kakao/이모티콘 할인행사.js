function solution(users, emoticons) {
    // 1. 이모티콘 플러스 서비스 가입자를 최대한 늘리는 것.
    // 2. 이모티콘 판매액을 최대한 늘리는 것.
    // 3. 이모티콘마다 할인율은 다를 수 있으며, 할인율은 10%, 20%, 30%, 40% 중 하나로 설정됩니다.
    // 1번 목표가 우선이며, 2번 목표가 그 다음입니다.

    // 할인율이 높은 순에서 낮은 순으로
    // 할인율이 사용자의 기준치에 미달하면 구매조차 안하기 때문에 어느정도 높은 할인율을 적용시켜야 할 듯?
    
    // 일단 구매해야하기 때문에 할인율을 높게 잡고
    // 가격 이상이 되도록 할 것
    
    // 이모티콘이 최대 7개
    // 4 ^ 7 개 가지
    // 이모티콘마다 할인율을 적용하여 각각 구해야 하는가?
    
    //Map을 사용해서 10,20,30,40, 각각의 할인율이 적용된 가격을 미리 저장?
    
    const map = new Map();
    
    [10,20,30,40].forEach(percent => {

        const arr = [];
        const count = 1 - (percent / 100);
        
        emoticons.forEach(emoticon => {
            arr.push( (emoticon ) * count );
        })
        
        map.set(percent, arr);
    });
        // console.log(map);
    
    
    // 할인율 몇가지
    // [40,40,40,40],[40,40,40,30],[40,40,40,20] ...
    
    let plusJoiner = 0;
    let salePrice = 0;
    // console.log(plusJoiner, salePrice);
    
    const main = (percentList) => {
        // console.log(percentList)
        let joiner = 0;
        let price = 0;
        
        for(let i=0; i<users.length; i++){
            //[40,2900]
            const [percent, maxPrice] = users[i];
            let tmp = 0;
            for(let j=0; j<percentList.length; j++){
                //[40,40,40,40]
                if (percentList[j] < percent) continue;
                // console.log(map.get(percentList[j]))
                tmp += map.get(percentList[j])[j];
            }    
            if (tmp >= maxPrice) joiner += 1;
            else price += tmp;
        }
        // 가입자가 지금까지 가입자 수보다 작으면 종료
        // if (joiner < plusJoiner) return ;
            
            
        // 플러스가입자보다 많으면  무조건 변경
        if (joiner > plusJoiner){
            plusJoiner = joiner;
            salePrice = price;
        }
        // 플러스 가입자가 같다면 판매액이 높은 거 선택
        else if (joiner === plusJoiner){
            salePrice = Math.max(salePrice, price);
        }
    }
    
    const tmp = [40,30,20,10];
    const customCategory = (array, count) => {
        if (count === emoticons.length) {
            main(array);
            return ;
        }
        
        for(let i = 0; i < tmp.length; i++){
            array.push(tmp[i]);
            customCategory(array, ++count);
            --count;
            array.pop();
        }
    }
    customCategory([], 0);

    return [plusJoiner, salePrice]
}