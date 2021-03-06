var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var user_schema = new Schema({
    name      : String,
    user_name : { type : String, required : true, unique : true },
    password  : { type : String, required : true },
    admin     : Boolean,
    image  : String,
    created_at : { type : Date, default : Date.now },
    updated_at : { type : Date, default : Date.now }
});

user_schema.methods.smile = function(){
    this.name += ' :-)';
};

user_schema.methods.findSimilarTypes = function(cb) {
    return this.model('Animal').find({ type: this.type }, cb);
};

var User = mongoose.model( 'User', user_schema );

module.exports = User;