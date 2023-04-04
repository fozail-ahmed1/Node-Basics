const fs = require('fs');

//read a file synchronously
//const text = fs.readFileSync('read-me.txt', 'utf-8');

//onsole.log(text);

//write into a file synchronously
//fs.writeFileSync('write.txt', text);

//write and read into a file asynchronously
// fs.readFile('read-me.txt', 'utf-8', function(error, data) {
//     // console.log(data);
//     fs.writeFile('write.txt', data, function(error, data) {
//         if (error) {
//             console.log('error')
//         }
//     })
// });

// console.log('hi there');


// deleting file
// fs.unlink('write.txt', function(error) {
//     console.log(error);
// })

//to create a directory synchronously
//fs.mkdirSync('my-folder');

//to remove a directory synchronously
//fs.rmdirSync('my-folder');

// to create a directory synchronously
// fs.mkdir('my-folder', () => {
//     fs.readFile('read-me.txt', 'utf-8', (error, data) => {
//         fs.writeFile('./my-folder/write-me.txt', data, () => {})
//     })
// })


//to remove a directory synchronously

fs.unlink('./my-folder/write-me.txt', () => {
    fs.rmdir('my-folder', (error) => {
        console.log(error);
    })
})