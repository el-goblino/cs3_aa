
//The array containing the description text used by the functions. Elements in an array in JS begin at 0.
const description = [
    "Once an ordinary store, now abandoned and unmaintained. The ruins of the store now serves as a place where people try (and fail) to make a quick buck by salvaging whatever it had. To be deleted and replaced soon. Something may still remain intact in this place, maybe go look for it.",
    "The Labyrinth is a compact apartment with 100000 rooms separated into 10 floors. Each floor is like a city of its own, despite the Labyrinth being only as large as an average 10 floor building. Clicking on this will redirect you to your room, located on the first floor. "
];

//Creating the objects (desc1 and 2) using the Desc function
const desc1 = new Desc(0);
const desc2 = new Desc(1);
//creating the objects (sidebar 1 and 2) using the Sidebar function, its parameters are x, y, and the id.
const sidebar1 = new Sidebar(157, 0, "left");
const sidebar2 = new Sidebar(-157, 0, "right");

/*
    The function used to change the text inside the textbox.
    The parameter in the function determines what element of the array is used to change the text of the html element with the 'textbox' id, that being the div inside the footer.
*/

function Desc(num){
    this.num = num;
    //A function defined inside another one is called a method. The first one changes the innerHTML property of the element with the id 'textbox', while the second reverts it to its original text.
    this.change = function(){
        //document is the webpage, getElementById is one of the methods used to find elements in document. innertext is one of the properties of the element and its descendants, except for <script> and <style>.
        document.getElementById('textbox').innerText = description[num];
    };
    this.revert = function(){
        document.getElementById('textbox').innerText = "Hover over a diamond to see its information. Clicking on one will redirect you to its respective homepage.";
    };
};

//this variable set to false by default since you haven't clicked the buttons yet
let clicked = false;

//sidebar function, it has 3 parameters, being the coordinates and id. the coords are put in the transform. id is used in document.getElementById in order to translate the correct div.
function Sidebar(x, y, id){
    //variables used in the function 
    this.x = x;
    this.y = y;
    this.id = id;
    
    this.open = function(){
        //also added a transition for smooth movement
        //sidebar opens

        document.getElementById(id).style.transition = "transform 0.2s";
        document.getElementById(id).style.transform = "translate(" + x/99 + "px," + y + "px)";

        //value of clicked is now reversed
        clicked = !clicked;
        //incase it doesn't work just click again
        if(clicked == true){
            //value of clicked is now reversed again
            !clicked;
            //sidebar closes
            document.getElementById(id).style.transform = "translate(" + x +  "px," + y + "px)";
        };
    }
}

