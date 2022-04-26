/***
 * @file utils/index.js
 * 
 * @author Bypanghu
 * 
 * @name utils
 * 
 * @description  检测用户电脑是横屏还是竖屏
 * 
 */

export const isLandscape = () => {
    let orientation = 0
    if (window.orientation == 180 || window.orientation == 0) {
        // ("竖屏状态！")
        orientation = 0
    }
    if (window.orientation == 90 || window.orientation == -90) {
        // ("横屏状态！")
        orientation = 1
    }
    return orientation
}



export const isMobile = () => {
    var system = {
        win: false,
        mac: false,
        xll: false,
        ipad: false,
    };
    //检测平台
    var p = navigator.platform;
    console.log("123", p)
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = p == "X11" || p.indexOf("Linux") == 0;
    system.ipad =
        navigator.userAgent.match(/iPad/i) != null ? true : false;

    if (system.win || system.mac || system.xll || system.ipad) {
        console.log("pc");
        return 0
    } else {
        console.log("mobile")
        return 1
    }
}
