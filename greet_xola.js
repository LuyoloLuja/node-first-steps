const chalk = require('chalk');
const greet = require('./greet');

//console.log(styledMessage);

// using figlet
var figlet = require('figlet');
 
figlet(greet('Xola'), function(err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
	const styledMessage = chalk.bgGreen.black(greet(data));
    console.log(styledMessage);
});