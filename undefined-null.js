//undefined for variables

let name

name='Yugandhar'
if(name===undefined)
{
    console.log('Please provide a Name')
}else{
    console.log(name)
}

//undefined for function arguments
//undefined as the function return default value


let square=function(num){
    console.log(num)

}

let result = square()

console.log(result)

//Null as assigned value

let age=24

age = null

console.log(age)
