const AWS = require('aws-sdk');
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
app.use(cors());
app.use(express.json());
const connectDB = require("./config/db");
const User = require("./models/User");
const Question = require('./models/Question');  
const path = require('path');
const upload = require("./config/s3Config");

const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");

dotenv.config();

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

connectDB();

dotenv.config();

// app.use('/api', authRoutes);
app.post("/registerdb", async (req,res) => {
    const { name, email, sub:auth0ID } = req.body;
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create a new user
      user = new User({ name, email, auth0ID });
      await user.save();
    }

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error', error });
  }
});

// admin backend
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));//uploads middleware

const isAdmin = (req, res, next) => {
  const user = req.user; // Assuming user info is attached to req via authentication middleware

  if (user.email === process.env.ADMIN_EMAIL) {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

// Add a question with optional images
app.post('/addquestion', upload.fields([
  { name: 'questionImage', maxCount: 1 },
  { name: 'optionImage1', maxCount: 1 },
  { name: 'optionImage2', maxCount: 1 },
  { name: 'optionImage3', maxCount: 1 },
  { name: 'optionImage4', maxCount: 1 },
  { name: 'explanationImage', maxCount: 1 }
]), async (req, res) => {
  try {
    const { body, files } = req;
    
    // Create a new question object
    const newQuestion = new Question({
      courses: Array.isArray(body.courses) ? body.courses : [body.courses],
      chapterName: body.chapter,
      questionStatement: body.questionStatement,
      questionImage: files.questionImage ? files.questionImage[0].location : null,
      options: {
        optionA: body.optionA,
        optionAImage: files.optionImage1 ? files.optionImage1[0].location : null,
        optionB: body.optionB,
        optionBImage: files.optionImage2 ? files.optionImage2[0].location : null,
        optionC: body.optionC,
        optionCImage: files.optionImage3 ? files.optionImage3[0].location : null,
        optionD: body.optionD,
        optionDImage: files.optionImage4 ? files.optionImage4[0].location : null,
      },
      rightAnswer: body.rightAnswer,
      explanation: body.explanation,
      explanationImage: files.explanationImage ? files.explanationImage[0].location : null,
      difficulty: body.difficulty,
      tags: body.tags ? JSON.parse(body.tags) : []
    });

    // Save question to database
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error adding question:', error);
    res.status(500).json({ error: error.message });
  }
});





app.get('/questions' , async (req, res) => {
  try {
    const { course, chapter } = req.query;
    const filter = {};

    if (course) filter.course = course;
    if (chapter) filter.chapterName = chapter;

    const questions = await Question.find(filter);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a question
app.put('/question/:id' , async (req, res) => {
  try {
    const { id } = req.params;
    const updatedQuestion = await Question.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a question
app.delete('/question/:id' , async (req, res) => {
  try {
    const { id } = req.params;
    await Question.findByIdAndDelete(id);
    res.status(200).json({ message: 'Question deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
