const score = new Map();
const jipo = new Map();
score.set(1, 3);
score.set(2, 2);
score.set(3, 1);
score.set(4, 0);
score.set(5, 1);
score.set(6, 2);
score.set(7, 3);

jipo.set("R", 0);
jipo.set("T", 0);
jipo.set("C", 0);
jipo.set("F", 0);
jipo.set("J", 0);
jipo.set("M", 0);
jipo.set("A", 0);
jipo.set("N", 0);

function solution(survey, choices) {
  survey.forEach((types, idx) => {
    let first = types[0];
    let second = types[1];
    if (choices[idx] < 4) {
      let tmp = jipo.get(first);
      tmp += score.get(choices[idx]);
      jipo.set(first, tmp);
    } else {
      let tmp = jipo.get(second);
      tmp += score.get(choices[idx]);
      jipo.set(second, tmp);
    }
  });
  const arrJipo = [...jipo];
  let answer = "";
  for (let i = 0; i < 8; i += 2) {
    const [alpha1, count1] = arrJipo[i];
    const [alpha2, count2] = arrJipo[i + 1];

    if (count1 >= count2) answer += alpha1;
    else answer += alpha2;
  }
  return answer;
}
