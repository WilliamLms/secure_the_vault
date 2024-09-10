/*
1. Pseudocode
End Goal to display these three numbers:
10 - 40 - 39
Twist: must use three variables with differing operators to produce 
the numbers
Display as alert.

Pseudocode Likely look like

declare variableTEN = a + b
declare variableFOURTY = c - d
declare variableTHIRTYNINE = e * f

output ($variableTEN + " - " + $variableFOURTY + " - " + $variableTHIRTYNINE)

*/
//2
// Creating the string to store the prompt to show the user
const userPrompt =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination";

//3
//Declaring const variable based on different operator operations to be used in output
//lock combination of the first number (10)
  const lockNum1 = 5 + 5

//lock combination of the second number (40)
  const lockNum2 = 60 - 20

//lock combination of the third number (39)
  const lockNum3 = 13 * 3

///5
//Create an output so users can see the combination results
  alert(
    `${userPrompt} ${lockNum1} - ${lockNum2} - ${lockNum3}`
)



