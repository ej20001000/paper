// const MenuRepository = require('../repository/menu-repository');
const { findByMenuCode: findByMenuId } = require('../controller/menu-controller');
const getConnection = require('../database/connection');
const MenuRepository = require('../repository/menu-repository');

exports.findAllMenus = () => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = MenuRepository.findAllMenus(connection);

        connection.end();

        resolve(results);
    });
};

exports.findByMenuCode = (menuCode) => {

    return new Promise((resolve, reject) => {

        const connection = getConnection();

        const results = MenuRepository.findByMenuId(connection, menuCode);

        connection.end();

        resolve(results);
    });
}

exports.registerMenu = (menu) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();
        
        connection.beginTransaction();

        try {
            const results = await MenuRepository.registerMenu(connection, menu);
            connection.commit();

            const insertedRow = MenuRepository.findByMenuId(connection, results.insertId);

            resolve(insertedRow);
        } catch (error) {
            connection.rollback();

            console.log('rollbacked');

            reject(error);

        } finally {

            connection.end();

            console.log('connection end');
        }



    });
}

exports.updateMenu = (menu) => {

    return new Promise((resolve, reject) => {
        const connection = getConnection();

        connection.beginTransaction();

        try {
            const results = MenuRepository.updateMenu(connection, menu);
            connection.commit();
            resolve(results);
        } catch (error) {
            connection.rollback();
            reject(error);
        } finally {
            connection.end();
        }
    });
}