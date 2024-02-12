import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Sophisticated Lace Overlay A-Line Dress",
    category: "women",
    image: p1_img,
    new_price: 149.99,
    old_price: 165.23,
    rating: 5,
  },
  {
    id: 2,
    name: "Elegant Floral Embroidered Maxi Gown",
    category: "women",
    image: p2_img,
    new_price: 179.95,
    old_price: 182.35,
    rating: 4,
  },
  {
    id: 3,
    name: "Chic Off-the-Shoulder Satin Midi Dress ",
    category: "women",
    image: p3_img,
    new_price: 129.99,
    old_price: 135.27,
    rating: 5,
  },
  {
    id: 4,
    name: "Modern One-Shoulder Draped Jersey Dress",
    category: "women",
    image: p4_img,
    new_price: 119.95,
    old_price: 130.0,
    rating: 4,
  },
  {
    id: 5,
    name: "Timeless Velvet Wrap Front Sheath Dress",
    category: "women",
    image: p5_img,
    new_price: 139.99,
    old_price: 152.25,
    rating: 5,
  },
  {
    id: 6,
    name: "Stylish Sequin Bodice Tulle Skirt Dress ",
    category: "women",
    image: p6_img,
    new_price: 169.95,
    old_price: 179.99,
    rating: 5,
  },
  {
    id: 7,
    name: "Classic V-Neck Fit and Flare Cocktail Dress",
    category: "women",
    image: p7_img,
    new_price: 99.99,
    old_price: 110.45,
    rating: 4,
  },
  {
    id: 8,
    name: "Glamorous Halter Neck Mermaid Evening Gown",
    category: "women",
    image: p8_img,
    new_price: 189.95,
    old_price: 200.25,
    rating: 5,
  },
  {
    id: 9,
    name: "Feminine Ruffle Sleeve Chiffon Midi Dress",
    category: "women",
    image: p9_img,
    new_price: 109.99,
    old_price: 120.57,
    rating: 5,
  },
  {
    id: 10,
    name: "Boho Chic Tiered Maxi Dress with Lace",
    category: "women",
    image: p10_img,
    new_price: 129.95,
    old_price: 135.57,
    rating: 4,
  },
  {
    id: 11,
    name: "Modern Satin Slip Dress with Cowl Neck",
    category: "women",
    image: p11_img,
    new_price: 89.99,
    old_price: 95.55,
    rating: 4,
  },
  {
    id: 12,
    name: "Off-the-Shoulder Pleated Taffeta Ball Gown",
    category: "women",
    image: p12_img,
    new_price: 199.95,
    old_price: 210.25,
    rating: 5,
  },
  {
    id: 13,
    name: "Sophisticated Charcoal Gray Wool Blend Overcoat with Notched Lapels",
    category: "men",
    image: p13_img,
    new_price: 149.99,
    old_price: 165.5,
    rating: 5,
  },
  {
    id: 14,
    name: "Urban Streetwear Distressed Denim Jacket with Classic Button Front Design",
    category: "men",
    image: p14_img,
    new_price: 79.95,
    old_price: 88.25,
    rating: 4,
  },
  {
    id: 15,
    name: "Trendy and Comfortable Casual Plaid Flannel Shirt for Everyday Style",
    category: "men",
    image: p15_img,
    new_price: 54.99,
    old_price: 62.99,
    rating: 4,
  },
  {
    id: 16,
    name: "Modern Slim Fit Chino Pants in Versatile Navy Blue for a Stylish Look",
    category: "men",
    image: p16_img,
    new_price: 69.95,
    old_price: 82.25,
    rating: 5,
  },
  {
    id: 17,
    name: "Vintage-Inspired Bomber Jacket with Retro Patches and Ribbed Cuffs",
    category: "men",
    image: p17_img,
    new_price: 129.99,
    old_price: 140.55,
    rating: 5,
  },
  {
    id: 18,
    name: "Casual and Chic Monochrome Sneakers for Effortless Street Style",
    category: "men",
    image: p18_img,
    new_price: 89.95,
    old_price: 95.25,
    rating: 4,
  },
  {
    id: 19,
    name: "Dapper Checkered Dress Shirt with Button-Down Collar and Long Sleeves",
    category: "men",
    image: p19_img,
    new_price: 44.99,
    old_price: 56.25,
    rating: 5,
  },
  {
    id: 20,
    name: "Classic Striped Polo Shirt in Breathable Cotton for Casual Elegance",
    category: "men",
    image: p20_img,
    new_price: 59.95,
    old_price: 72.99,
    rating: 4,
  },
  {
    id: 21,
    name: "Elegant Wool Peacoat with Timeless Double-Breasted Design and Wide Collar",
    category: "men",
    image: p21_img,
    new_price: 179.99,
    old_price: 195.99,
    rating: 5,
  },
  {
    id: 22,
    name: "Stylish Leather Biker Jacket with Quilted Detailing and Asymmetrical Zip",
    category: "men",
    image: p22_img,
    new_price: 99.95,
    old_price: 112.55,
    rating: 4,
  },
  {
    id: 23,
    name: "Fashionable Fedora Hat with Wide Brim for a Classic and Trendy Look",
    category: "men",
    image: p23_img,
    new_price: 129.99,
    old_price: 140.0,
    rating: 4,
  },
  {
    id: 24,
    name: "Comfortable Lounge Joggers with Elasticized Waistband and Relaxed Fit",
    category: "men",
    image: p24_img,
    new_price: 169.95,
    old_price: 180.55,
    rating: 5,
  },
  {
    id: 25,
    name: "Adorable Dinosaur Print Hooded Onesie for Boys",
    category: "kid",
    image: p25_img,
    new_price: 34.99,
    old_price: 40.55,
    rating: 5,
  },
  {
    id: 26,
    name: "Cool Camouflage Cargo Shorts with Elastic Waistband",
    category: "kid",
    image: p26_img,
    new_price: 22.95,
    old_price: 30.99,
    rating: 4,
  },
  {
    id: 27,
    name: "Playful Robot Graphic T-shirt in Soft Cotton Blend",
    category: "kid",
    image: p27_img,
    new_price: 17.99,
    old_price: 20.55,
    rating: 4,
  },
  {
    id: 28,
    name: "Cute Striped Overall Romper with Snap Closure",
    category: "kid",
    image: p28_img,
    new_price: 29.95,
    old_price: 35.25,
    rating: 4,
  },
  {
    id: 29,
    name: "Comfortable Denim Jeans with Adjustable Waist for Active Boys",
    category: "kid",
    image: p29_img,
    new_price: 27.99,
    old_price: 33.25,
    rating: 4,
  },
  {
    id: 30,
    name: "Colorful Cartoon Character Pajama Set for Sweet Dreams",
    category: "kid",
    image: p30_img,
    new_price: 19.95,
    old_price: 25.55,
    rating: 5,
  },
  {
    id: 31,
    name: "Sporty Soccer Print Jersey and Shorts Set",
    category: "kid",
    image: p31_img,
    new_price: 24.99,
    old_price: 35.55,
    rating: 5,
  },
  {
    id: 32,
    name: "Stylish Checked Button-Up Shirt for Little Gentlemen",
    category: "kid",
    image: p32_img,
    new_price: 18.95,
    old_price: 25.55,
    rating: 4,
  },
  {
    id: 33,
    name: "Quirky Animal Face Knit Sweater for Winter Adventures ",
    category: "kid",
    image: p33_img,
    new_price: 32.99,
    old_price: 45.55,
    rating: 4,
  },
  {
    id: 34,
    name: "Trendy Baseball Cap with Embroidered Patch",
    category: "kid",
    image: p34_img,
    new_price: 14.95,
    old_price: 20.75,
    rating: 4,
  },
  {
    id: 35,
    name: "Durable Canvas Sneakers with Velcro Straps",
    category: "kid",
    image: p35_img,
    new_price: 23.99,
    old_price: 28.55,
    rating: 4,
  },
  {
    id: 36,
    name: "Vibrant Plaid Short Sleeve Shirt for Summer Days",
    category: "kid",
    image: p36_img,
    new_price: 39.95,
    old_price: 52.25,
    rating: 5,
  },
];

export default all_product;
