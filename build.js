var gulp = require('gulp'),
    gutil = require('gulp-util'),
    dateformat = require('dateformat');

var notify = require('gulp-notify');

function getLogPrefix( str ) {
    var color = gutil.colors.yellow;
    if ( str[ 0 ] == '!' ) {
        str = str.substring( 1, str.length );
        color = gutil.colors.red;
    }
    return ( "[ " + color( str ) + " ]");
}

notify.logLevel(0);

Build = {};

Build.log = function() {
    var time = '['+gutil.colors.grey(dateformat(new Date(), 'HH:MM:ss'))+']';
    process.stdout.write(time + ' ');

    var args = Array.prototype.slice.call(arguments);
    if (args.length > 1) {
        process.stdout.write(getLogPrefix(args.shift()) + ' ');
    }
    console.log.apply(console, args);
}

Build.error = function(title, message) {
    gulp.src("")
        .pipe( notify({
            title: title,
            message: message
        }));
}

module.exports = Build;
