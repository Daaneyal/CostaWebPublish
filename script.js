// using the createElement function to upload an image to use as my logo.
let newLogo = document.createElement("img");
newLogo.src = "Costalogo.png"
newLogo.style.position = "absolute";
newLogo.style.top = "35px";
newLogo.style.width = "203px";
newLogo.style.left = "245px";
document.body.appendChild(newLogo);

// this is the code i used to create the navbar headers. I also used a bit of HTML. The getElementById function allowed me to get elements from html. 
var navbar = document.getElementById("myNavbar");
var headers = ["Our coffees", "Our menu", "Costa club", "Order online", "Sustainability", "Gift cards"];


var textElement = document.getElementById("whatsnew");
textElement.style.color = "#6d1f37";
textElement.style.fontFamily = "MagallanesEssential","Sans-serif";
textElement.style.fontSize = "28px";
textElement.style.fontWeight = "bold";
textElement.style.position = "relative";
textElement.style.top = "-725px";
textElement.style.left = "800px";

// created sections for the middle of the page.I created three seperate sections which included images, teexts and buttons.
let mysec = document.createElement("section");
mysec.id = "MidImg";
mysec.style.backgroundColor = "#f39092";
mysec.style.height = "600px";
mysec.style.width = "330px";
document.body.appendChild(mysec);

// this is the image i wanted in my first section. I used "mysec.appendChild(img1)" to be able to place this within the section. I had to call the section by using "mysec" and then in the brackets call my image to allow the image to be within the section i wanted.
let img1 = document.createElement("img");
img1.src = "CostaBean.png";
img1.style.height = "250px";
img1.style.width = "330px";
mysec.appendChild(img1);

// this is how i was able to put the text within the section  wanted.
var text1 = document.createElement("p");
let bean1 = "Our improved";
text1.innerHTML = bean1;
text1.style.position = "relative";
text1.style.left = "10px";
text1.style.top = "-25px";
text1.style.fontSize = "28px";
text1.style.fontWeight = "bold";
// this line of code is what links the text that i created to the section
document.getElementById("MidImg").appendChild(text1)


var text2 = document.createElement("a");
let bean2 = "Signature Blend";
text2.innerHTML = bean2;
text2.style.position = "relative";
text2.style.left = "35px";
text2.style.fontSize = "28px";
text2.style.top = "-50px";
text2.style.fontWeight = "bold";
document.getElementById("MidImg").appendChild(text2)

var text3 = document.createElement("t3");
let bean3 ="We’ve improved the taste of our" + "<br>" + "famous Signature Blend. How?" +"<br>" + "By roasting our beans for longer" + "<br>" + "for a more intense flavour. It's" + "<br>" + "smoother, bolder, tastier, better.";
text3.innerHTML = bean3;
text3.style.position = "relative";
text3.style.left = "5px";
text3.style.fontSize = "18px";
text3.style.top = "10px";
text3.style.textAlign = "center";
text3.style.color = "black";
document.getElementById("MidImg").appendChild(text3)

// created the first button within javascript 
var button1 = document.createElement("Button1");
// given an id so can be targeted more specifically within css
button1.id = "Button1";
button1.innerText = "Find a Costa";
button1.style.top = "520px";
button1.style.left = "75px";
// "mysec" been given so it places the button within this section
mysec.appendChild(button1);


// section 2 where i repeated the same steps for the first section. Used createElement function to create the section and gave it a background color to set it how i wanted. It was also given an ID so i could target this within CSS.
let section2 = document.createElement("lunch");
section2.id = "Lunch";
section2.style.backgroundColor = "#cfa8ca";
document.body.appendChild(section2);

let img2 = document.createElement("img");
img2.src = "MiddlePic.png";
img2.style.top = "10px";
img2.style.height = "250px";
img2.style.width = "330px";
section2.appendChild(img2);

var lunchText = document.createElement("p");
let lunch1 = "Get them while";
lunchText.innerHTML = lunch1;
lunchText.style.position = "relative";
lunchText.style.left = "2px";
lunchText.style.top =  "-22px";
lunchText.style.fontFamily = "Sans-serif";
lunchText.style.fontSize = "28px";
lunchText.style.color = "#6d1f37";
lunchText.style.fontWeight = "bold";
lunchText.style.fontFamily = "MagallanesEssential","Sans-serif";
document.getElementById("Lunch").appendChild(lunchText)


