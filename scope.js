/*javascript  uses 
Lexical scope(Static scoping)

Global scope - defined outsode of all code blocks
Local Scope - defined insde a code block

In a scope yu can access variables defined in that scope, or in any parents/ancesctor scope

glocal scope(varOne)
  local scope(varTwo)
    local scope(varFour)

   local scope(varThree)

*/

let varOne = "varOne";

if (true)
 {
  console.log(varOne);

  let varTwo = "varTwo";
  console.log(varTwo);

  if(true)
    {  
    let varFour='varFour'
    }
}


if (true)
{
    varThree='varThree'
}


console.log(varTwo);
