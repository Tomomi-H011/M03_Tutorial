const express = require('express');  // Import express package
const blogController = require('../controllers/blogController');  // Import blogController.js
const router = express.Router();  // Create a new router instance


// Blog routes
router.get('/', blogController.blog_index);  // Get request for '/blogs'

router.post('/', blogController.blog_create_post);  // Post request for '/blogs'

router.get('/create', blogController.blog_create_get);  // Get request for '/blogs/create'

router.get('/:id', blogController.blog_details);  // Get request for '/blogs/:id'

router.delete('/:id', blogController.blog_delete);  // Delete request for '/blogs/:id'


module.exports = router;  // Export router instance