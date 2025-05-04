// Navigation links
export const LINKS = [
  { text: "Menu", targetId: "menu" },
  { text: "About", targetId: "about" },
];

export const LINK = [
  { text: "All", targetId: "All" },
  { text: "Arabesque Breakfast", targetId: "Arabesque Breakfast" },
  { text: "Healthy Dishes", targetId: "Healthy Dishes" },
  { text: "Main Dishes", targetId: "Main Dishes" },
  { text: "Pizza", targetId: "Pizza" },
  { text: "Cold Drinks", targetId: "Cold Drinks" },
];

export const LIST = {
  list1: "Promo",
  list2: "Our Signature Dishes",
  list3: "About Us",
  list4: "Customer Review",
  list5: "Contact Us",
};

// HERO IMAGES
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero5 from "../assets/hero5.png";
import hero6 from "../assets/hero6.png";

export const HERO = [{ image: hero1 }, { image: hero2 }, { image: hero3 }, { image: hero5 }, { image: hero6 }];

const placeholder = "/photos/placeholder.jpeg";

export const ARABESQUE_BREAKFAST = [
  {
    image: "./photos/breakfast.png",
    title: "Arabesque Breakfast",
    description: "Start your day with falafel, tabbouleh, salad, olives, mankoosha & drink.",
    price: "18",
  },
];

export const HEALTHY_DISHES = [
  { image: "./photos/flafelhealthy.jpeg", title: "Falafel 🌿", description: "Crispy chickpea patties", price: "4.5" },
  { image: "./photos/hummushealthy.jpeg", title: "Clean Hummus 🌿", description: "Smooth chickpea dip", price: "4.5" },
  { image: placeholder, title: "Beans with Tahina 🌿", description: "Fava beans & tahini", price: "4.5" },
  { image: "./photos/tahinahealthy.jpeg", title: "Tahina with Parsley 🌿", description: "Fresh tahini mix", price: "4.5" },
  { image: "./photos/tabulahealthy.jpeg", title: "Tabula 🌿", description: "Parsley, tomatoes & bulgur", price: "4.5" },
  { image: "./photos/fatushhealthy.jpeg", title: "Fatush 🌿", description: "Druze salad with pita", price: "4.5" },
  { image: "./photos/babahealthy.jpeg", title: "Baba Ghanoj 🌿", description: "Smoky eggplant dip", price: "4.5" },
  { image: "./photos/choppedsaladhealthy.jpeg", title: "Chopped Salad 🌿", description: "Cucumber, mint, tomato", price: "4.5" },
  { image: "./photos/fries.jpeg", title: "Fries 🌿", description: "Golden crispy fries", price: "4.5" },
];

export const MAIN_DISHES = [
  { image: placeholder, title: "Veal Shawarma – Pita", description: "Juicy veal in pita", price: "8" },
  { image: placeholder, title: "Veal Shawarma – Plate", description: "Veal with sides", price: "15" },
  { image: placeholder, title: "Chicken Shawarma – Pita 🥛", description: "Chicken in pita", price: "7" },
  { image: placeholder, title: "Chicken Shawarma – Plate", description: "Grilled chicken with sides", price: "15" },
  { image: placeholder, title: "Crispy Chicken Breast", description: "Breaded chicken breast", price: "15" },
  { image: placeholder, title: "Crispy Chicken Wings", description: "Spicy wings", price: "15" },
  { image: placeholder, title: "Falafel Plate (8 balls) 🌿", description: "8 falafel balls with sides", price: "9" },
  { image: placeholder, title: "Falafel in Pita 🌿", description: "Classic wrap", price: "7" },
  { image: placeholder, title: "Dish of Hummus 🌿", description: "Large hummus portion", price: "12" },
  { image: placeholder, title: "Dish of Beans 🌿", description: "Warm seasoned beans", price: "12" },
  { image: placeholder, title: "Veal Meat Mansaf", description: "Veal, rice & yogurt sauce", price: "15" },
  { image: placeholder, title: "Chicken Mansaf", description: "Chicken, rice & yogurt sauce", price: "14" },
];

export const PIZZA = [
  { image: placeholder, title: "Small Pizza 🥛", description: "Cheesy personal pizza", price: "4.5" },
  { image: placeholder, title: "Big Pizza 🥛", description: "Large sharing pizza", price: "8" },
];

