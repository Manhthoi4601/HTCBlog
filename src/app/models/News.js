const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;


const News = new Schema({
    name: {type: String, require: true,},
    description: { type: String },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require:true,
    },
    content: {type: String},
    image: {type: String},
    slug : {type :String, slug: 'name', unique: true},
    
  },{
    timestamps: true
  });


// add plugin
mongoose.plugin(slug);
News.plugin(mongooseDelete,  {deletedAt:true, overrideMethods: 'all' });

module.exports=  mongoose.model('News', News);


