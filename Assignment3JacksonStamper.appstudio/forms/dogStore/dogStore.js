/*
You want a program for a retail boutique that helps customers add items the store carries to a  'wish' list. 

Create a new form named 'dogStore'. 
Create a well laid out one-page app that uses controls for ALL input and output (no prompts, alerts). 
Adjust properties of the form and the controls to make it a nice color, lay things out evenly and well spaced, etc. 
The user must be able to see a list of all the products the store carries.
The user must be able to choose a product they want to add to their wish list. 
The program must be able to save item(s) to their wish list.  
Hint: an array?.....
The user must be able to see a list of all the products on their wish list. 
Program code must use array(s), events, event handler code, controls, control and form properties at a minimum. 
No prompts or alerts. 
Use global variables and function declarations when more than one event handler needs to use it. 
For example, the products array(s) should be global (declare at the top of the form). 
These are the products and prices the store 'Dogs R Us' carries. Store these in a/an array(s). 
Hint: you can use one array or two that are synchronized. 

Crocheted Dog Toy, $10.00
Slow Feeder Bowl, $14.00
Pawz Grey Treat Jar, $20.00
Blue Sweet Dreams Thermal Pajamas, $30.00
Checker Chewy Vuiton Bowl, #32.00
Red Heart Sweater Dress, $27.00
Velvet Hair Bow - Sun Kissed, $12.00
Into the Wild Leash, $27.00
*/


let itemList = ["Crocheted Dog Toy", "Slow Feeder Bowl", "Pawz Grey Treat Jar", "Blue Sweet Dream Thermal Pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let itemPrice = [10.00, 14.00, 20.00, 30.00, 32.00, 27.00, 12.00, 27.00]
let wishList = []

lstItems.value = itemList
lstPrice.value = itemPrice

btnSubmit.onclick=function(){
  let anItem = inptItem.value
  wishList.push(anItem)
  txtWishList.value=wishList
}
