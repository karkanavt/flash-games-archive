function playGame(gamePath) {
    const container = document.getElementById('game-container');
    const swfPlayer = document.getElementById('game-swf');
    
    // Меняем путь к игре
    swfPlayer.setAttribute('src', gamePath);
    
    // Показываем плеер
    container.style.display = 'block';
    
    // Блокируем прокрутку страницы
    document.body.style.overflow = 'hidden';
}

function closeGame() {
    const container = document.getElementById('game-container');
    const swfPlayer = document.getElementById('game-swf');
    
    // Очищаем плеер
    swfPlayer.removeAttribute('src');
    
    // Скрываем плеер
    container.style.display = 'none';
    
    // Возвращаем прокрутку
    document.body.style.overflow = 'auto';
}