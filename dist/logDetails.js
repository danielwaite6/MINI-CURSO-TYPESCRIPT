"use strict";
function logDetails(uuid, item) {
    console.log("A Product with " + uuid + " has a title as " + item);
}
;
function logInfo(uuid, user) {
    console.log("A Product with " + uuid + " has a title as " + user);
}
;
logDetails(12, "oi");
logDetails("manto", "oi");
logInfo(12, 'qw');
logInfo("12", 'qw');
function renderPlatform(platform) {
    return platform;
}
;
renderPlatform('Mac OS');
