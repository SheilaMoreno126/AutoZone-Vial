/**
 * AUTOZONE - Lógica de Frontend
 * Gestión de catálogo de señales y sistema de trivia interactiva.
 * Versión: Optimizada con Enlaces Directos PNG + Fallback SVG
 */

// 1. BASE DE DATOS DE SEÑALES
// Utilizamos el método de enlaces directos PNG confirmado por el usuario,
// manteniendo el contenido SVG como respaldo absoluto para evitar errores de carga.
const signsData = [
    {
        id: 1,
        name: "Pare",
        category: "reglamentaria",
        description: "Indica la obligación de detener el vehículo completamente antes de continuar.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Argentina_MSV_2017_road_sign_R-27.svg/960px-Argentina_MSV_2017_road_sign_R-27.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail`,
    },
    {
        id: 2,
        name: "Ceda el Paso",
        category: "reglamentaria",
        description: "Obliga a dar prioridad de paso a los vehículos que circulan por la vía transversal.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Argentina_MSV_2017_road_sign_R-28.svg/1280px-Argentina_MSV_2017_road_sign_R-28.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail`,
    },
    {
        id: 3,
        name: "Prohibido Estacionar",
        category: "reglamentaria",
        description: "Indica que está prohibido detener el vehículo para estacionar en ese sector.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Argentina_MSV_2017_road_sign_R-8.svg/960px-Argentina_MSV_2017_road_sign_R-8.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail`,
    },
    {
        id: 4,
        name: "Curva Peligrosa",
        category: "preventiva",
        description: "Advierte sobre la presencia de una curva cerrada en el camino.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Argentina_MSV_2017_road_sign_P-7%28d%29.svg/120px-Argentina_MSV_2017_road_sign_P-7%28d%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail`,
    },
    {
        id: 5,
        name: "Resalto / Lomo de Burro",
        category: "preventiva",
        description: "Advierte sobre un resalto en la calzada para reducir la velocidad.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Argentina_MSV_2017_road_sign_P-11%28c%29.svg/120px-Argentina_MSV_2017_road_sign_P-11%28c%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail`,
    },
    {
        id: 6,
        name: "Cruce de Peatones",
        category: "preventiva",
        description: "Alerta sobre la proximidad de una zona de cruce peatonal.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/AR_road_sign_P-5.svg/120px-AR_road_sign_P-5.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail`,
    },
    {
        id: 7,
        name: "Hospital",
        category: "informativa",
        description: "Informa la proximidad de un centro de salud o hospital.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Argentina_MSV_2017_road_sign_P-24%28a%29.svg/960px-Argentina_MSV_2017_road_sign_P-24%28a%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail`,
    },
    {
        id: 8,
        name: "Estacionamiento",
        category: "informativa",
        description: "Indica la existencia de un área permitida para estacionar.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Argentina_MSV_2017_road_sign_I-20.svg/120px-Argentina_MSV_2017_road_sign_I-20.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail`,
    },
    {
        id: 9,
        name: "Giro Obligatorio a la Derecha",
        category: "reglamentaria",
        description: "Obliga al conductor a girar hacia la derecha.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3c/Argentina_MSV_2017_road_sign_I-21%28a%29.svg/960px-Argentina_MSV_2017_road_sign_I-21%28a%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail`,
    },
    {
        id: 10,
        name: "Zona Escolar",
        category: "preventiva",
        description: "Advierte la presencia de una escuela y posible cruce de niños.",
        type: "png",
        content: `https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Argentina_MSV_2017_road_sign_P-25%28a%29.svg/960px-Argentina_MSV_2017_road_sign_P-25%28a%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail`,
    }
];

// --- ESTADO DE LA APLICACIÓN ---
let currentCategory = 'all';
let searchQuery = '';

// --- DOM ELEMENTS ---
const signsGrid = document.getElementById('signs-grid');
const searchInput = document.getElementById('search-input');
const filterTabs = document.querySelectorAll('.tab');

/**
 * Renderiza las señales.
 * Si el PNG falla, se dispara el onerror que inserta el SVG de respaldo.
 */
