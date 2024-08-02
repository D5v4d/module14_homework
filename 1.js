const parser = new DOMParser();
const ObjArr = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`


const xmlDOM = parser.parseFromString(ObjArr, "text/xml");
const student = xmlDOM.querySelectorAll("student");

const List = [];

student.forEach(elem => {
    const name = elem.querySelector("name");
    const first = elem.querySelector("first");
    const second = elem.querySelector("second");
    const age = elem.querySelector("age");
    const prof = elem.querySelector("prof");
    const leng = name.getAttribute('lang');

    const result = {
        name: first.textContent + " " + second.textContent,
        age: Number(age.textContent),
        prof: prof.textContent,
        leng: leng
    };
    List.push(result);
})
console.log(List);
