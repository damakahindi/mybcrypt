var bcrypt = require('bcrypt');
const password = 'goyyal'



if (process.argv[2] == 'help') {
    console.log("***********************************************************************************************\n");
    console.log("1. You can test a value against a hashed value.");
    console.log("-----------------------------------------------------");
    console.log("Example");
    console.log("-------------");
    console.log("node index.js test 'goyyyal' '$2a$13$Kx5OPoh7/ktLj.FAWxsS1.VR.bMQtU9lr7Ws7SGD17VfFeM06tN/K' ");
    console.log("-----------------------------------------------------\n");
    console.log("2.You can get for a hashed value for a word. Default is 13 if none is added");
    console.log("-----------------------------------------------------");
    console.log("Example");
    console.log("-------------");
    console.log("node index.js hash 'goyyal'\n");
    console.log("-------------");
    console.log("node index.js hash 'goyyal' 5 \n");
    console.log("***********************************************************************************************");
} else if(process.argv[2] == 'test'){
    console.log(`Testing..${process.argv[3]}\t Against.. ${process.argv[4]} hash`);
    bcrypt.compare(process.argv[3], process.argv[4], function(err, res) {
        if(err){
            console.log("err")
            return err
        }
        console.log(res)
        return res 
    });

} else if (process.argv[2] == 'hash'){
    console.log(`Hashing..${process.argv[3]}\t`);
    const saltRounds = Number(process.argv[4]) ? Number(process.argv[4]) : 13;
    console.log(`Using ${saltRounds} Salt Rounds`)
    console.log(typeof saltRounds)
    bcrypt.hash(process.argv[3], saltRounds, function(err, hash) {
        if(err){
            console.log(err)
            return err
        }
        console.log(hash)
        return hash
    });
}
else {
   console.log("You have an invalid Args");
}


// process.argv.forEach((val, index) => {
//     console.log(`${index}:${val}`)
// })
// const hashPassword = '$2a$13$5SdqWsa.Hwe0odtF57zm3eycwb4IdbjpIw94kDtGlXDyFQxdNSsb2'




