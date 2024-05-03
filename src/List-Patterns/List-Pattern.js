import { RegularList } from "./RegularList";
import { SmallPersonListItem } from "./people/SmallPersonList";
import { LargePersonListItem } from "./people/LargePersonList";

// Work support for Development
const people = [
  {
    name: "John Doe",
    age: 28,
    hairColor: "Brown",
    hobbies: ["Reading", "Cycling", "Playing the guitar"],
  },
  {
    name: "Mary Jane",
    age: 32,
    hairColor: "Blonde",
    hobbies: ["Gardening", "Painting", "Swimming"],
  },
  {
    name: "Alice Blue",
    age: 24,
    hairColor: "Black",
    hobbies: ["Coding", "Running", "Hiking"],
  },
  {
    name: "Gregory House",
    age: 45,
    hairColor: "Grey",
    hobbies: ["Playing the piano", "Motorcycling", "Chess"],
  },
  {
    name: "Eva Green",
    age: 30,
    hairColor: "Dark Brown",
    hobbies: ["Acting", "Boxing", "Reading novels"],
  },
  {
    name: "Alex Turner",
    age: 36,
    hairColor: "Black",
    hobbies: ["Singing", "Writing songs", "Playing guitar"],
  },
  {
    name: "Sophia Loren",
    age: 29,
    hairColor: "Red",
    hobbies: ["Cooking", "Dancing", "Traveling"],
  },
  {
    name: "Mark Twain",
    age: 55,
    hairColor: "Salt and Pepper",
    hobbies: ["Writing", "Fishing", "Public speaking"],
  },
  {
    name: "Luna Lovegood",
    age: 27,
    hairColor: "Blonde",
    hobbies: ["Magical creatures", "Collecting odd objects", "Reading"],
  },
  {
    name: "Indiana Jones",
    age: 40,
    hairColor: "Brown",
    hobbies: ["Archaeology", "Adventure", "History"],
  },
];

const products = [
  {
    name: "Eco-Friendly Water Bottle",
    price: 19.99,
    description:
      "A durable, BPA-free water bottle that keeps your drinks cold for up to 24 hours.",
    rating: 4.7,
  },
  {
    name: "Wireless Bluetooth Headphones",
    price: 89.99,
    description:
      "High-quality sound, long-lasting battery, and comfort-fit for your daily use.",
    rating: 4.5,
  },
  {
    name: "Portable Charger",
    price: 25.99,
    description:
      "Compact and lightweight, this portable charger is your perfect companion for on-the-go charging.",
    rating: 4.6,
  },
  {
    name: "Ergonomic Office Chair",
    price: 199.99,
    description:
      "Designed for comfort, this office chair offers lumbar support, adjustable height, and tilt function.",
    rating: 4.3,
  },
  {
    name: "Smart Fitness Tracker",
    price: 49.99,
    description:
      "Monitor your health and activity with our smart fitness tracker, featuring heart rate monitor, pedometer, and sleep tracking.",
    rating: 4.2,
  },
  {
    name: "Gourmet Coffee Beans",
    price: 15.99,
    description:
      "Experience the rich and smooth flavor of our gourmet coffee beans, sourced from the finest coffee-growing regions.",
    rating: 4.8,
  },
  {
    name: "Organic Green Tea",
    price: 9.99,
    description:
      "Refresh and rejuvenate with our organic green tea, full of antioxidants and naturally occurring nutrients.",
    rating: 4.4,
  },
  {
    name: "Yoga Mat",
    price: 29.99,
    description:
      "Non-slip, eco-friendly yoga mat designed to provide optimal grip and comfort during your yoga sessions.",
    rating: 4.7,
  },
  {
    name: "Stainless Steel Cookware Set",
    price: 129.99,
    description:
      "This high-quality stainless steel cookware set includes all the essentials for your cooking needs.",
    rating: 4.6,
  },
  {
    name: "Noise Canceling Earplugs",
    price: 17.99,
    description:
      "Perfect for studying, sleeping, and flying, these noise-canceling earplugs will help you find your peace in any environment.",
    rating: 4.5,
  },
];

export const ListPattern = () => {
  return (
    <>
      <h1>Small List Component</h1>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <hr></hr>
      <h1>Large List Component</h1>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </>
  );
};
