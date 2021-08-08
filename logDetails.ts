// type alias
type Uuid = number | string;

function logDetails(uuid: Uuid, item: string) {
    console.log(`A Product with ${uuid} has a title as ${item}`);
};

function logInfo(uuid: Uuid, user: string) {
    console.log(`A Product with ${uuid} has a title as ${user}`);
};


logDetails(12, "oi");
logDetails("manto", "oi");

logInfo(12, 'qw');
logInfo("12", 'qw');

type Platform = 'Windows' | 'Linux' | 'Mac OS'
function renderPlatform(platform: Platform) {
    return platform;
};
renderPlatform('Mac OS');