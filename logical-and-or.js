let temp = 55;

//logically And operator - True if both sides are True, otherwise false.

//logical Or operator - True if atleast one side is True. False Otherwise
if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log(" Do not go outside");
} else {
  console.log("ehh...what do u want..???");
}

//challenge area

/* There are two guests and depending upn the  guest the system prints
message to the hostess

1.Are both vegan? Only offer up vegan dishes
2.Atleast one vegan? Make sure to offer up some vegan options
3. Else, Offer up anything on the menu
*/

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer up vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Make sure to offer some vegan options");
} else {
  console.log("Offer up anything on the menu");
}
