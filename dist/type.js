"use strict";
// type tuple
var title;
title = [1, "ok"];
/************************* */
var total2;
total2 = [1, 2, 3, 4, 5];
/**************************** */
// type Enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
;
Colors.black;
Colors.white;
/********************* */
// type object
var cart;
cart = {
    key: "1",
};
/********************** */
// type never
throw new Error("Error");
/**************************** */
var total;
total = 0xff0;
// array (type[])
var items;
items = ['oi', 'olá'];
