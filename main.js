document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const block3 = document.getElementById('block3');

    function showModal() {
        modal.style.display = 'block';
    }

    // Проверка, достигнута ли середина третьего блока
    window.addEventListener('scroll', () => {
        const block3Rect = block3.getBoundingClientRect();
        const middleBlock3 = block3Rect.top + block3Rect.height / 2;

        if (middleBlock3 < window.innerHeight && modal.style.display !== 'block') {
            showModal();
        }
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
