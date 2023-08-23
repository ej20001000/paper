const MenuService = require('../service/menu-service');

exports.findAllMenus = async () => {

    const results = await MenuService.findAllMenus();
    
    console.log(results);
};

exports.findByMenuCode = async (menuId) => {

    const results = await MenuService.findByMenuCode(menuId);
    
    console.log(results);
};

exports.registerMenu = async (menu) => {

    const results = await MenuService.registerMenu(menu);
    
    console.log(results);
};

exports.updateMenu = async (menu) => {

    const results = await MenuService.updateMenu(menu);
    
    console.log(results);
}