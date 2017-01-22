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

// External modules
const express = require("express");

// Initialise Express
const app = express();

function getGamemode() {
    let packages = jcmp.packages.map(package => package.name);
    if (packages.indexOf("sandbox") > -1) return "sandbox";
}

function getStatus() {
    let players = jcmp.players.map(player => player.name);
    let packages = jcmp.packages.map(package => package.name);
    return {
        serverVersion,
        clientVersion,
        packages,
        players
    }
}

const serverVersion = jcmp.server.version || jcmp.version || config.jcmp.serverVersion;
const clientVersion = jcmp.server.version || jcmp.version || config.jcmp.clientVersion;

app.get("/v0/", (req, res) => {
    res.send(getStatus());
})

app.listen(config.express.port, (req, res) => {
    console.log(`Justquery listening on port ${config.express.port}`);
});
