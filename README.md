# Student Grade Calculator

A simple and responsive Student Grade Calculator built using HTML, CSS, and JavaScript.

## Features

- Enter student name and subject marks
- Calculate total marks
- Calculate percentage
- Automatically determine grade
- Check PASS / FAIL status
- Validate marks between 0 and 100
- Prevent calculation when required fields are empty
- Reset the calculator
- Responsive design for smaller screens

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Grading System

| Percentage | Grade |
|------------|-------|
| 90 - 100   | O     |
| 80 - 89    | A     |
| 70 - 79    | B     |
| 60 - 69    | C     |
| 50 - 59    | D     |
| 40 - 49    | E     |
| Below 40   | F     |

A student must score at least 30 marks in every subject to pass.

## How It Works

1. Enter the student's name.
2. Enter marks for all five subjects.
3. Click **Calculate Grade**.
4. The application calculates the total and percentage.
5. JavaScript determines the grade and PASS/FAIL status.
6. The result is displayed in a result card.

## Project Structure

student-grade-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md

## Future Improvements

- Add subject-wise performance analysis
- Add highest and lowest subject
- Add grade visualization
- Add downloadable result
- Store previous results
