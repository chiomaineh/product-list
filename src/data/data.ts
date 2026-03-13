import WaffleThumbnail from "../assets/images/image-waffle-thumbnail.jpg";
import WaffleMobile from "../assets/images/image-waffle-mobile.jpg";
import WaffleDesktop from "../assets/images/image-waffle-desktop.jpg";
import WaffleTablet from "../assets/images/image-waffle-tablet.jpg";

import BruleeThumbnail from "../assets/images/image-creme-brulee-thumbnail.jpg";
import BruleeMobile from "../assets/images/image-creme-brulee-mobile.jpg";
import BruleeDesktop from "../assets/images/image-creme-brulee-desktop.jpg";
import BruleeTablet from "../assets/images/image-creme-brulee-tablet.jpg";

import MacaronThumbnail from "../assets/images/image-macaron-thumbnail.jpg";
import MacaronMobile from "../assets/images/image-macaron-mobile.jpg";
import MacaronDesktop from "../assets/images/image-macaron-desktop.jpg";
import MacaronTablet from "../assets/images/image-macaron-tablet.jpg";

import TiramisuThumbnail from "../assets/images/image-tiramisu-thumbnail.jpg";
import TiramisuMobile from "../assets/images/image-tiramisu-mobile.jpg";
import TiramisuDesktop from "../assets/images/image-tiramisu-desktop.jpg";
import TiramisuTablet from "../assets/images/image-tiramisu-tablet.jpg";

import BaklavaThumbnail from "../assets/images/image-baklava-thumbnail.jpg";
import BaklavaMobile from "../assets/images/image-baklava-mobile.jpg";
import BaklavaDesktop from "../assets/images/image-baklava-desktop.jpg";
import BaklavaTablet from "../assets/images/image-baklava-tablet.jpg";

import MeringueThumbnail from "../assets/images/image-meringue-thumbnail.jpg";
import MeringueMobile from "../assets/images/image-meringue-mobile.jpg";
import MeringueDesktop from "../assets/images/image-meringue-desktop.jpg";
import MeringueTablet from "../assets/images/image-meringue-tablet.jpg";

import CakeThumbnail from "../assets/images/image-cake-thumbnail.jpg";
import CakeMobile from "../assets/images/image-cake-mobile.jpg";
import CakeDesktop from "../assets/images/image-cake-desktop.jpg";
import CakeTablet from "../assets/images/image-cake-tablet.jpg";

import BrownieThumbnail from "../assets/images/image-brownie-thumbnail.jpg";
import BrownieMobile from "../assets/images/image-brownie-mobile.jpg";
import BrownieDesktop from "../assets/images/image-brownie-desktop.jpg";
import BrownieTablet from "../assets/images/image-brownie-tablet.jpg";

import PannaThumbnail from "../assets/images/image-panna-cotta-thumbnail.jpg";
import PannaMobile from "../assets/images/image-panna-cotta-mobile.jpg";
import PannaDesktop from "../assets/images/image-panna-cotta-desktop.jpg";
import PannaTablet from "../assets/images/image-panna-cotta-tablet.jpg";

export interface ProductImage {
  thumbnail: string;
  mobile: string;
  tablet:string;
  desktop:string;
}
export interface Product {
  image: ProductImage;
  name: string;
  category: string;
  price: number;
  id:number;
}

export const products: Product[] = [
  {
    image: {
      thumbnail: WaffleThumbnail,
      mobile: WaffleMobile,
      tablet: WaffleTablet,
      desktop: WaffleDesktop,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50,
    id: 1,
  },
  {
    image: {
      thumbnail: BruleeThumbnail,
      mobile: BruleeMobile,
      tablet: BruleeTablet,
      desktop: BruleeDesktop
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00,
    id:2 ,
  },
  {
    image: {
      thumbnail: MacaronThumbnail,
      mobile: MacaronMobile, 
      tablet: MacaronTablet,
      desktop: MacaronDesktop,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00,
    id:3,
  }, 
  {
    image: {
      thumbnail: TiramisuThumbnail,
      mobile: TiramisuMobile,
      tablet: TiramisuTablet,
      desktop: TiramisuDesktop,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50,
    id:4,
  },
  {
    image: {
      thumbnail: BaklavaThumbnail,
      mobile: BaklavaMobile,
      tablet: BaklavaTablet,
      desktop: BaklavaDesktop,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
    id:5,
  },
  {
    image: {
      thumbnail: MeringueThumbnail,
      mobile: MeringueMobile,
      tablet: MeringueTablet,
      desktop: MeringueDesktop ,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
    id: 6,
  },
  {
    image: {
      thumbnail: CakeThumbnail,
      mobile: CakeMobile,
      tablet: CakeTablet ,
      desktop: CakeDesktop,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
    id: 7,
  },
  {
    image: {
      thumbnail: BrownieThumbnail ,
      mobile:BrownieMobile ,
      tablet: BrownieTablet,
      desktop: BrownieDesktop ,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
    id: 8,
  },
  {
    image: {
      thumbnail: PannaThumbnail ,
      mobile: PannaMobile ,
      tablet: PannaTablet,
      desktop: PannaDesktop ,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
    id: 9,
  },
];
