const mongoose = require('mongoose');

const url='mongodb+srv://yashiporwal10:yashi4959@cluster0.tpnityy.mongodb.net/yashdb?retryWrites=true&w=majority&appName=Cluster0'

//asynchronous function - promise object

mongoose.connect(url)
.then((result) => {
   console.log('database connected')
    
}).catch((err) => {
    console.log(err)
    
});

console.log('task 1');
console.log('task 2');

module.exports = mongoose;