var lunchText2 = document.createElement("p");
let lunch2 = "they're hot";
lunchText2.innerHTML = lunch2;
lunchText2.style.position = "relative";
lunchText2.style.left = "5px";
lunchText2.style.top =  "-50px";
lunchText2.style.fontFamily = "Sans-serif";
lunchText2.style.fontSize = "28px";
lunchText2.style.color = "#6d1f37";
lunchText2.style.fontWeight = "bold";
lunchText2.style.fontFamily = "MagallanesEssential","Sans-serif";
document.getElementById("Lunch").appendChild(lunchText2)



var lunchText3 = document.createElement("l3");
let lunch3 ="Stay warm this winter wiht our" + "<br>" + "tasty hot food range. Theres" + "<br>" + "loads of options and, when" + "<br>" + "paired with your faveourite coffee," + "<br>" + "what could be toastier?";
lunchText3.innerHTML = lunch3;
lunchText3.style.position = "relative";
lunchText3.style.left = "5px";
lunchText3.style.fontSize = "18px";
lunchText3.style.top = "-40px";
lunchText3.style.textAlign = "center";
lunchText3.style.fontFamily = "sans-serif";
lunchText3.style.color = "black";
lunchText3.style.alignItems = "center";
lunchText3.style.fontFamily = "MagallanesEssential","Sans-serif";
document.getElementById("Lunch").appendChild(lunchText3)

// this was a button for the second section.All buttons recieved an ID so i could target them further within CSS
var button2 = document.createElement("Button2");
button2.id = "Button2";
button2.innerText = "See our menu";
button2.style.bottom = "20px";
button2.style.left = "70px";
button2.style.fontFamily = "sans-serif";
button2.style.fontWeight = "bold";
button2.style.fontFamily = "MagallanesEssential","Sans-serif";
// this is the code to allow the button to be within the correct section 
section2.appendChild(button2);

// Third section. Again it was given an ID so it could be targeted within the CSS.
let section3 = document.createElement("routine");
section3.id = "routine";
section3.style.backgroundColor = "#b0ddf5";
document.body.appendChild(section3);

let img3 = document.createElement("img");
img3.src = "CupPic.png";
img3.style.height = "250px";
img3.style.width = "330px";
img3.style.left = "-30px";
routine.appendChild(img3);


var RoutineTxt = document.createElement("z");
let Thirdbox = "Click into a new";
RoutineTxt.innerHTML = Thirdbox;
RoutineTxt.style.position = "relative";
RoutineTxt.style.left = "50px";
RoutineTxt.style.top =  "8px";
RoutineTxt.style.fontFamily = "Sans-serif";
RoutineTxt.style.fontSize = "28px";
RoutineTxt.style.color = "#6d1f37";
RoutineTxt.style.fontWeight = "bold";
// used the text which was imported from the internet. This has been combined with sans serif font
RoutineTxt.style.fontFamily = "MagallanesEssential","Sans-serif";
document.getElementById("routine").appendChild(RoutineTxt)


var RoutineTxt2 = document.createElement("r1");
let Thirdbox2 = "routine";
RoutineTxt2.innerHTML = Thirdbox2;
RoutineTxt2.style.position = "relative";
RoutineTxt2.style.left = "-95px";
RoutineTxt2.style.top =  "40px";
RoutineTxt2.style.fontFamily = "Sans-serif";
RoutineTxt2.style.fontSize = "28px";
RoutineTxt2.style.color = "#6d1f37";
RoutineTxt2.style.fontWeight = "bold";
RoutineTxt2.style.fontFamily = "MagallanesEssential","Sans-serif";
document.getElementById("routine").appendChild(RoutineTxt2)


