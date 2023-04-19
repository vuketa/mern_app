import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minus, mollitia eius hic ipsum dignissimos placeat nesciunt architecto ea. Reiciendis.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minus, mollitia eius hic ipsum dignissimos placeat nesciunt architecto ea. Reiciendis.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat minus, mollitia eius hic ipsum dignissimos placeat nesciunt architecto ea. Reiciendis.",
  },
];
