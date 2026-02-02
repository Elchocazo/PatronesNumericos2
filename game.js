// Game State
let gameState = {
    currentQuestionIndex: 0,
    score: 0,
    stars: 0,
    streak: 0,
    correctAnswers: 0,
    totalAnswered: 0,
    currentLevel: 1,
    lives: 3,
    checkpoint: 0,
    coins: 0,
    ownedItems: [],
    equippedItems: {
        hat: null,
        glasses: null,
        clothes: null
    }
};

let answered = false;
let canAnswer = true;

// DOM Elements
const scoreEl = document.getElementById('score');
const starsEl = document.getElementById('stars');
const streakEl = document.getElementById('streak');
const livesEl = document.getElementById('lives');
const coinsEl = document.getElementById('coins');
const progressBar = document.getElementById('progressBar');
const levelIndicator = document.getElementById('levelIndicator');
const questionText = document.getElementById('questionText');
const visualHelp = document.getElementById('visualHelp');
const optionsGrid = document.getElementById('optionsGrid');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const streakIndicator = document.getElementById('streakIndicator');
const streakCount = document.getElementById('streakCount');
const gameArea = document.getElementById('gameArea');
const completionScreen = document.getElementById('completionScreen');
const rewardModal = document.getElementById('rewardModal');

// Initialization
function init() {
    loadGameState();
    updateStats();
    updateCharacterDisplay();
    loadQuestion();

    nextBtn.addEventListener('click', () => {
        gameState.currentQuestionIndex++;
        saveGameState();
        loadQuestion();
    });
}

function saveGameState() {
    localStorage.setItem('aventuraMatematica_gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem('aventuraMatematica_gameState');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            gameState = { ...gameState, ...parsed };
            // Resume from last question (or checkpoint)
            // If they finished, the completion screen will show
        } catch (e) {
            console.error("Error loading game state", e);
        }
    }
}

function updateStats() {
    scoreEl.textContent = gameState.score;
    starsEl.textContent = '⭐ ' + gameState.stars;
    streakEl.textContent = '🔥 ' + gameState.streak;
    coinsEl.textContent = '🪙 ' + gameState.coins;

    let heartsDisplay = '';
    for (let i = 0; i < 3; i++) {
        heartsDisplay += i < gameState.lives ? '❤️' : '🤍';
    }
    livesEl.textContent = heartsDisplay;
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function loadQuestion() {
    if (gameState.currentQuestionIndex >= questions.length) {
        showCompletionScreen();
        return;
    }

    const question = questions[gameState.currentQuestionIndex];

    if (question.level !== gameState.currentLevel) {
        const completedLevel = gameState.currentLevel;
        gameState.currentLevel = question.level;
        showLevelReward(completedLevel);
    }

    if (gameState.currentQuestionIndex > 0 && gameState.currentQuestionIndex % 5 === 0 && gameState.currentQuestionIndex !== gameState.checkpoint) {
        gameState.checkpoint = gameState.currentQuestionIndex;
        showCheckpointNotification();
        saveGameState();
    }

    answered = false;
    canAnswer = true;
    feedback.classList.add('hidden');
    nextBtn.disabled = true;

    questionText.textContent = question.question;
    visualHelp.textContent = question.visual;
    levelIndicator.textContent = levelNames[question.level];

    const progress = Math.round((gameState.currentQuestionIndex / questions.length) * 100);
    progressBar.style.width = progress + '%';
    progressBar.textContent = `${gameState.currentQuestionIndex}/${questions.length}`;

    const optionsWithIndex = question.options.map((option, index) => ({
        text: option,
        isCorrect: index === question.correct
    }));

    const shuffledOptions = shuffleArray(optionsWithIndex);

    optionsGrid.innerHTML = '';
    shuffledOptions.forEach((option) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.onclick = (e) => selectAnswer(option.isCorrect, e.target);
        optionsGrid.appendChild(btn);
    });

    if (gameState.streak >= 3) {
        streakIndicator.classList.add('show');
        streakCount.textContent = gameState.streak;
    } else {
        streakIndicator.classList.remove('show');
    }
}

