const { Schema, model, Types } = require('../connection');


const projectSchema = new Schema({
    
    user: {
        type: Types.ObjectId, 
        ref: 'user',       
        required: true
    },

  
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100 
    },
    
   
    prompt: {
        type: String,
        required: true
    },
    
    code: {
        type: String,
        required: true
    },
    
    description: {
        type: String,
        maxlength: 500
    },

   
    language: {
        type: String,
        default: 'jsx' 
    },

    
    createdAt: {
        type: Date,
        default: Date.now
    },
    
  
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('project', projectSchema);