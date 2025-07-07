const fs = require('fs');

// Read and parse the quiz data
const quizContent = fs.readFileSync('/home/berk/projects/cbt/CBT/quiz-data.js', 'utf8');
const quizDataStr = quizContent.replace(/^\/\/ Boeing 737 NG CBT Quiz Data\nconst quizData = /, '').replace(/;?\s*$/, '');
let quizData;
try {
    quizData = eval('(' + quizDataStr + ')');
} catch (e) {
    console.error('Error parsing quiz data:', e.message);
    console.log('First 200 chars of parsed string:', quizDataStr.substring(0, 200));
    process.exit(1);
}

const issues = [];

// Check each module
Object.keys(quizData).forEach(moduleKey => {
    const module = quizData[moduleKey];
    if (!module.questions) return;
    
    module.questions.forEach((question, index) => {
        const explanation = question.explanation.toLowerCase();
        const correctIndex = question.correct;
        const correctOption = question.options[correctIndex].toLowerCase();
        
        // Check for obvious contradictions
        let potentialIssue = false;
        let suggestedIndex = -1;
        
        // Look for keywords in explanation that might indicate the correct answer
        question.options.forEach((option, optIndex) => {
            if (optIndex === correctIndex) return; // Skip current answer
            
            const optionLower = option.toLowerCase();
            
            // Check if explanation contains key phrases from other options
            if (explanation.includes('left pack supplies') && optionLower.includes('left pack supplies')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('right pack supplies') && optionLower.includes('right pack supplies')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('three zones') && optionLower.includes('3 zones')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('six temperature sensors') && optionLower.includes('6 sensors')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('cool') && optionLower.includes('cool') && !correctOption.includes('cool')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('70%') && optionLower.includes('70%')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('129 feet 6 inches') && optionLower.includes('129 ft 6 in')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('normally') && optionLower.includes('normal') && correctOption.includes('no')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('all') && optionLower.includes('all of the above')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            
            // Additional checks for more patterns
            if (explanation.includes('heat exchangers') && optionLower.includes('heat exchangers') && !correctOption.includes('heat exchangers')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('main fuel tanks') && optionLower.includes('main fuel tanks')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('manual') && optionLower.includes('manual') && !correctOption.includes('manual')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('automatic') && optionLower.includes('automatic') && !correctOption.includes('automatic')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('five') && optionLower.includes('5')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('four') && optionLower.includes('4')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('two') && optionLower.includes('2')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
            if (explanation.includes('one') && optionLower.includes('1')) {
                potentialIssue = true;
                suggestedIndex = optIndex;
            }
        });
        
        if (potentialIssue) {
            issues.push({
                module: moduleKey,
                questionIndex: index + 1,
                currentCorrect: correctIndex,
                suggestedCorrect: suggestedIndex,
                question: question.question,
                explanation: question.explanation,
                options: question.options
            });
        }
    });
});

console.log(`Found ${issues.length} potential issues:`);
console.log('='.repeat(80));

issues.forEach(issue => {
    console.log(`\nModule: ${issue.module}`);
    console.log(`Question ${issue.questionIndex}: ${issue.question}`);
    console.log(`Current correct [${issue.currentCorrect}]: ${issue.options[issue.currentCorrect]}`);
    console.log(`Suggested correct [${issue.suggestedCorrect}]: ${issue.options[issue.suggestedCorrect]}`);
    console.log(`Explanation: ${issue.explanation}`);
    console.log('-'.repeat(40));
});

console.log(`\nTotal issues found: ${issues.length}`);