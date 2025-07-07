// Quiz validation script to check correct answers against explanations
const fs = require('fs');

// Read the quiz data file
const quizDataContent = fs.readFileSync('/home/berk/projects/cbt/CBT/quiz-data.js', 'utf8');

// Extract the quizData object (remove the const declaration and export)
const quizDataStr = quizDataContent.replace(/^const quizData = /, '').replace(/;?\s*$/, '');
const quizData = eval('(' + quizDataStr + ')');

const issues = [];

// Function to analyze if explanation matches the correct answer
function analyzeQuestion(moduleKey, questionIndex, question) {
    const explanation = question.explanation.toLowerCase();
    const correctIndex = question.correct;
    const correctOption = question.options[correctIndex];
    
    // Simple keyword matching - looking for obvious mismatches
    // This is a basic check, human review will be needed for complex cases
    
    console.log(`\n=== ${moduleKey} - Question ${questionIndex + 1} ===`);
    console.log(`Question: ${question.question}`);
    console.log(`Current correct (index ${correctIndex}): ${correctOption}`);
    console.log(`Explanation: ${explanation}`);
    console.log(`All options:`);
    question.options.forEach((option, idx) => {
        console.log(`  [${idx}] ${option}`);
    });
    
    return {
        module: moduleKey,
        questionIndex: questionIndex + 1,
        question: question.question,
        currentCorrect: correctIndex,
        currentCorrectOption: correctOption,
        explanation: question.explanation,
        options: question.options
    };
}

// Process each module
Object.keys(quizData).forEach(moduleKey => {
    const module = quizData[moduleKey];
    if (module.questions) {
        console.log(`\n\n### Processing module: ${moduleKey} (${module.title}) ###`);
        module.questions.forEach((question, index) => {
            const analysis = analyzeQuestion(moduleKey, index, question);
            issues.push(analysis);
        });
    }
});

console.log(`\n\nTotal questions analyzed: ${issues.length}`);