function renderSigns() {
    if (!signsGrid) return;
    signsGrid.innerHTML = '';

    const filteredSigns = signsData.filter(sign => {
        const matchesCategory = currentCategory === 'all' || sign.category === currentCategory;
        const matchesSearch = sign.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredSigns.length === 0) {
        signsGrid.innerHTML = `<p class="no-results">No se encontraron señales que coincidan con tu búsqueda.</p>`;
        return;
    }

    filteredSigns.forEach(sign => {
        const card = document.createElement('div');
        card.className = 'sign-card';

        // Intentamos cargar la imagen PNG. Si falla, usamos el fallback SVG.
        card.innerHTML = `
            <div class="sign-img-container" id="container-sign-${sign.id}">
                <img src="${sign.content}"
                     alt="${sign.name}"
                     onerror="handleImageError(${sign.id}, \`${sign.fallback}\`)">
            </div>
            <div class="sign-info">
                <h3>${sign.name}</h3>
                <p>${sign.description}</p>
            </div>
        `;
        signsGrid.appendChild(card);
    });
}

/**
 * Función global para manejar errores de imagen e insertar el SVG de respaldo.
 */
window.handleImageError = function(id, svgContent) {
    const container = document.getElementById(`container-sign-${id}`);
    if (container) {
        container.innerHTML = svgContent;
    }
};

// Eventos de Interfaz
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderSigns();
    });
}

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentCategory = tab.getAttribute('data-category');
        renderSigns();
    });
});

// --- LÓGICA DE LA TRIVIA (Sigue la misma estructura pero con soporte híbrido) ---

const triviaStart = document.getElementById('trivia-start');
const triviaGame = document.getElementById('trivia-game');
const triviaResult = document.getElementById('trivia-result');
const startBtn = document.getElementById('start-trivia');
const restartBtn = document.getElementById('restart-trivia');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const finalScoreEl = document.getElementById('final-score');
const resultMsgEl = document.getElementById('result-message');

let score = 0;
let timeLeft = 15;
let timerInterval;
let currentQuestionIndex = 0;
let triviaQuestions = [];

function startTrivia() {
    score = 0;
    currentQuestionIndex = 0;
    triviaQuestions = [...signsData].sort(() => Math.random() - 0.5).slice(0, 5);
    if (triviaStart) triviaStart.classList.add('hidden');
    if (triviaResult) triviaResult.classList.add('hidden');
    if (triviaGame) triviaGame.classList.remove('hidden');
    if (scoreEl) scoreEl.textContent = score;
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    if (timerEl) timerEl.textContent = timeLeft;
    const q = triviaQuestions[currentQuestionIndex];
    if (questionText) questionText.textContent = "¿Cuál es el significado de esta señal?";

    const imgContainer = document.getElementById('question-image-container');
    if (imgContainer) {
        imgContainer.innerHTML = `<img src="${q.content}"
            alt="${q.name}"
            onerror="this.parentElement.innerHTML = \`${q.fallback}\`">`;
    }

    const options = [q.name];
    const others = signsData.filter(s => s.id !== q.id);
    const randomOthers = others.sort(() => Math.random() - 0.5).slice(0, 3).map(s => s.name);
    options.push(...randomOthers);
    options.sort(() => Math.random() - 0.5);

    if (optionsGrid) {
        optionsGrid.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(opt, q.name, btn);
            optionsGrid.appendChild(btn);
        });
    }
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timerEl) timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function checkAnswer(selected, correct, btn) {
    clearInterval(timerInterval);
    const buttons = optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    if (selected === correct) {
        btn.classList.add('correct');
        score += 10;
        if (scoreEl) scoreEl.textContent = score;
    } else {
        btn.classList.add('wrong');
        buttons.forEach(b => { if (b.textContent === correct) b.classList.add('correct'); });
    }
    setTimeout(nextQuestion, 1500);
}

function handleTimeout() {
    const buttons = optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => {
        b.disabled = true;
        if (b.textContent === triviaQuestions[currentQuestionIndex].name) b.classList.add('correct');
    });
    setTimeout(nextQuestion, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    if (triviaGame) triviaGame.classList.add('hidden');
    if (triviaResult) triviaResult.classList.remove('hidden');
    if (finalScoreEl) finalScoreEl.textContent = score;
    if (resultMsgEl) {
        if (score >= 40) resultMsgEl.textContent = "¡Excelente! Estás listo para conducir.";
        else if (score >= 20) resultMsgEl.textContent = "Buen trabajo, pero necesitas repasar algunas señales.";
        else resultMsgEl.textContent = "Necesitas estudiar más antes de salir a la calle.";
    }
}

if (startBtn) startBtn.addEventListener('click', startTrivia);
if (restartBtn) restartBtn.addEventListener('click', startTrivia);

document.addEventListener('DOMContentLoaded', () => {
    renderSigns();
});
