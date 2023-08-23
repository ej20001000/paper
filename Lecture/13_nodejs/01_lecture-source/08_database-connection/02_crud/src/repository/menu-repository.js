const menuQeury = require('../database/menu-query');

exports.findAllMenus = (connection) => {
    return new Promise((resolve, reject) => {

        connection.query(menuQeury.findAllMenus(), (error, results, fields) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
};

exports.findByMenuId = (connection, menuId) => {
    return new Promise((resolve, reject) => {

        connection.query(menuQeury.findByMenuId(), [menuId], (error, results, fields) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
};

exports.registerMenu = (connection, menu) => {
    return new Promise((resolve, reject) => {

        connection.query(menuQeury.registerMenu(), [
            menu.menuName,
            menu.menuPrice,
            menu.menuCategoryCode,
            menu.orderableStatus
        ], (error, results, fields) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
};

exports.updateMenu = (connection, menu) => {
    return new Promise((resolve, reject) => {

        connection.query(menuQeury.updateMenu(), [
            menu.menuCode,
            menu.menuName,
            menu.menuPrice,
            menu.menuCategoryCode,
            menu.orderableStatus
        ], (error, results, fields) => {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}