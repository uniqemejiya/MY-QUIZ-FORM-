class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   canvas = createCanvas(650,910)


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
     createElements(h3) = which colour does a porrot have ?
     


    this.message = createElement("h2")
    a] Blue 
    b]red 
    c]green 
    d]brown
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
