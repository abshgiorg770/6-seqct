//1
console.log(125+36);
//2
let studentName="გიორგი";
console.log(studentName);
//3
let examScore="89";
console.log(examScore);
//4
let firstName="გიორგი";
let lastName="აბშილავა";
console.log(firstName, lastName);
//5
let text="ასი";
let num="10";
console.log(text*num)//დავალება N5,პასუხია:NaN
//6
let city="ზუგდიდი";
city="თბილისი";
//7
const PI="3.14";
//PI="3.14159";//TypeError: Assignment to constant variable.
//8
let number=25;
if(number>20 && number<30){
    console.log("სწორია");
};
//9
fruits=['ვაშლი','ატამი','მსხალი','ყურძენი'];
console.log('ატამი');
//10
fruits=['ვაშლი','ატამი','ალუბალი','ყურძენი'];
console.log(fruits);
//11
navItems=['Home','About','Contact'];
console.log(navItems.join('|'));
//12
cities=['ქუთისი','ბათუმი','ფოთი'];
cities.pop('ფოთი');
console.log(cities);
//13
students=['ლუკა','მარიამი','დავითი'];
students.shift('ლუკა');
removedStudents=('ლუკა');
console.log(removedStudents);
//14
setA=['a','b'];
setB=['c','d'];
setC= setA.concat(setB);
console.log(setC);