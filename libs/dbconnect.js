// Nhớ cài Mongoose
//  npm      i       --S      mongoose
const mongoose = require("mongoose");


/// Thông tin Database Collection / Tables
/*const userName = "dbadmin";
const userPassword = "tYjPsNZo8HJYc8qm";

const dbName = "ATN_SHOP";

const url = "mongodb+srv://" +
    userName + ":" + userPassword +
    "@cluster0.s7ukh.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";*/
/////////////////////////////////////////////////.
const userName = "bao20022";
const userPassword = "passcuatui";

const dbName = "ATN_shop";
 

const url = "mongodb+srv://" +
    userName + ":" + userPassword +     
    "@cluster0.akcdx.mongodb.net/" + dbName +
    "?retryWrites=true&w=majority";

//mongodb+srv://bao20022:<password>@cluster0.akcdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
///////////////////////////////////////////////////a
function connectDB(xURL) {
    // kết nối MongoDB bằng LIB Mongoose
    mongoose.connect(xURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log("\n Error !", err);
        } else {
            console.log("\n DB connected !");
        }
    });
}

module.exports = {
    connectDB: connectDB,
    xURL: url,
}
