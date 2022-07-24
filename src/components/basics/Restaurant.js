import React, { useState } from "react";
import Menu from "./menuApi.js";
import "./style.css";
import Navbar from "./Navbar.js";
import MenuCard from "./MenuCard";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant;
