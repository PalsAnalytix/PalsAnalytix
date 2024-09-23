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
const multerUpload = require('./config/multerconfig');
const path = require('path'); 
const fs = require('fs');
const xlsx = require('xlsx');
// const authRoutes = require("./routes/authRoutes")

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

// app.post('/upload-questions', upload.single('file'), async (req, res) => {
//   try {
//     const workbook = xlsx.readFile(req.file.path);
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     const data = xlsx.utils.sheet_to_json(sheet);

//     // Transform data into an array of Question documents
//     const questions = data.map((row) => ({
//       srNo: row['Sr No.'],
//       questionStatement: row['Question Statement'],
//       options: {
//         A: row['Option A'],
//         B: row['Option B'],
//         C: row['Option C'],
//         D: row['Option D'],
//       },
//       rightAnswer: row['Right Answer'],
//       explanation: row['Explanation'],
//       difficulty: row['Difficulty'],
//       subjects: {
//         SCR: row['SCR?'] === 1,
//         FRM: row['FRM?'] === 1,
//         CFA: row['CFA?'] === 1,
//       },
//       chapter: row['Chapter'],  // Make sure your Excel file includes this if relevant
//     }));

//     // Insert the questions into the MongoDB collection
//     await Question.insertMany(questions);

//     res.status(200).send('File uploaded and questions stored successfully!');
//   } catch (error) {
//     res.status(500).send('Error storing questions: ' + error.message);
//   }
// });























// admin backend
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));//uploads middleware

const isAdmin = (req, res, next) => {
  const user = req.user; // Assuming user info is attached to req via authentication middleware

  if (user.email === process.env.ADMIN_EMAIL) {
    next();
  } else {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};

// Add a question with optional images
app.post('/addquestion',multerUpload.fields([
  { name: 'questionImage', maxCount: 1 },
  { name: 'optionImage1', maxCount: 1 },
  { name: 'optionImage2', maxCount: 1 },
  { name: 'optionImage3', maxCount: 1 },
  { name: 'optionImage4', maxCount: 1 },
  { name: 'explanationImage', maxCount: 1 }
]), async (req, res) => {
  try {
    const { body, files } = req;

    const newQuestion = new Question({
      courses: body.courses,
      chapterName: body.chapter,
      questionStatement: body.questionStatement,
      questionImage: files.questionImage ? `/uploads/${files.questionImage[0].filename}` : null,
      options: {
        optionA: body.optionA,
        optionAImage: files.optionImage1 ? `/uploads/${files.optionImage1[0].filename}` : null,
        optionB: body.optionB,
        optionBImage: files.optionImage2 ? `/uploads/${files.optionImage2[0].filename}` : null,
        optionC: body.optionC,
        optionCImage: files.optionImage3 ? `/uploads/${files.optionImage3[0].filename}` : null,
        optionD: body.optionD,
        optionDImage: files.optionImage4 ? `/uploads/${files.optionImage4[0].filename}` : null,
      },
      rightAnswer: body.rightAnswer,
      explanation: body.explanation,
      explanationImage: files.explanationImage ? `/uploads/${files.explanationImage[0].filename}` : null,
      difficulty: body.difficulty,
      tags: body.tags ? body.tags.split(',').map(tag => tag.trim()) : []
    });

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
