let isAccountLocked = false;
let userRole = "user";
/*
if(isAccountLocked)
{
    console.log('is account locked')
}
else {
    console.log('The account is not locked,Welcome..!!!')
}*/

if (isAccountLocked) {
  console.log("is account locked");
} else if (userRole === "admin") {
  console.log("Welcome, admin..:0");
} else {
  console.log("The account is not locked,Welcome..!!!");
}
//Challenge Area

/*

 <=32 it is freezing outside
 >=120 it is hotoutside
 else Go for it. It is pretty nice
*/

let temp = 45;

if (temp <= 32) {
  console.log("It is Freezing outside");
} else if (temp >= 120) {
  console.log("It is hot outside");
} else {
  console.log("Go for it... It is pretty nice. :)");
}
