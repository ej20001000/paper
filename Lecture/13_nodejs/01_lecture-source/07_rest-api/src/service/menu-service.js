const menus = require('../data/menu-detail.json');

exports.findAllMenus = () => menus;

exports.findMenuByCode = (menuCode) => menus.filter(menu => menu.menuCode == menuCode)

exports.registMenu = (menu) => {
    return menu? menu: undefined;
}