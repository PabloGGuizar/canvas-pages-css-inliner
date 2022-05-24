// Run this script in a terminal by typing "node app"

var juice = require('juice');
var ncp = require('copy-paste');

juice.juiceFile('./index.html', {removeStyleTags: true}, (err, html) => {
    res = html.replaceAll(/(class="[a-z\d\- ]+")/gi, '');

    ncp.copy(res, () => {
        console.log('Copied to clipboard!');
    });

});