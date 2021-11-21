const fs = require('fs')
const path = require('path')

// //в консоль вивело created, в дереві створенна нова папка
// fs.mkdir(path.join(__dirname, 'notes',), err =>{
//     if (err) throw err
//     console.log('created')
// })
//Додавання данних в текст
// fs.appendFile('test.txt', ' Test text 123.', (err) => {
//     if(err) throw err;
//     console.log('Add');
// });
//  //Перейменування файлу
//  fs.rename('test.txt', 'newTestFile.txt', (err) => {
//      if(err) throw err;
//      console.log('Rename');
//  });
 //Видалення файлу
 fs.unlink('newTestFile.txt', (err) => {
     if(err) throw err;
     console.log('Delete');
 });