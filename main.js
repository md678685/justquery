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
        jcmpconfig: filterConfig(),
        jcmpargs: jcmp.server.args,
        jcmptps: jcmp.server.currentTickRate
    }
}

function filterConfig() {
    return (config.jcmp.hidePassword ? Object.assign({}, JSON.parse(jcmp.server.config), { password: undefined }) : JSON.parse(jcmp.server.config));
}

app.get("/v0/", (req, res) => {
    res.send(getStatus());
})

app.listen(config.express.port, (req, res) => {
    console.log(`Justquery listening on port ${config.express.port}`);
});
