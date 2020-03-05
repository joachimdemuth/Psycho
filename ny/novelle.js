let Canvas;

let img;

function preload(){
  img=loadImage('assets/book.png')
}
function setup() {

  Canvas = createCanvas(1400, 900);
  Canvas.center("horizontal");
  //background(255);
  
  textFont("Courier Prime", 20);
  textAlign(LEFT);
  color(0);
  /*push();
  translate(windowWidth/2, windowHeight/2);
  imageMode(CENTER);*/
  image(img, 0, 0,1000,600);
  pop();
  rg = new RiGrammar();
  rg.addRule("<start>", "<artikel> <tillæg> <noun>", 1);
  rg.addRule("<artikel>", "A | The", 1);
  rg.addRule(
    "<tillæg>",
    "Bloody | Sunny | Dark | Red | Scary | Cruel | Terrifying | Terrible | Horrifying | Nasty | Disgusting | Hostile | Uneasy | Ugly | Bloody | Strange | Dishonest | Serious | Mutilated | Criminal | One-eyed | Fucked-up | Mad | Angry | Fierce | Grumpy | Itchy | Jealous | Mysterious | Obnoxious | Uptight | Obese | White | Green | Blue | Shady | Panicky | Pleading | Lonely",
    1
  );
  rg.addRule(
    "<noun>",
    "Morning | Night | Eve | Hammer | Spree | Dog | Walk | Devil | Monster | Enemy | Prisoner | Cannibal | Cow | Stranger | Swing | Park | Elevator | Saw | Friend | Cat-lady |Woman | Man | Car | Journey | Movie | Store | Truck | Light | Garage | Scientist | Rollercoaster | Trampoline | Cucumber | Bathroom | Mouse | Horse | Umbrella | Mid-life-crisis | Tunnel | Depression | Lunchbox ",
    1
  );
  let sent = rg.expand();

  // side 1
  text("Index", 120, 170, textSize(17));
  text("Chapter One: " + sent, 130, 200, textSize(15));
  text("2", 450, 200, textSize(15));
  text("Chapter Two: ", 129, 230, textSize(15));
  text("6", 449, 230, textSize(15));
  text("Chapter Three: ", 128, 260, textSize(15));
  text("12", 445, 260, textSize(15));
  text("Chapter Four: ", 127, 290, textSize(15));
  text("18", 445, 290, textSize(15));
  text("Chapter Five: ", 126, 320, textSize(15));
  text("24", 446, 320, textSize(15));
  text("Chapter Six: ", 125, 350, textSize(15));
  text("30", 445, 350, textSize(15));

  text("1", 250, 530, textSize(15));
  text("Denmark | Copenhagen | puslished by", 112, 420, textSize(13)); // højre: vertikalt venstre: horisontalt
  text("@ Marvin Kirk 2020", 112, 450);

  // side 2
  text("Chapter One", 540, 100, textSize(20));
  text(sent, 539, 140, textSize(30));
  text("2", 730, 530, textSize(15));
  

  // text("frgr", 800, 200);  - EVT INDSÆT HISTORIEN HER - hvordan laver man det til en anden font og størrelse end overskriften?

  console.log(sent);
}
//document.getElementById("book").innerHTML = localStorage.getItem("novelTitle");