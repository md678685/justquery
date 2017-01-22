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

app.listen(config.express.port, (req, res) => {
    console.log(`Justquery listening on port ${config.express.port}`);
});
