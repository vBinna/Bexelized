/*
  Add your products here.
  category must be: car-hanging, bag, hanging, earrings, customized
  style must be: anime, cartoon, friendly, realistic
  Put each product photo inside assets/images/ and use its path below.
*/
const products = [

  // CAR 

  { name: "Jett", category: "car-hanging", style: "game", image: "images/44.jpg" },
  {
  name: "Fish",
  category: "car-hanging",
  style: "other",
  variants: [
    { name: "Pink", color: "#e98eae", image: "images/43.jpg" },
    { name: "Orange", color: "#da9546", image: "images/42.jpg" }
  ]
},
  { name: "The Fairly OddParents", category: "car-hanging", style: "cartoon", image: "images/41.jpg" },
  { name: "Pac Man", category: "car-hanging", style: "game", image: "images/40.jpg" },
  { name: "Among Us", category: "car-hanging", style: "game", image: "images/39.jpg" },
  { name: "Birds", category: "car-hanging", style: "other", image: "images/38.jpg" },
  { name: "Candies", category: "car-hanging", style: "other", image: "images/37.jpg" },
  {
  name: "Cloud",
  category: "car-hanging",
  style: "other",
  variants: [
    { name: "Blue", color: "#579bd5", image: "images/47.jpg" },
    { name: "Orange", color: "#da9546", image: "images/48.jpg" }
  ]
},



  // EARRINGS

  { name: "Donald & Daisy Duck", category: "earrings", style: "cartoon", image: "images/21.jpg" },
  { name: "Kuromi", category: "earrings", style: "cartoon", image: "images/23.jpg" },
  { name: "Knives with Blood", category: "earrings", style: "other", image: "images/34.jpg" },
  { name: "Snoopy", category: "earrings", style: "cartoon", image: "images/20.jpg" },
{
  name: "Fionka",
  category: "earrings",
  style: "other",
  variants: [
    { name: "Green", color: "#55a96b", image: "images/30.jpg" },
    { name: "Blue", color: "#579bd5", image: "images/27.jpg" },
    { name: "Pink", color: "#e98eae", image: "images/28.jpg" },
    { name: "Purple", color: "#9b78c9", image: "images/29.jpg" }
  ]
},
  { name: "Purple Cupcake", category: "earrings", style: "other", image: "images/26.jpg" },
  { name: "Cute Arrow", category: "earrings", style: "other", image: "images/25.jpg" },
  { name: "Rainbow", category: "earrings", style: "other", image: "images/31.jpg" },
  { name: "Purple Heart", category: "earrings", style: "other", image: "images/22.jpg" },
{
  name: "Butterfly",
  category: "earrings",
  style: "other",
  variants: [
    { name: "Pink", color: "#e98eae", image: "images/32.jpg" },
    { name: "Blue", color: "#579bd5", image: "images/33.jpg" }
  ]
},
  { name: "Circle", category: "earrings", style: "other", image: "images/24.jpg" },




// BAG

  { name: "Tetris", category: "bag", style: "game", image: "images/46.jpg" },
  { name: "Cats", category: "bag", style: "other", image: "images/45.jpg" },
  { name: "Powerpuff Girls Heart", category: "bag", style: "cartoon", image: "images/18.jpg" },
{
  name: "My Little Pony",
  category: "bag",
  style: "cartoon",
  variants: [
    { name: "Twilight Sparkle", color: "#9b78c9", image: "images/19.jpg" },
    { name: "Pinkie Pie", color: "#e98eae", image: "images/61.jpg" },
    { name: "Rainbow Dash", color: "#579bd5", image: "images/62.jpg" }
  ]
},
  { name: "Pink Fionka", category: "bag", style: "other", image: "images/17.jpg" },
  { name: "Teacup", category: "bag", style: "other", image: "images/36.jpg" },
  { name: "One Piece Skull", category: "bag", style: "anime", image: "images/35.jpg" },
  { name: "Cubone", category: "bag", style: "game", image: "images/49.jpg" },
  { name: "Ghost", category: "bag", style: "other", image: "images/50.jpg" },
  { name: "Venom x Deadpool", category: "bag", style: "other", image: "images/51.jpg" },
  { name: "CR7 Shirt", category: "bag", style: "other", image: "images/52.jpg" },
  { name: "Purple Fionka", category: "bag", style: "other", image: "images/63.jpg" },
  { name: "Bullet Bill", category: "bag", style: "game", image: "images/64.jpg" },
  { name: "Among Us", category: "bag", style: "game", image: "images/65.jpg" },
  { name: "1-Up Mushroom", category: "bag", style: "game", image: "images/67.jpg" },
{
  name: "Laser Sword",
  category: "bag",
  style: "game",
  variants: [
    { name: "Purple", color: "#9b78c9", image: "images/68.jpg" },
  ]
},
  { name: "Flower", category: "bag", style: "other", image: "images/53.jpg" },
  { name: "Minecraft Pickaxe", category: "bag", style: "other", image: "images/54.jpg" },
  { name: "Lightning McQueen", category: "bag", style: "cartoon", image: "images/55.jpg" },
  { name: "Sword", category: "bag", style: "game", image: "images/56.jpg" },
{
  name: "Paw Print",
  category: "bag",
  style: "other",
  variants: [
    { name: "White", color: "#f8f8f8", image: "images/57.jpg" },
    { name: "Brown", color: "#7c4a12", image: "images/59.jpg" },
    { name: "Black", color: "#0e0e0e", image: "images/59.jpg" } // تعديل
  ]
},
  //{ name: "", category: "bag", style: "other", image: "images/.jpg" },
  



// HANGING

  { name: "Spiderman", category: "hanging", style: "cartoon", image: "images/09.jpg" },
  { name: "Zoro", category: "hanging", style: "anime", image: "images/05.jpg" },
  { name: "Kayn", category: "hanging", style: "game", image: "images/04.jpg" },



  
// CUSTOMIZED

  { name: "Buttercup", category: "customized", style: "cartoon", image: "images/03.jpg" },
  { name: "Blossom", category: "customized", style: "cartoon", image: "images/02.jpg" },
  { name: "Bubbles", category: "customized", style: "cartoon", image: "images/01.jpg" },
  { name: "Jinx", category: "customized", style: "game", image: "images/14.jpg" },
  { name: "Daichi Sawamura", category: "customized", style: "anime", image: "images/08.jpg" },
  { name: "Tails", category: "customized", style: "game", image: "images/07.jpg" },
  { name: "Sonic", category: "customized", style: "game", image: "images/06.jpg" },
  { name: "Pikachu", category: "customized", style: "cartoon", image: "images/10.jpg" },
  { name: "Pascal", category: "customized", style: "cartoon", image: "images/13.jpg" },
  { name: "Furyhorn Cosplay Veigar", category: "customized", style: "game", image: "images/12.jpg" },
  { name: "Ai Ohto", category: "customized", style: "anime", image: "images/11.jpg" },
  { name: "Mario Mushrooms", category: "customized", style: "game", image: "images/16.jpg" },
  { name: "Tanjiro Kamado", category: "customized", style: "anime", image: "images/15.jpg" },
  { name: "Flower", category: "customized", style: "other", image: "images/60.jpg" },
  { name: "Batman Signal", category: "customized", style: "cartoon", image: "images/58.png" },
  { name: "Kunai", category: "customized", style: "game", image: "images/66.jpg" },

];
