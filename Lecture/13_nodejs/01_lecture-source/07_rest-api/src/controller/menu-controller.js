const MenuService = require('../service/menu-service');
const HttpStatus = require('http-status')
const MenuDTO = require('../dto/menu-dto');

exports.findAllMenus = (req, res, next) => {

    const menus = MenuService.findAllMenus();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: menus
    });
}

exports.findMenuByCode = (req, res, next) => {

    const menuCode = req.params.menuCode;
    console.log(menuCode);
    const menu = MenuService.findMenuByCode(menuCode);

    if (menu && menu.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'Not Found',
            code: -99999,
            results: [],
            links: {
                rel: 'menuRegist',
                method: 'POST',
                href: 'http://localhost:8888/menus'
            }
        })
    } else {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            results: menu
        });
    }
}

exports.registMenu = (req, res, next) => {

    const result = MenuService.registMenu(new MenuDTO(req.body));
    console.log(result);

    // MenuService.registMenu(menu);

    if (result) {
        res.status(HttpStatus.CREATED).send({
            status: HttpStatus.CREATED,
            message: 'Created',
            results: {
                menuCode: result.menuCode,
                menuName: result.menuName
            },
            contentLocation: `/menus/${result.menuCode}`
        });
    } else {
        res.status(HttpStatus.BAD_REQUEST).send({
            status: HttpStatus.BAD_REQUEST,
            message: 'Bad Request',
            code: -99998,
            results: [],
            links: {
                rel: 'menuRegist',
                method: 'POST',
                href: 'http://localhost:8888/menus'
            }

        });

    }
}