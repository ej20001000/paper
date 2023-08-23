const express = require('express');
const app = express();
const mysql = require('mysql');
const MenuController = require('./src/controller/menu-controller');

// MenuController.findAllMenus();

// MenuController.findByMenuCode(2);

MenuController.registerMenu({
    menuName: '테스트메뉴',
    menuPrice: 1000,
    menuCategoryCode: 4,
    orderableStatus: 'Y'
});

// MenuController.updateMenu({
//     menuCode: 2,
//     menuName: '테스트메뉴',
//     menuPrice: 1000,
//     menuCategoryCode: 4,
//     orderableStatus: 'Y'
// });