const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;


const Category = new Schema({
    name: {type :String, unique:true},
    slug : {type :String, slug: 'name', unique: true},
    
  });

// add plugin

module.exports =  mongoose.model('Category', Category);


