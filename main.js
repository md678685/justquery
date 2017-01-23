/* justquery
 * A query plugin for JC3MP servers.
 *
 * Author: MD678685
 * Licensed under the MIT license.
 *
 * Uses Express, a web framework licensed under the MIT license.
 * Requires no other JCMP packages.
 */

// Config
const config = require("./config.json");

// Internal modules
const util = require("./util.js");
const intersect = util.arrayIntersect;

// External modules
const express = require("express");

// Misc constants
const gamemodePackages = ["nanos-freeroam", "race"];

// Initialise Express
const app = express();

// Status functions

function addGamemode(mode) {
    if (gamemodePackages.indexOf(mode) === -1) gamemodePackages.push(mode);
}

function getGamemode() {
    let packages = jcmp.packages.map(jcmpPackage => jcmpPackage.name);
    return intersect(packages, gamemodePackages);
}

function getStatus() {
    let serverVersion = jcmp.server.version || jcmp.version || config.jcmp.serverVersion;
    let clientVersion = jcmp.server.version || jcmp.version || config.jcmp.clientVersion;
    let players = jcmp.players.map(player => player.name);
    let packages = jcmp.packages.map(package => package.name);
    return {
        serverVersion,
        clientVersion,
        packages,
        players,
        gamemode: getGamemode(),
        jcmpconfig: filterConfig(),
        jcmpargs: jcmp.server.args,
        jcmptps: jcmp.server.currentTickRate
    }
}

function filterConfig() {
    return (config.jcmp.hidePassword ? Object.assign({}, JSON.parse(jcmp.server.config), { password: undefined }) : JSON.parse(jcmp.server.config));
}

// JCMP events

jcmp.events.Add("justquery-statusFunc", () => {
    return getStatus;
});

jcmp.events.Add("justquery-status", () => {
    return getStatus();
});

jcmp.events.Add("justquery-gmFunc", () => {
    return getStatus;
});

jcmp.events.Add("justquery-gm", (mode = null) => {
    if (mode) addGamemode(mode);
    return getStatus();
});

// Express routes

app.get("/v0/", (req, res) => {
    res.send(getStatus());
});

// Express listen

app.listen(config.express.port, (req, res) => {
    console.log(`Justquery listening on port ${config.express.port}`);
});
