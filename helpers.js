/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "🤖 *Public-BOt®️*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🚀 *Public-BOt®️*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🤖 *Public-BOt®️*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
