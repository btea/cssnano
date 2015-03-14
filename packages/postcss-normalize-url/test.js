var test = require('tape');
var postcss = require('postcss');
var normalize = require('./');

var tests = [{
    message: 'should strip double quotes',
    fixture: 'h1{background:url("cat.jpg")}',
    expected: 'h1{background:url(cat.jpg)}'
}, {
    message: 'should strip single quotes',
    fixture: 'h1{background:url(\'cat.jpg\')}',
    expected: 'h1{background:url(cat.jpg)}'
}, {
    message: 'should escape special characters',
    fixture: 'h1{background:url("http://website.com/assets)_test.png")}',
    expected: 'h1{background:url(http://website.com/assets\\)_test.png)}'
}, {
    message: 'should not escape more than one special character',
    fixture: 'h1{background:url("http://website.com/assets_(test).png")}',
    expected: 'h1{background:url("http://website.com/assets_(test).png")}'
}, {
    message: 'should remove the default port',
    fixture: 'h1{background:url(http://website.com:80/image.png)}',
    expected: 'h1{background:url(http://website.com/image.png)}'
}, {
    message: 'should not remove the fragment',
    fixture: 'h1{background:url(test.svg#icon)}',
    expected: 'h1{background:url(test.svg#icon)}'
}, {
    message: 'should not remove the fragment in absolute urls',
    fixture: 'h1{background:url(http://website.com/test.svg#icon)}',
    expected: 'h1{background:url(http://website.com/test.svg#icon)}'
}, {
    message: 'should normalize directory traversal',
    fixture: 'h1{background:url(http://website.com/assets/css/../font/t.eot)}',
    expected: 'h1{background:url(http://website.com/assets/font/t.eot)}'
}, {
    message: 'should normalize directory traversal in relative urls',
    fixture: 'h1{background:url(css/../font/t.eot)}',
    expected: 'h1{background:url(font/t.eot)}'
}, {
    message: 'should trim current directory indicator in relative urls',
    fixture: 'h1{background:url(./images/cat.png)}',
    expected: 'h1{background:url(images/cat.png)}'
}, {
    message: 'should do the above tests, stripping quotes',
    fixture: 'h1{background:url("./css/../font/t.eot")}',
    expected: 'h1{background:url(font/t.eot)}'
}, {
    message: 'should normalize urls with special characters',
    fixture: 'h1{background:url("http://website.com/test/../(images)/1.png")}',
    expected: 'h1{background:url("http://website.com/(images)/1.png")}'
}, {
    message: 'should normalize relative urls with special characters',
    fixture: 'h1{background:url("test/../(images)/1.png")}',
    expected: 'h1{background:url("(images)/1.png")}'
}, {
    message: 'should minimise whitespace inside the url function',
    fixture: 'h1{background:url(               test.png           )}',
    expected: 'h1{background:url(test.png)}'
}, {
    message: 'should minimise whitespace inside the url string',
    fixture: 'h1{background:url("               test.png      ")}',
    expected: 'h1{background:url(test.png)}'
}, {
    message: 'should minimise whitespace with special characters',
    fixture: 'h1{background:url("           test (2015).png     ")}',
    expected: 'h1{background:url("test (2015).png")}'
}, {
    message: 'should join multiline url functions',
    fixture: 'h1{background:url("some really long string \\\nspanning multiple lines")}',
    expected: 'h1{background:url("some really long string spanning multiple lines")}'
}, {
    message: 'should process multiple backgrounds',
    fixture: 'h1{background:url(   "./test/../foo/bar.jpg"  ), url("http://website.com/img.jpg")}',
    expected: 'h1{background:url(foo/bar.jpg), url("http://website.com/img.jpg")}'
}, {
    message: 'should pass through when it doesn\'t find a url function',
    fixture: 'h1{color:black;font-weight:bold}',
    expected: 'h1{color:black;font-weight:bold}'
}];

function process (css) {
    return postcss(normalize()).process(css).css;
}

test(require('./package.json').name, function (t) {
    t.plan(tests.length);

    tests.forEach(function (test) {
        t.equal(process(test.fixture), test.expected, test.message);
    });
});