class Form {
  constructor() {
    
  }

  display(){
    
    var title=createElement('h3')
    title.html("!...WORLD OF BOOK...! ");
    title.position(130, 0);
    title.style('color',"blue");
    title.style('fontstyle',"Algerian")

    

    
    var input = createInput("Name");
    input.style('color',"lightgreen");
    
    var button = createButton('Enter');
    button.style('color',"red");
    var input2 = createInput("password")
    var input3 = createInput("E-MAIL_ID")
    input2.position(130,220);
    input.position(130, 160);
    button.position(250, 250);
    input3.position(130,190)
    input2.style('color',"lightgreen");
    input3.style('color',"lightgreen");
   
    button.mousePressed(function(){
      input.hide();
      button.hide();
      input2.hide();
      input3.hide();

      var name = input.value();
      
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
