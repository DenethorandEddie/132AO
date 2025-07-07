// Quiz Application JavaScript
class QuizApp {
    constructor() {
        this.currentModule = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.quizStartTime = null;
        this.selectedQuizLength = 10;
        
        this.initializeEventListeners();
        this.updateModuleQuestionCounts();
        this.showScreen('module-selection');
    }
    
    initializeEventListeners() {
        console.log('Initializing event listeners...');
        
        // Module selection - use event delegation
        document.addEventListener('click', (e) => {
            if (e.target.closest('.module-card')) {
                const card = e.target.closest('.module-card');
                const module = card.dataset.module;
                console.log('Module selected:', module);
                this.selectModule(module);
            }
            
            if (e.target.closest('.length-card')) {
                const card = e.target.closest('.length-card');
                const length = parseInt(card.dataset.length);
                console.log('Length selected:', length);
                this.selectQuizLength(length);
            }
        });
        
        // Back button
        const backButton = document.getElementById('back-to-modules');
        if (backButton) {
            backButton.addEventListener('click', () => {
                console.log('Back to modules clicked');
                this.showScreen('module-selection');
            });
        }
        
        // Quiz controls - check if elements exist
        const nextButton = document.getElementById('next-question');
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                console.log('Next question clicked');
                this.nextQuestion();
            });
        }
        
        const prevButton = document.getElementById('prev-question');
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                console.log('Previous question clicked');
                this.prevQuestion();
            });
        }
        
        const quitButton = document.getElementById('quit-quiz');
        if (quitButton) {
            quitButton.addEventListener('click', () => {
                console.log('Quit quiz clicked');
                this.quitQuiz();
            });
        }
        
        // Results actions
        const retakeButton = document.getElementById('retake-quiz');
        if (retakeButton) {
            retakeButton.addEventListener('click', () => {
                console.log('Retake quiz clicked');
                this.retakeQuiz();
            });
        }
        
        const newModuleButton = document.getElementById('new-module');
        if (newModuleButton) {
            newModuleButton.addEventListener('click', () => {
                console.log('New module clicked');
                this.showScreen('module-selection');
            });
        }
        
        console.log('Event listeners initialized');
    }
    

    updateModuleQuestionCounts() {
        // Her modül için soru sayısını güncelle
        const moduleCards = document.querySelectorAll('.module-card');
        moduleCards.forEach(card => {
            const moduleId = card.dataset.module;
            const badge = card.querySelector('.module-badge');
            
            if (quizData[moduleId] && badge) {
                const questionCount = quizData[moduleId].questions.length;
                badge.textContent = `${questionCount} Questions`;
            }
        });
    }
    
    showScreen(screenId) {
        console.log('Showing screen:', screenId);
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
            console.log('Hiding screen:', screen.id);
        });
        
        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Showing screen:', screenId);
        } else {
            console.error('Screen not found:', screenId);
        }
    }
    
    selectModule(module) {
        console.log('Selecting module:', module);
        this.currentModule = module;
        
        // Check if module exists in quizData
        if (!quizData[module]) {
            console.error('Module not found in quizData:', module);
            return;
        }
        
        const titleElement = document.getElementById('selected-module-title');
        if (titleElement) {
            titleElement.textContent = quizData[module].title;
        } else {
            console.error('selected-module-title element not found');
        }
        
        // Soru sayısı seçeneklerini güncelle
        this.updateQuizLengthOptions(module);
        
        this.showScreen('quiz-length-selection');
    }
    
    updateQuizLengthOptions(module) {
        const totalQuestions = quizData[module].questions.length;
        const lengthOptions = document.querySelector('.length-options');
        
        // Mevcut kartları temizle
        lengthOptions.innerHTML = '';
        
        // Standart seçenekler
        const standardOptions = [10, 25, 50];
        
        // Hangi seçenekleri göstereceğini belirle
        const availableOptions = standardOptions.filter(option => option <= totalQuestions);
        
        // Eğer toplam soru sayısı 50'den farklıysa ve standart seçeneklerde yoksa, gerçek sayıyı ekle
        if (totalQuestions !== 50 && !standardOptions.includes(totalQuestions)) {
            availableOptions.push(totalQuestions);
        }
        
        // Kartları oluştur
        availableOptions.forEach((count, index) => {
            const card = document.createElement('div');
            card.className = 'length-card';
            card.dataset.length = count;
            
            let icon, label, description;
            
            if (count === 10) {
                icon = 'fas fa-clock';
                label = 'Quick Quiz';
                description = 'Perfect for a quick review';
            } else if (count === 25) {
                icon = 'fas fa-star';
                label = 'Standard Quiz';
                description = 'Comprehensive assessment';
            } else if (count === 50) {
                icon = 'fas fa-trophy';
                label = 'Extended Quiz';
                description = 'Thorough knowledge test';
            } else {
                icon = 'fas fa-medal';
                label = 'Complete Quiz';
                description = 'Full expertise challenge';
            }
            
            card.innerHTML = `
                <div class="length-icon">
                    <i class="${icon}"></i>
                </div>
                <div class="length-number">${count}</div>
                <div class="length-label">${label}</div>
                <div class="length-time">~${count} minutes</div>
                <div class="length-description">${description}</div>
            `;
            
            lengthOptions.appendChild(card);
        });
    }
    
    selectQuizLength(length) {
        this.selectedQuizLength = length;
        this.startQuiz();
    }
    
    startQuiz() {
        this.currentQuestions = this.getQuestionsForModule(this.currentModule, this.selectedQuizLength);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.quizStartTime = Date.now();
        
        // Update UI
        document.getElementById('current-module').textContent = quizData[this.currentModule].title;
        document.getElementById('total-questions').textContent = this.currentQuestions.length;
        
        this.showScreen('quiz-screen');
        this.displayQuestion();
    }
    
    getQuestionsForModule(module, count) {
        if (!quizData[module]) return [];
        
        // Tüm soruları al ve karıştır
        let allQuestions = [...quizData[module].questions];
        
        // Fisher-Yates shuffle algoritması ile soruları karıştır
        for (let i = allQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
        }
        
        // İstenen sayıda soru döndür
        return allQuestions.slice(0, count);
    }
    
    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update question counter
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex) / this.currentQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        
        // Update progress percentage
        const progressPercentage = document.getElementById('progress-percentage');
        if (progressPercentage) {
            progressPercentage.textContent = Math.round(progress) + '%';
        }
        
        // Display question
        document.getElementById('question-text').textContent = question.question;
        
        // Display options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Reset UI state
        document.getElementById('explanation-container').style.display = 'none';
        document.getElementById('next-question').disabled = true;
        
        // Update navigation buttons
        const prevButton = document.getElementById('prev-question');
        if (prevButton) {
            prevButton.disabled = this.currentQuestionIndex === 0;
        }
        
        // Show previous answers if going back
        if (this.answers[this.currentQuestionIndex]) {
            this.showPreviousAnswer();
        }
    }
    
    showPreviousAnswer() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const answer = this.answers[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(option => {
            option.classList.add('disabled');
        });
        
        // Mark selected option
        options[answer.selectedIndex].classList.add('selected');
        
        // Show correct/incorrect
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === answer.selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        // Show explanation
        this.showExplanation(question, answer.isCorrect);
        
        // Enable next button
        document.getElementById('next-question').disabled = false;
    }
    
    selectOption(selectedIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // Disable all options
        options.forEach(option => {
            option.classList.add('disabled');
        });
        
        // Mark selected option
        options[selectedIndex].classList.add('selected');
        
        // Show correct/incorrect
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        // Record answer
        const isCorrect = selectedIndex === question.correct;
        this.answers[this.currentQuestionIndex] = {
            selectedIndex,
            isCorrect
        };
        
        if (isCorrect) {
            this.score++;
        }
        
        // Show explanation
        this.showExplanation(question, isCorrect);
        
        // Enable next button
        document.getElementById('next-question').disabled = false;
    }
    
    showExplanation(question, isCorrect) {
        const explanationContainer = document.getElementById('explanation-container');
        const explanationText = document.getElementById('explanation-text');
        const referenceText = document.getElementById('reference-text');
        
        explanationText.textContent = question.explanation;
        referenceText.textContent = question.reference;
        
        // Remove previous classes
        explanationContainer.classList.remove('correct-answer', 'incorrect-answer');
        
        // Add appropriate class based on answer
        if (isCorrect) {
            explanationContainer.classList.add('correct-answer');
        } else {
            explanationContainer.classList.add('incorrect-answer');
        }
        
        explanationContainer.style.display = 'block';
        
        // Smooth scroll to explanation
        explanationContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.currentQuestions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }
    
    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }
    
    showResults() {
        this.showScreen('results-screen');
        const total = this.currentQuestions.length;
        const correct = this.answers.filter(a => a.isCorrect).length;
        const wrong = total - correct;
        const percent = Math.round((correct / total) * 100);
        document.getElementById('final-score').textContent = percent;
        document.getElementById('correct-count').textContent = correct;
        document.getElementById('wrong-count').textContent = wrong;
        document.getElementById('total-count').textContent = total;

        // Yanlış yapılan soruların detaylı açıklamalarını göster
        const breakdownContainer = document.querySelector('.results-breakdown');
        let wrongList = document.getElementById('wrong-details-list');
        if (!wrongList) {
            wrongList = document.createElement('div');
            wrongList.id = 'wrong-details-list';
            wrongList.style.marginTop = '2rem';
            breakdownContainer.parentNode.insertBefore(wrongList, breakdownContainer.nextSibling);
        }
        // Temizle
        wrongList.innerHTML = '';
        const wrongAnswers = this.answers
            .map((a, i) => ({...a, question: this.currentQuestions[i]}))
            .filter(a => !a.isCorrect);
        if (wrongAnswers.length > 0) {
            const title = document.createElement('h3');
            title.textContent = 'Incorrect Questions & Explanations';
            title.style.marginBottom = '1rem';
            wrongList.appendChild(title);
            wrongAnswers.forEach((a, idx) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'wrong-question-detail';
                qDiv.style.marginBottom = '1.5rem';
                qDiv.style.padding = '1rem';
                qDiv.style.background = 'rgba(255,255,255,0.85)';
                qDiv.style.borderRadius = '0.5rem';
                qDiv.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                qDiv.innerHTML = `<strong>Q${idx+1}:</strong> ${a.question.question}<br>
                <span style='color:#ef4444'><strong>Your answer:</strong> ${a.question.options[a.selectedIndex] || '-'}</span><br>
                <span style='color:#10b981'><strong>Correct answer:</strong> ${a.question.options[a.question.correct]}</span><br>
                <strong>Explanation:</strong> ${a.question.explanation}<br>
                <span class='reference'><i class="fas fa-book"></i> <strong>Reference:</strong> ${a.question.reference}</span>`;
                wrongList.appendChild(qDiv);
            });
        } else {
            wrongList.innerHTML = '<h3>All questions answered correctly! 🎉</h3>';
        }
    }
    
    retakeQuiz() {
        this.startQuiz();
    }
    
    quitQuiz() {
        if (confirm('Are you sure you want to quit the quiz? Your progress will be lost.')) {
            this.showScreen('module-selection');
        }
    }
}

