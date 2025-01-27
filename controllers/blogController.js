//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const Blog = require('../models/blog');  // Import Blog model from blog.js


const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})  // Find all blogs in MongoDB and sort by createdAt in descending order
    .then((result) => {
        res.render('blogs/index', { title: 'All Blogs', blogs: result});  // Render index.ejs file in views folder to browser. Pass title & blogs variables to index.ejs
    })
    .catch((err) => {
        console.log(err);  // Log error to console
    });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    // console.log(id);
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { blog: result, title: 'Blog Details'})
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blog not found'});  // Send 404.ejs file to browser
        });
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body); // Create a new Blog instance from form data

    blog.save()  // Save blog to MongoDB
        .then((result) => {
            res.redirect('/blogs');  // Redirect to /blogs
        })
        .catch((err) => {
            console.log(err);  // Log error to console
        }); 
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs'})
        })
        .catch(err => {
            console.log(err);
        })
}


//exporting the functions
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
} 