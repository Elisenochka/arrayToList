

/*дз */
var array = [1,2,3];
	var i = array.length-1;
	var list = {value:array[i],rest: null,
		toString: function(){
				return "value: " +this.value+" rest: "+this.rest;
		}
	};

function arrayToList(){
	for(i = array.length-2;i>=0;i--){
		var oldList = list;
		list ={value: array[i],
			rest: oldList
		}
	}
alert(array);
console.log(list);
}


function prepend(){
	var list = {   value: 1,   rest: 
		{     value: 2,     rest: 
			{       value: 3,       rest: 
				null     }   } };
var i = +prompt("enter value to be added",'');

list={value:i,rest:list};
console.log(list);
}

function nth(){
var list = {   value: 1,   rest: 
		{     value: 2,     rest: 
			{       value: 3,       rest: 
				null     }   } };
var pos = 3;
while(list){
	if(list.value == pos){
		var n = list.rest;
	}
	list=list.rest;
}
console.log(n);
}



function listToArray(){
	var list = {   value: 1,   rest: 
		{     value: 2,     rest: 
			{       value: 3,       rest: 
				null     }   } };
	var array =[];
	do{
		array.push(list.value);
		list = list.rest;
	}while(list!=null)
	console.log(array);

}

function enterArray(){
var i = +prompt("enter amount of elements",'');
var arr = [];
for(var j=0;j<=i-1;j++){
	arr.push(+prompt("enter number",''));
}
return arr;
}

function reverseArrayInPlace(){
	var arr = enterArray();
for(var k=0;k<Math.floor(arr.length/2);++k){
	arr[k]=arr[k]+arr[arr.length-1-k];
	arr[arr.length-1-k]=arr[k]-arr[arr.length-1-k];
	arr[k]=arr[k]-arr[arr.length-1-k];
}	
console.log(arr);
}


function alertObj(obj) { 
    var str = ""; 
    for(key in obj) { 
        str += key+": "+ obj[key]+"\r\n"; 
    } 
    alert(str); 
} 


function enterFields(){
	keys=[];
	var end ='';
	do{
		var f = prompt("enter a field",'');
		keys.push(f);
		end = prompt("procede y/n");
	}while (end!='n');
	return keys;
}

function pick(obj,keys){
obj = {};
//keys=['name','age'];
 keys = enterFields();
console.log(keys);
	var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}

	for(key in user){
		for(var j=0;j<=keys.length-1;++j){
			if (key == keys[j]){
				obj[key]=user[key];
				
			}
		}

	}
	console.log(obj);
}