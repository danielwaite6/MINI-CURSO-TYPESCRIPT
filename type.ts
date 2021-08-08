// type tuple
let title: [number, string];
title = [1, "ok"];
/************************* */

let total2: Array<number>;
total2 = [1, 2, 3, 4, 5]
/**************************** */

// type Enum
enum Colors {
    white = '#fff',
    black = '#000',
};

Colors.black
Colors.white
/********************* */

// type object
let cart: object;
cart = {
    key: "1",
}
/************************* */

// type  null | undefined
type Bla = null | undefined;

/********************** */

// type never

throw new Error("Error");
/**************************** */

let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ['oi', 'olá'];
