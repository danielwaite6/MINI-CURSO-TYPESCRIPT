"use strict";
;
var tlou = {
    title: 'The Last of Us',
    description: 'The best game of history',
    genre: 'Action',
    platform: ['1', '2', '3', '4',],
    getSimilars: function (title) {
        console.log("title: ", title);
    },
};
//tlou.genre = "new";
console.log(tlou.genre);
//if (tlou.getSimilars) {
tlou.getSimilars('title: stringppppp');
;
var leftBehind = {
    title: 'Jarabias',
    description: 'comeguerebias',
    genre: 'Action Move',
    platform: ['CANTA', 'ANDA', 'E', 'CANTARÉBIAS'],
    originalGame: tlou,
    newContent: ['2', '1'],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(_a) {
        var title = _a.title, description = _a.description, genre = _a.genre;
        this.title = title;
        this.description = description;
        this.genre = genre;
    }
    ;
    return CreateGame;
}());
;
//const labasuria = new CreateGame();
