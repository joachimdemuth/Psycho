let Canvas;
chapters = [];
let img;
let sent;

function preload() {
  img = loadImage("../Assets/book.png");
}
function setup() {
  Canvas = createCanvas(windowWidth, windowHeight);
  Canvas.center("horizontal");

  //background(255);
  textFont("Courier Prime", 32);
  textAlign(LEFT);
  color(0);
  image(img, 0, 0, 1000, 600);
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
    "Morning | Night | Eve | Hammer | Spree | Dog | Walk | Devil | Monster | Enemy | Prisoner | Cannibal | Cow | Stranger | Swing | Park | Elevator | Saw | Friend | Cat-lady |Woman | Man | Car | Journey | Movie | Store | Truck | Light | Garage | Scientist | Rollercoaster | Trampoline | Cucumber | Bathroom | Mouse | Horse | Umbrella | Mid-life-crisis | Tunnel | Depression | Lunchbox | Pasta-maker",
    1
  );

  for (var i = 0; i < 49; i++) {
    chapters.push(rg.expand());
  }

  if (localStorage.getItem("amountOfSaves") >= 1) {
    text("Chapter One: " + chapters[0], 130, 200, textSize(15));
  }
  if (localStorage.getItem("amountOfSaves") >= 2) {
    text("Chapter Two: " + chapters[1], 129, 230, textSize(15));
  }
  if (localStorage.getItem("amountOfSaves") >= 3) {
    text("Chapter Three: " + chapters[2], 128, 260, textSize(15));
  }
  if (localStorage.getItem("amountOfSaves") >= 4) {
    text("Chapter Four: " + chapters[3], 127, 290, textSize(15));
  }
  if (localStorage.getItem("amountOfSaves") >= 5) {
    text("Chapter Five: " + chapters[4], 126, 320, textSize(15));
  }
  if (localStorage.getItem("amountOfSaves") >= 6) {
    text("Chapter Six: " + chapters[5], 125, 350, textSize(15));
  }

  text("Index", 120, 170, textSize(17));

  text("2", 450, 200, textSize(15));
  text("6", 449, 230, textSize(15));
  text("12", 445, 260, textSize(15));
  text("18", 445, 290, textSize(15));
  text("24", 446, 320, textSize(15));
  text("30", 445, 350, textSize(15));

  text("1", 250, 530, textSize(15));
  text("Denmark | Copenhagen | puslished by", 112, 420, textSize(13)); // højre: vertikalt venstre: horisontalt
  text("@ Marvin Kirk 2020", 112, 450);

  // side 2
  text("Chapter One", 540, 100, textSize(20));
  text(chapters[0], 539, 140, textSize(30));
  text("2", 730, 530, textSize(15));
}
