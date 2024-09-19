//Node.js Chapter

/*1.Intro:-
        1.Node.js is a runtime environment that allows JavaScript to be executed outside of the browser(back-end)
        2.Node.js is a non-blocking,asynchronous programming,I/O operation,Event-Driven server-side programming Architecture model.
*/
/*Basic node.js program*/
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

console.log('This will print before the file contents');


/*2.node command:-This command-line utility is used to run JavaScript files outside of a web browser.
  Example:-
*/
let message = "Hello world";
console.log(message);

/*3.Node REPL:-
            1.You can also run Node.js without providing a specific file. 
            2.When you do this, Node.js starts an interactive prompt (REPL - Read-Eval-Print Loop) where you can execute JavaScript code line by line
*/


/*4.Process Object:-Gives you control over the current process
   
   process.exit(0);ends current process
   "0" argument signifies process is successful
   non-zero value specifies process encountered an error
*/


/*5.porcess.argv property:- is an array containing comman line arguments passed whtn process was launched

js file: console.log(process.argv);
in terminal: $ node showargv.js one --and two
outpit: ["node", "/path/to/showargv.js", "one", "--and", "two"]
*/



/*6.Modules:- Two modules
          1.Common JS (using require)
          2.ES modules(uisng import and export)
1.CommonJS:-
          1.Uses require to import/load modules
          2.files with .js extension
2.ES modules:-
          1.Uses import and export statements
          2.files with .mjs extension or "type":"module" in package.json are treated as ES modules
*/


/*7.NPM:-
         1.A package is a directory that has one or more modules grouped together  
         2.NPM (Node Package Manager) is used to manage JavaScript packages.
Installing a package:-
         1.To install a package, use the npm install command.   
Using installed package:-
         1.After installing the ini package, you can use it in your Node.js script
*/
const { parse } = require("ini");
console.log(parse("x = 1\ny = 2")); // Output: { x: '1', y: '2' }



/*8.package.json file:-
                      1.After installing packages, you'll find a package.json file in your project directory.
                      2.It serves as project manifest,containing metadata about project and its dependencies
                      3.Example:-

{
  "author": "Sumanth",
  "name": "eloquent-javascript-robot",
  "description": "Simulation of a package-delivery robot",
  "version": "1.0.0",
  "main": "run.mjs",
  "dependencies": {
    "dijkstrajs": "^1.0.1",
    "random-item": "^1.0.0"
  },
  "license": "ISC"
}
                          4.Install all dependencies:-using  $ npm install
                          5.install new dependency:- using   $ npm install lodash
                          6.Publishing Packages with NPM:-
                            1.create a package.json file
                            2.run npm publish
  
*/



/*9.Versions in package.json:-
                           1.The package.json file uses semantic versioning (semver) to specify these versions.
                           2.Semantic versioning consists of three numbers in the format MAJOR.MINOR.PATCH
                           3.For example, ^2.3.0:
                                                2 is the major version.
                                                3 is the minor version.
                                                0 is the patch version.
                                                The caret (^) indicates that any version that does not break compatibility is allowed
*/                                                



//10.fs module:-The node:fs module in Node.js provides functions to interact with the filesystem, including reading, writing, and managing files and directories 
    //1.readFile function:-The readFile function reads a file and executes a callback with the content or an error
    import { readFile } from "node:fs";

    readFile("file.txt", "utf8", (error, text) => {
      if (error) throw error;
      console.log("The file contains:", text);
    });
    
    //2.Buffer function:-When you omit the encoding, readFile returns a Buffer, which is an array-like object of bytes.
    import { readFile } from "node:fs";

    readFile("file.txt", (error, buffer) => {
      if (error) throw error;
      console.log("The file contained", buffer.length, "bytes.");
      console.log("The first byte is:", buffer[0]);
    });
           
    //3.writeFile function:-The writeFile function writes data to a file.
    import { writeFile } from "node:fs";

writeFile("graffiti.txt", "Node was here", (err) => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log("File written.");
});

    /*4.addtional functions:-
                            readdir: Lists files in a directory. 
                            stat: Retrieves file metadata.
                            rename: Renames a file.
                            unlink: Deletes a file.   */
    
    //6.node:fs/promises:-The node:fs/promises module offers promise-based versions of the fs functions
    import { readFile } from "node:fs/promises";

    readFile("file.txt", "utf8")
      .then(text => console.log("The file contains:", text))
      .catch(error => console.error("Error reading file:", error));
               
    //7.Synchronous functions:-Block program execution; use cautiously.These functions have Sync added to their names, like readFileSync.           */
    import { readFileSync } from "node:fs";

    console.log("The file contains:", readFileSync("file.txt", "utf8"));
    


//11.HTTP module:-The node:http module enables you to create an HTTP server to handle incoming requests and send responses. 
import { createServer } from "node:http";

let server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
    <h1>Hello!</h1>
    <p>You asked for <code>${request.url}</code></p>`);
  response.end();
});

server.listen(8000);
console.log("Listening! (port 8000)");


