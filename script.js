function selectBundle(element, pairs) {
    // Unselect all bundles
    document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('expanded');
        option.querySelector('.dropdowns').style.display = 'none';
        option.querySelector('input').checked = false;
    });

    // Select the clicked bundle
    element.classList.add('expanded');
    element.querySelector('.dropdowns').style.display = 'block';
    element.querySelector('input').checked = true;

    // Update total price
    document.getElementById('total-price').textContent = `DKK ${element.querySelector('.price').textContent}`;
}
