import { createSlice } from "@reduxjs/toolkit";

const products = [
    {
      id:0,
      design:'rgb(240,150,148)',
      title: "WD 2TB Elements Portable  ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity ",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id:1,
      design:'rgb(213,213,212)',
      title: "SanDisk SSD PLUS 1TB ",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response ",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id:2,
      design:'rgb(30,30,30)',
      title:
        "Silicon Power 256GB SSD 3D ",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup ",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id:3,
      design:'rgb(203,20,26)',
      title:
        "WD 4TB Gaming Drive ",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
  ];

  const productSlice = createSlice({
    name:'product',
    initialState:{
        products: products,
    },
    reducers: {}
  })

  export default productSlice;