// Initialize the quiz application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing QuizApp...');
    
    // Check if required elements exist
    const moduleSelection = document.getElementById('module-selection');
    const quizDataExists = typeof quizData !== 'undefined';
    
    console.log('Module selection element:', moduleSelection ? 'found' : 'not found');
    console.log('Quiz data loaded:', quizDataExists);
    
    if (moduleSelection && quizDataExists) {
        window.quizApp = new QuizApp();
        setupAccessibility();
        console.log('QuizApp initialized successfully');
    } else {
        console.error('Failed to initialize QuizApp - missing elements or data');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const activeScreen = document.querySelector('.screen.active');
    
    if (activeScreen.id === 'quiz-screen') {
        // Number keys 1-4 for option selection
        if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.option');
            if (options[optionIndex] && !options[optionIndex].classList.contains('disabled')) {
                options[optionIndex].click();
            }
        }
        
        // Enter key for next question
        if (e.key === 'Enter') {
            const nextButton = document.getElementById('next-question');
            if (!nextButton.disabled) {
                nextButton.click();
            }
        }
        
        // Escape key to quit
        if (e.key === 'Escape') {
            document.getElementById('quit-quiz').click();
        }
    }
});

// Prevent accidental page refresh during quiz
window.addEventListener('beforeunload', (e) => {
    const activeScreen = document.querySelector('.screen.active');
    if (activeScreen.id === 'quiz-screen') {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Touch support for mobile devices
document.addEventListener('touchstart', (e) => {
    // Prevent double-tap zoom on buttons
    if (e.target.classList.contains('btn-primary') || 
        e.target.classList.contains('btn-secondary') ||
        e.target.classList.contains('option')) {
        e.preventDefault();
    }
});

// Performance optimization: Preload next question
function preloadNextQuestion() {
    // This function could be used to preload images or other resources
    // for the next question to improve user experience
}

// Accessibility improvements - these will be handled in the main DOMContentLoaded
function setupAccessibility() {
    // Add ARIA labels and roles for better accessibility
    const quizScreen = document.getElementById('quiz-screen');
    if (quizScreen) {
        quizScreen.setAttribute('role', 'main');
        quizScreen.setAttribute('aria-label', 'Quiz Interface');
    }
    
    const optionsContainer = document.getElementById('options-container');
    if (optionsContainer) {
        optionsContainer.setAttribute('role', 'radiogroup');
        optionsContainer.setAttribute('aria-label', 'Answer Options');
    }
}

// Analytics and tracking (placeholder)
function trackQuizStart(module) {
    // Track quiz start event
    console.log('Quiz started:', module);
}

function trackQuizComplete(module, score, totalQuestions) {
    // Track quiz completion
    console.log('Quiz completed:', {
        module: module,
        score: score,
        total: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100)
    });
}

function trackQuestionAnswered(questionIndex, isCorrect) {
    // Track individual question answers
    console.log('Question answered:', {
        index: questionIndex,
        correct: isCorrect
    });
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if quizData is loaded
    const quizDataExists = typeof quizData !== 'undefined';
    console.log('Quiz data loaded:', quizDataExists);
    
    if (quizDataExists) {
        console.log('Available modules:', Object.keys(quizData).length);
        console.log('Module names:', Object.keys(quizData));
        // Initialize the quiz application
        window.app = new QuizApp();
        console.log('QuizApp initialized and attached to window');
        
        console.log('QuizApp ready for use');
    } else {
        console.error('Quiz data not loaded. Make sure quiz-data.js is included.');
        alert('Quiz data failed to load. Please refresh the page.');
    }
});