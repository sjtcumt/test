import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  project1,
  project2,
} from "../assets/images";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "SKills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const personData = {
  resume:
    "https://tyler_fft.hackerresume.io/4b8fb142-a62e-4a50-8f89-5e9c4862ba8b",
  socialLinks: [
    { name: "github", link: "https://github.com/tylerfft" },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/tyler-fft/",
    },
    { name: "telegram", link: "https://t.me/TylerFFT" },
  ],
};

export const projects = [
  {
    name: "Magic Puzzle",
    imgURL: project2,
    description: "",
    demoURL: "https://tylerfft-magic-puzzle.vercel.app/",
    codeURL: "https://github.com/tylerfft/magic_puzzle",
  },
  {
    name: "SVG NFT",
    imgURL: project1,
    description: "",
    demoURL: "https://tylerfft-nft.vercel.app/",
    codeURL: "https://github.com/tylerfft/svg-nft",
  },
];

export const skills = [
  {
    imgURL: skill1,
    name: "Frontend Developer (React)",
    link: "https://www.hackerrank.com/certificates/561f4db5df63",
  },
  {
    imgURL: skill2,
    name: "Software Engineer",
    link: "https://www.hackerrank.com/certificates/710f033df089",
  },
  {
    imgURL: skill3,
    name: "Go (Intermediate)",
    link: "https://www.hackerrank.com/certificates/97ffb6d425c5",
  },
  {
    imgURL: skill4,
    name: "JavaScript (Intermediate)",
    link: "https://www.hackerrank.com/certificates/db31de472d46",
  },
  {
    imgURL: skill5,
    name: "Problem Solving (Intermediate)",
    link: "https://www.hackerrank.com/certificates/f076766d8418",
  },
  {
    imgURL: skill6,
    name: "SQL (Advanced)",
    link: "https://www.hackerrank.com/certificates/a7f0aa1ca0c4",
  },
  {
    imgURL: skill7,
    name: "C# (Basic)",
    link: "https://www.hackerrank.com/certificates/fd8eb3603376",
  },
  {
    imgURL: skill8,
    name: "React (Basic)",
    link: "https://www.hackerrank.com/certificates/7e3114139e83",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
