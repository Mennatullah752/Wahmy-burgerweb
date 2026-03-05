// استيراد الصور لكل الأصناف ما عدا أول اتنين
import chickenDouble from "../assets/chickenDouble.jpg";
import spicyBurger from "../assets/spicyBurger.jpg";
import fishBurger from "../assets/fishBurger.jpg";
import megaWahmy from "../assets/MegaWahmy.jpg";
import veggieBurger from "../assets/veggieBURGER.jpg";
import bbqBacon from "../assets/BACON.jpg";
import crispyChicken from "../assets/crispyChicken.jpg";
import cokeImg from "../assets/coke.jpg";
import fanta from "../assets/fanta.jpg";
import sprite from "../assets/sprite.jpg";
import pepsi from "../assets/pepsi.jpg";
import water from "../assets/water.jpg";
import lemonade from "../assets/lemonada.jpg";
import orangeJuice from "../assets/orange.jpg";
import grilledChicken from "../assets/grilled.jpg";
import blueCheeseBurger from "../assets/CHEES.jpg";
import buffaloChicken from "../assets/baflo.jpg";
import turkeyBurger from "../assets/turky.jpg";
import garlicLovers from "../assets/garlic.jpg";

const menuData = [
  { id: 1, name:"Classic Burger", description:"لحم بقري، خس، طماطم، جبنة وصوص خاص", price:120, image:"https://images.unsplash.com/photo-1550547660-d9450f859349", category:"Beef" },
  { id: 2, name:"Cheese Burger", description:"برجر جبنة مزدوجة", price:140, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd", category:"Beef" },
  { id: 3, name:"Double Chicken", description:"دجاج مقلي مع صوص", price:150, image: chickenDouble, category:"Chicken" },
  { id: 4, name:"Spicy Burger", description:"لحم حار هالبينو", price:150, image: spicyBurger, category:"Hot" },
  { id: 5, name:"Fish Burger", description:"فيليه سمك مقلي وصوص تارتار", price:145, image: fishBurger, category:"Fish" },
  { id: 6, name:"Mega Wahmy", description:"3 طبقات لحم مع كل الإضافات", price:250, image: megaWahmy, category:"Deals" },
  { id: 7, name:"Veggie Burger", description:"خضار وفاصوليا سوداء", price:100, image: veggieBurger, category:"Deals" },
  { id: 8, name:"BBQ Bacon", description:"لحم + بيكون + صوص باربكيو", price:170, image: bbqBacon, category:"Beef" },
  { id: 9, name:"Crispy Chicken", description:"دجاج مقرمش مع مخلل", price:130, image: crispyChicken, category:"Chicken" },
  { id: 10, name:"Coke", description:"مشروب غازي", price:20, image: cokeImg, category:"Drinks" },
  { id: 11, name:"Fanta", description:"مشروب برتقالي غازي", price:20, image: fanta, category:"Drinks" },
  { id: 12, name:"Sprite", description:"مشروب غازي", price:20, image: sprite, category:"Drinks" },
  { id: 13, name:"Pepsi", description:"مشروب غازي", price:20, image: pepsi, category:"Drinks" },
  { id: 14, name:"Water", description:"مياه معدنية", price:10, image: water, category:"Drinks" },
  { id: 15, name:"Lemonade", description:"عصير ليمون طبيعي", price:25, image: lemonade, category:"Drinks" },
  { id: 16, name:"Orange Juice", description:"عصير برتقال طازة", price:25, image: orangeJuice, category:"Drinks" },
  { id: 17, name:"Grilled Chicken", description:"دجاج مشوي مع صوص مستردة", price:135, image: grilledChicken, category:"Chicken" },
  { id: 18, name:"Blue Cheese Burger", description:"برجر لحم مع جبنة بلو تشيز", price:175, image: blueCheeseBurger, category:"Beef" },
  { id: 19, name:"Buffalo Chicken", description:"دجاج مقرمش بصوص بوفالو", price:155, image: buffaloChicken, category:"Chicken" },
  { id: 20, name:"Turkey Burger", description:"برجر ديك رومي صحي مع أفوكادو", price:140, image: turkeyBurger, category:"Beef" },
  { id: 21, name:"Garlic Lovers", description:"برجر لحم مع صوص ثوم كريمي", price:165, image: garlicLovers, category:"Hot" },
];

export default menuData;
