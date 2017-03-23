import "less/Geoapp.less";
import { DHXApp } from "dhx-optimus";
import { TopView } from "./views/top";
class GeoApp extends DHXApp {
	isPal(num){
		const a = num.toString();
		const b = a.split("").reverse().join("");
		return a===b;
	}
	isPrime(num){
		// TODO add check for 1
		if((num===2||num===3)){
			return true;
		}
		return  !(num%2===0||num%3===0||num%5===0||num%7===0||num%9===0);
	}
	render() {
		this.show(TopView);
		const arr = [];
		for (let i = 10000;i.toString().length < 6;i++) {
			// var notPrime = false;
			// for (var k = 2;k <= i;k++) {
			// 	if (i % k === 0 && k !== i) {
			// 		notPrime = true;
			// 	}
			// }
			// if (notPrime === false) {
			// 	arr.push(i);
			// 	// if(this.isPal(i)){
			// 	// 	console.log(i);
			// 	// }
			// }
			if(this.isPrime(i)){
				arr.push(i);
			}
		}
		// console.log(arr);
		let a = 0;
		let res = "";
		for(let i=0;i<arr.length;i++){
			for(let k=0;k<arr.length;k++){
				console.log(arr[i]*arr[k])
				// if( this.isPal(arr[i]*arr[k]) ){
				// 	a++;

				// 	// console.log(arr[i],arr[k],arr[i]*arr[k]);
				// 	res+=`${arr[i]},${arr[k]},${arr[i]*arr[k]}\n`;
				// }
			}
		}
		// console.log(res)
		console.log("total"+a);

	}
}

(window as any).GeoApp = GeoApp;