function selectCity() {
    var city = document.getElementById('citySelect').value;
    document.querySelector('.location').innerHTML = city + ' <ion-icon name="caret-down-sharp"></ion-icon>';
    document.getElementById('dropdownModal').style.display = 'none';
}
window.onclick = function(event) {
    var dropdownModal = document.getElementById('dropdownModal');
    var signinModal = document.getElementById('id01');

    if (event.target == dropdownModal) {
        dropdownModal.style.display = 'none';
    }
    if (event.target == signinModal) {
        signinModal.style.display = 'none';
    }

    var dropdownMenu = document.getElementById('dropdownMenu');
    if (event.target !== dropdownMenu && !dropdownMenu.contains(event.target) && !event.target.matches('.location')) {
        dropdownMenu.style.display = 'none';
    }
};
function toggleCityModal() {
    var dropdownModal = document.getElementById('dropdownModal');
    dropdownModal.style.display = 'flex';  
}