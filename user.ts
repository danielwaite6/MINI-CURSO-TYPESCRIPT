// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;
};
const account: AccountInfo = {
    id: 1,
    name: "daniel",
    email: "danwaite@gmail.com",
};

type CharInfo = {
    nickname: string;
    level: number;
};
const char: CharInfo = {
    nickname: '789',
    level: 10,
}
/********************* */
// TYPES - Intersection 

type PlayerInfo = AccountInfo & CharInfo;
const player: PlayerInfo = {
    id: "1",
    name: 'oi',
    email: 'olá',
    nickname: 'manto',
    level: 10
}