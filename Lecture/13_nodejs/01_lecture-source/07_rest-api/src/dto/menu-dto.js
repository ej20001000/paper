class MenuDTO {
    menuCode;
    menuName;
    menuPrice;
    categoryName;
    isOrderable;
    detail;

    constructor(data) {
        this.menuCode = data.menuCode;
        this.menuName = data.menuName;
        this.menuPrice = data.menuPrice;
        this.categoryName = data.categoryName;
        this.isOrderable = data.isOrderable;
        this.detail = data.detail;
    }
}

module.exports = MenuDTO;