var RoutineTxt3 = document.createElement("l3");
let Thirdbox3 =" Be on your way with your faves" +"<br>"+ "and skip the queue with Click &" +"<br>"+ "Collect. It's easy. Order and pay" +"<br>"+ "ahead through the Costa app," +"<br>"+ "then pick up in store.";
RoutineTxt3.innerHTML = Thirdbox3;
RoutineTxt3.style.position = "relative";
RoutineTxt3.style.left = "-5px";
RoutineTxt3.style.fontSize = "18px";
RoutineTxt3.style.top = "80px";
RoutineTxt3.style.textAlign = "center";
RoutineTxt3.style.fontFamily = "sans-serif";
RoutineTxt3.style.color = "black";
RoutineTxt3.style.alignItems = "center";
RoutineTxt3.style.fontFamily = "MagallanesEssential","Sans-serif";
document.getElementById("routine").appendChild(RoutineTxt3)

var button3 = document.createElement("Button3");
button3.id = "Button3";
button3.innerText = "Get the app";
button3.style.top = "520px";
button3.style.left = "75px";
button3.style.fontFamily = "Sans-serif";
button3.style.fontWeight = "bold";
button3.style.fontFamily = "MagallanesEssential","Sans-serif";
routine.appendChild(button3);

// created the footer using createElement.
let myfooter = document.createElement("footer");
myfooter.id = "footer";
myfooter.style.backgroundColor = "#6d1f37";
myfooter.style.height = "120px";
myfooter.style.width = "100%";
document.body.appendChild(myfooter);



var privacy = document.createElement("p");
let policy = "Privacy Policy";
privacy.innerHTML = policy;
privacy.style.color = "white";
privacy.style.position = "relative";
privacy.style.left = "280px";
privacy.style.fontSize = "18px";
privacy.style.fontWeight = "bold";
privacy.style.fontFamily = "MagallanesEssential","Sans-serif";
privacy.style.top = "50px";
myfooter.appendChild(privacy);



var Cookie = document.createElement("p");
let cookiePolicy = "Cookie Policy";
Cookie.innerHTML = cookiePolicy;
Cookie.style.color = "white";
Cookie.style.position = "absolute";
Cookie.style.left = "480px";
Cookie.style.fontSize = "18px";
Cookie.style.fontWeight = "bold";
Cookie.style.fontFamily = "MagallanesEssential","Sans-serif";
Cookie.style.top = "35px";
myfooter.appendChild(Cookie);



var Terms = document.createElement("p");
let conditions = "Terms and conditions";
Terms.innerHTML = conditions;
Terms.style.color = "white";
Terms.style.position = "relative";
Terms.style.left = "660px";
Terms.style.fontSize = "18px";
Terms.style.fontWeight = "bold";
Terms.style.fontFamily = "MagallanesEssential","Sans-serif";
Terms.style.top = "15px";
myfooter.appendChild(Terms);



var footer4 = document.createElement("p");
let years = "© 2013-2023 Costa. All rights reserved";
footer4.innerHTML = years;
footer4.style.color = "white";
footer4.style.position = "relative";
footer4.style.left = "925px";
footer4.style.fontSize = "18px";
footer4.style.fontWeight = "bold";
footer4.style.fontFamily = "MagallanesEssential","Sans-serif";
footer4.style.top = "-23px";
myfooter.appendChild(footer4);

// the createElement function allowed me to upload my own image and edit it to how i like.
let facebook = document.createElement("img");
facebook.src = "facebook.svg";
facebook.style.height = "32px";
facebook.style.width = "32px";
facebook.style.position = "relative";
facebook.style.bottom = "70px";
facebook.style.left = "1400px";
myfooter.appendChild(facebook);

// i used the createElement for all the social media images which are placed within the footer. 
let twitter = document.createElement("img");
twitter.src = "twitter.svg";
twitter.style.position = "relative";
twitter.style.bottom = "66px";
twitter.style.height = "35px";
twitter.style.width = "35px";
twitter.style.left = "1420px";
myfooter.appendChild(twitter);


let youtube = document.createElement("img");
youtube.src = "youtube.svg";
youtube.style.position = "relative";
youtube.style.bottom = "67px";
youtube.style.height = "35px";
youtube.style.width = "35px";
youtube.style.left = "1440px";
myfooter.appendChild(youtube);


let instagram = document.createElement("img");
instagram.src = "instagram.svg";
instagram.style.position = "relative";
instagram.style.bottom = "70px";
instagram.style.height = "30px";
instagram.style.width = "25px";
instagram.style.left = "1460px";
myfooter.appendChild(instagram);