function firstNonRepeatedChar(str) {
	
 // Write your code here
	let m = new Map();
	for(let i=0;i<str.length;i++){

		if(m.has(str[i])){
			m.set(str[i], m.get(str[i])+1)
		}else{
			m.set(str[i],1)
		}
	}

	for(let key of m.keys()){
		if(m.get(key)==1){
			return key;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