export const COLD_DRINKS = [
  {
    image: "./photos/heineken.png",
    title: "Heineken Beer",
    description: "Crisp refreshing lager",
    price: "3.5",
  },
  {
    image: "https://yastatic.net/avatars/get-grocery-goods/2783132/f6badaa2-0171-49a3-83b6-8dd3f01c7f48/464x464-origin",
    title: "Coca Cola Regular / Zero",
    description: "Classic fizzy soda",
    price: "3.5",
  },
  {
    image: "https://positano.lv/wp-content/uploads/2021/11/fanta-0.5-new.png",
    title: "Fanta",
    description: "Orange flavored soda",
    price: "3.5",
  },
  {
    image: "./photos/sprite.png",
    title: "Sprite",
    description: "Lemon-lime soda",
    price: "3.5",
  },
  {
    image: "./photos/redBull.png",
    title: "Red Bull",
    description: "Energy drink",
    price: "3.5",
  },
  {
    image: "./photos/schwepslemon.png",
    title: "Schweppes Bitter Lemon",
    description: "Citrus blend",
    price: "3.5",
  },
  {
    image: "./photos/gingerale.png",
    title: "Schweppes Ginger Ale",
    description: "Ginger-flavored soda",
    price: "3.5",
  },
  {
    image: "./photos/liptonicetea.png",
    title: "Lipton Green Ice Tea",
    description: "Green tea iced drink",
    price: "3.5",
  },
  {
    image: "https://dutchshopper.com/cdn/shop/files/358674_0a0daf47-4818-4c7c-874d-b474eecf7252.png?v=1736658848",
    title: "Lipton Original Sparkling",
    description: "Fizzy iced tea",
    price: "3.5",
  },
  {
    image: "./photos/liptonpeach.png",
    title: "Lipton Peach Ice Tea",
    description: "Peach iced tea",
    price: "3.5",
  },
  {
    image: "https://www.burgerking.ee/images/optimized/products/orange-juice-desktop-c65f5afd38678e7dfbbef7ea31ed3308.png",
    title: "Orange Juice",
    description: "Fresh orange juice",
    price: "3.5",
  },
  {
    image: "https://www.sunlandjuices.com/app/uploads/2021/10/50cl-Sunland-Apple-Juice-LR.png",
    title: "Apple Juice",
    description: "Sweet apple juice",
    price: "3.5",
  },
  {
    image: "https://www.mcdonalds.co.za/media/products/bonaqua-water/Bonaqua-Still.png",
    title: "Water",
    description: "Still water",
    price: "3.5",
  },
  {
    image:
      "https://www.dutchexpatshop.com/media/catalog/product/cache/9dd3e46ff2060608618ae5fa799a3cc1/2/2/220720191648_69147FLS-5_720x720.png",
    title: "Spa Water",
    description: "Mineral-rich water",
    price: "3.5",
  },
];

// About and Contact
import aboutVideo from "../assets/mission.mov";

export const ABOUT = {
  video: aboutVideo,
  header: "Passion for Flavor, Crafted with Love",
  content:
    "Welcome to Arabesque, where we bring people together with authentic food and warm hospitality. Experience traditional dishes, made fresh and served with love.",
};

export const CONTACT = {
  header: "Get in Touch",
  address: "123 Falafel Street, Arabesque Town",
  phone: "+972 50-000-0000",
  email: "contact@arabesque.com",
  description: "Have questions or feedback? We’re here to help! Get in touch and we’ll respond as soon as possible.",
};

export const HEROTEXTE = {
  header: "Authentic Middle Eastern Flavor",
  description:
    "From breakfast to dinner, enjoy a culinary journey with our traditional Arabesque dishes. Freshly prepared, full of flavor, and always satisfying.",
};

export const DISHESTEXT = {
  header: "Our Signature Dishes",
  description: (
    <div className="font-Geist tracking-wider text-center dark:text-seconadryText">
      <p>Explore our menu filled with healthy, hearty, and flavorful dishes made from traditional recipes.</p>
      <p>Look for 🥛 to identify dishes that contain milk, and 🌿 for vegetarian options.</p>
    </div>
  ),
};

export const BENEF = {
  benef1: "Authentic Ingredients",
  benef2: "Delicious Flavors",
  benef3: "Fast Delivery",
};
