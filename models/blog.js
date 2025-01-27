//blog.js
// // Purpose: Define the blog schema and model

const mongoose = require('mongoose');  // Import mongoose package
const Schema = mongoose.Schema;  // Import Schema class from mongoose

const blogSchema = new Schema({  // Create new Schema
    title: {
        type: String,  // Title is a string
        required: true  // Title is required
    },
    snippet: {
        type: String,  // Snippet is a string
        required: true  // Snippet is required
    },
    body: {
        type: String,  // Body is a string
        required: true  // Body is required
    }
}, {timestamps: true});  // Add timestamps to blogSchema


// Create a model
const Blog = mongoose.model('Blog', blogSchema);  // Create a model called Blog from blogSchema

module.exports = Blog;  // Export Blog model