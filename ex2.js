/**
 * Created by _Ikari_ on 26.01.2016.
 */
var a = prompt("Введите римское число");

console.log(a);
var arr = [];
arr = a.split("");
console.log(arr);

var arab = [];
for(var i=0; i<arr.length;i++){
    if(arr[i]=="Z"){
        arab.push(2000);

    }else
    if(arr[i]=="M"){
        arab.push(1000);

    }else
    if(arr[i]=="D"){
        arab.push(500);

    }else
    if(arr[i]=="C"){
        arab.push(100);

    }else
    if(arr[i]=="L"){
        arab.push(50);

    }else
    if(arr[i]=="X"){
        arab.push(10);

    }else
    if(arr[i]=="V"){
        arab.push(5);

    }else
    if(arr[i]=="I"){
        arab.push(1);

    }
}
var answ = 0;
console.log(arab[7]);
for(var k = 0; k<arab.length; k++){
    answ = answ + arab[k];
    console.log(k);
}
console.log(answ);
alert("Ответ "+answ);
//console.log(arab);