function selectAnswer(isCorrect, clickedButton) {
    if (answered || !canAnswer) return;

    answered = true;
    canAnswer = false;
    gameState.totalAnswered++;

    const question = questions[gameState.currentQuestionIndex];
    const buttons = optionsGrid.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.disabled = true);

    const correctButton = Array.from(buttons).find(btn => {
        return btn.textContent === question.options[question.correct];
    });

    if (isCorrect) {
        clickedButton.classList.add('correct');
        feedback.textContent = '✅ ' + question.explanation;
        feedback.className = 'feedback correct';

        gameState.correctAnswers++;
        gameState.streak++;

        let points = 10;
        if (gameState.streak >= 5) points = 20;
        else if (gameState.streak >= 3) points = 15;
        gameState.score += points;

        let coinsEarned = 5;
        if (gameState.streak >= 5) coinsEarned = 15;
        else if (gameState.streak >= 3) coinsEarned = 10;
        gameState.coins += coinsEarned;
        showCoinReward(coinsEarned);

        if (gameState.correctAnswers % 10 === 0) {
            gameState.stars++;
            showStarAnimation();
        }

        updateStats();
        setTimeout(() => {
            nextBtn.disabled = false;
        }, 800);
    } else {
        clickedButton.classList.add('incorrect');
        if (correctButton) {
            correctButton.classList.add('correct');
        }
        feedback.textContent = '❌ Intenta de nuevo. ' + question.explanation;
        feedback.className = 'feedback incorrect';

        gameState.streak = 0;
        gameState.lives--;
        updateStats();

        if (gameState.lives <= 0) {
            setTimeout(() => {
                returnToCheckpoint();
            }, 1500);
        } else {
            setTimeout(() => {
                nextBtn.disabled = false;
            }, 800);
        }
    }

    feedback.classList.remove('hidden');
    saveGameState();
}

function showCoinReward(amount) {
    const coinEl = document.createElement('div');
    coinEl.className = 'coin-reward';
    coinEl.textContent = '+' + amount + ' 🪙';
    coinEl.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    coinEl.style.top = window.innerHeight / 2 + 'px';
    document.body.appendChild(coinEl);

    setTimeout(() => coinEl.remove(), 1000);
}

function updateCharacterDisplay() {
    const itemsContainer = document.getElementById('characterItems');
    if (!itemsContainer) return;
    itemsContainer.innerHTML = '';

    const categories = ['hat', 'glasses', 'clothes'];
    categories.forEach(cat => {
        if (gameState.equippedItems[cat]) {
            const item = findItemById(gameState.equippedItems[cat]);
            if (item) {
                const el = document.createElement('div');
                el.className = `character-item item-${cat === 'hat' ? 'hat' : cat === 'glasses' ? 'glasses' : 'clothes'}`;
                el.textContent = item.icon;
                itemsContainer.appendChild(el);
            }
        }
    });
}

function showCheckpointNotification() {
    const notification = document.getElementById('checkpointNotification');
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 2000);
}

function returnToCheckpoint() {
    feedback.textContent = '💔 Has perdido todas tus vidas. Volviendo al último punto de control...';
    feedback.className = 'feedback incorrect';

    setTimeout(() => {
        gameState.lives = 3;
        gameState.currentQuestionIndex = gameState.checkpoint;
        updateStats();
        saveGameState();
        loadQuestion();
    }, 2000);
}

function showStarAnimation() {
    starsEl.style.transform = 'scale(1.5)';
    starsEl.style.transition = 'transform 0.3s ease';
    setTimeout(() => starsEl.style.transform = 'scale(1)', 300);
}

function showLevelReward(completedLevel) {
    const rewardIcon = document.getElementById('rewardIcon');
    const rewardText = document.getElementById('rewardText');
    const rewardModal = document.getElementById('rewardModal');

    const icons = ['🌟', '⭐', '✨', '💫', '🏆', '👑', '🎖️', '🥇', '🎯', '⚡'];
    rewardIcon.textContent = icons[completedLevel % icons.length] || '🌟';
    rewardText.textContent = rewardMessages[completedLevel] || '¡Felicitaciones por completar este nivel!';

    rewardModal.classList.add('show');
}

function closeRewardModal() {
    document.getElementById('rewardModal').classList.remove('show');
}

function showCompletionScreen() {
    gameArea.style.display = 'none';
    completionScreen.classList.add('show');

    const accuracy = gameState.totalAnswered > 0 ? Math.round((gameState.correctAnswers / gameState.totalAnswered) * 100) : 0;

    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalStars').textContent = '⭐ ' + gameState.stars;
    document.getElementById('accuracy').textContent = accuracy + '%';

    // Clear save on completion or keep it? Let's keep it but they can restart
}

function restartGame() {
    gameState = {
        currentQuestionIndex: 0,
        score: 0,
        stars: 0,
        streak: 0,
        correctAnswers: 0,
        totalAnswered: 0,
        currentLevel: 1,
        lives: 3,
        checkpoint: 0,
        coins: 0,
        ownedItems: [],
        equippedItems: { hat: null, glasses: null, clothes: null }
    };
    saveGameState();
    location.reload();
}

// Start Game
document.addEventListener('DOMContentLoaded', init);
