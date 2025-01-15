//1. maraqli amma oz bacariqlariniza esasen oyun yazin
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetBtn');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Hüceyrəyə klikləmə
function handleClick(e) {
    const index = e.target.dataset.index;
    if (board[index] || !currentPlayer) return;
    
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if (checkWinner()) {
        alert(`${currentPlayer} qazandı!`);
        currentPlayer = null;
        return;
    }

    if (board.every(cell => cell)) {
        alert("Heç-heçə!");
        currentPlayer = null;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Qələbəni yoxla
function checkWinner() {
    return winPatterns.some(pattern => 
        pattern.every(index => board[index] === currentPlayer)
    );
}

// Oyunu sıfırlamaq
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach((cell, index) => {
    cell.dataset.index = index;
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);



/*2. ele edeceksinizki input type file ile ancaq sekil yerlesdire
bilsinler ve onun secdiyi sekli avtomatik ekranda gormeliyik*/
        const fileInput = document.getElementById('file');
        const imagePreview = document.getElementById('image-preview');
        fileInput.onchange = function(e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block'; // Şəkili ekranda göstəririk
            };
            
            if (file) {
                reader.readAsDataURL(file);
            }
        };
    
//3. dark/light mode
const fa_sun = document.querySelector(".fa-sun");
const fa_moon = document.querySelector(".fa-moon");//moon cagiririq olmasada

fa_sun.onclick = () => {
    fa_sun.classList.toggle("fa-moon");//icon deyisir
     document.body.classList.toggle("dark-mode");
     fa_sun.onclick = () => {
    fa_sun.classList.toggle("fa-moon");
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.toggle("yellow-mode");//reng deyisir sari olur
    }
};
    }
    
