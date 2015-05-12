# css-minification-js-uglification
Grunt sample configuration file for css minification and js uglification for any project

Very basic gruntfile with grunt-contrib-uglify grunt-contrib-concat grunt-contrib-cssmin packages, This project will help you to create single css and and single js files for production environment. These scripts will run on node environment, please make sure you have installed nodejs from https://nodejs.org/ before using these scripts.

These scripts are completely off-line, so it will also works great in iterative development. These script will works with any web application developed using any programming language (.net, ruby, python, perl, php, node, java, grovey, rails, spring, g++ etc.)

css-minification-js-uglification is a compressor that allows you to compress and minify your all javascript files and create a single javascript file. Compressed javascript files are ideal for production environments since they typically reduce the size of the file by 30-90%. Most of the filesize reduction is achieved by removing comments and extra whitespace characters , renaming local variables that are not needed by web browsers or visitors.

### Why Would I Want these scripts?
There are a number of reasons why compressing your javascript files is a good idea:

* Quicker download times for your users.
* Reduced bandwidth consumption of your website.
* Reduced number of HTTP requests on your server when combining many javascript files into one compressed file, thus reducing the server load and allowing more visitors to access your website.
* Comments and whitespace are not needed for javascript execution; Removing them will reduce file size and speed up script execution times.


### Why use CSS Minification?
The purpose of minifcation is to increase the speed of a website. Minimisation can make a script up to 20% smaller, resulting in a faster download time. Some developers will also use it to 'obfuscate' their code. This makes it difficult for the code to be read, thereby making it more difficult to reverse engineer or copy.

It is also common practice to combine all the CSS files for a single website into one file. This has a number of benefits. It reduces the number of HTTP r equest that need to be made to get all the elements of a website. It also makes minification and gzip compression more effective.

### Getting Started

Just copy these two files you your project edit gruntfile.js according to your folder path run these two magic commands :

```html
npm install
grunt
```

### Edit script for custom folder : 
* Change below line for js
```html
files: { 'public/dist/combined.js': ['modules/**/*.js']
```
Description
```html
files: { '<destination minified file path>': [<comma separated list of js file in order you want to combine>]
```
Example
```html
files: { 'public/dist/combined.js': ['vendor/jquery.js','vendor/bootstrap.js','js/main.js']
```
* Change below line for combine path of css
```html
src: ['modules/**/*.css'],
dest: 'public/dist/combined.css'
```	
Description
```html
src: [<comma separated list of css file in order you want to combine>],
dest: '<destination minified file path>'
```	
Example
```html
src: ['a.css','b.css','bootstrap.css'],
dest: 'public/dist/combined.css'
```	
* Change below line for min path of css	
```html
src: ['public/dist/combined.css'],
dest: 'public/dist/combined.min.css'
```	

You will get minified version of css and javascript


### License
The userfeedback project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2015 Ankit Dhir, and contributors to the userfeedback project.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


