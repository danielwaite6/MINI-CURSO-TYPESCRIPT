interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[] | number[];
    getSimilars?: (title: string) => void;
};

const tlou: Game = {
    title: 'The Last of Us',
    description: 'The best game of history',
    genre: 'Action',
    platform: ['1', '2', '3', '4',],
    getSimilars(title: string): void {
        console.log("title: ", title);
    },
};

//tlou.genre = "new";
console.log(tlou.genre);


//if (tlou.getSimilars) {
tlou.getSimilars!('title: stringppppp');
//}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
};

const leftBehind: DLC = {
    title: 'Jarabias',
    description: 'comeguerebias',
    genre: 'Action Move',
    platform: ['CANTA', 'ANDA', 'E', 'CANTARÉBIAS'],
    originalGame: tlou,
    newContent: ['2', '1'],
};

class CreateGame implements Game {
    title: string;
    description: string;
    genre: string;
    platform?: string[] | number[] | undefined;
    getSimilars?: ((title: string) => void) | undefined;

    constructor({ title, description, genre }: Game) {
        this.title = title;
        this.description = description;
        this.genre = genre;
    };
};
//const labasuria = new CreateGame();