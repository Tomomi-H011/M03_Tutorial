const express = require('express');  // Import express.js package
const morgan = require('morgan');  // Import morgan package
const mongoose = require('mongoose');  // Import mongoose package
const blogRoutes = require('./routes/blogRoutes'); // Import blogRoutes.js

// express app
const app = express();  // Create express app instance

// register view engine
app.set('view engine', 'ejs');  // Set view engine to ejs

// Connect to MongoDB
const dbURI = 'mongodb+srv://tomh11:Bt6R-Upz-Vdf5dE@cluster0.qea7x.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';

//mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})  // Connect to MongoDB
mongoose.connect(dbURI) 
    .then((result) => app.listen(3000)) // After connected to db, listen for requests on port 3000
    .catch((err) => console.log(err));  // If error, log to console


// Middleware & Static files
app.use(express.static('public'));  // Use static files in public folder. Ex. styles.css
app.use(express.urlencoded({extended: true}));  // Use middleware to pass form data
app.use(morgan('dev'));  // Use morgan middleware for logging

// mongoose and mongo sandox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({  // Create a new Blog instance
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()  // Save blog to MongoDB
//         .then((result) => {
//             res.send(result);  // Send result to browser
//         })
//         .catch((err) => {
//             console.log(err);  // Log error to console
//         });
// });


// app.get('/all-blogs', (req, res) => {
//     Blog.find()  // Find all blogs in MongoDB
//         .then((result) => {
//             res.send(result);  // Send result to browser
//         })
//         .catch((err) => {
//             console.log(err);  // Log error to console
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('6796ee97dd5519020af6febd')  // Find blog by id in MongoDB
//         .then((result) => {
//             res.send(result);  // Send result to browser
//         })
//         .catch((err) => {
//             console.log(err);  // Log error to console
//         });
// });


// Routes
app.get('/', (req, res) => {  // Get request for '/'
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    // res.render('index', { title: 'Home', blogs});  // Render index.ejs file in views folder to browser. Pass title & blogs variables to index.ejs
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

//blog routes
app.use('/blogs',blogRoutes);

// 404 page (This code needs to be last)
app.use((req, res) => {  // Use middleware for 404 page
    res.status(404).render('404', { title: '404'});  // Send 404.ejs file to browser
});  // End middleware