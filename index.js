// index.js (or server.js)

const express = require('express');
const mongoose = require('mongoose');
const saveFormDataRouter = require('./saveFormData');
const allowCors = require('./cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Apply CORS middleware to the router
app.use('/saveLeadData', allowCors(saveFormDataRouter));

// Example root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb+srv://aryansharmaJDTS:3Z6ErXID14umhV9I@cluster0.vscwsxk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB connected");
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => console.error(err));
