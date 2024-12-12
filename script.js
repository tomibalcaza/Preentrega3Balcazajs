const input = document.getElementById('dataInput'); 
const saveButton = document.getElementById('saveButton'); 
const dataList = document.getElementById('dataList'); 

document.addEventListener('DOMContentLoaded', () => {
    const savedData = JSON.parse(localStorage.getItem('datos')) || []; 
    mostrarDatos(savedData);
});


saveButton.addEventListener('click', () => {
    const texto = input.value.trim(); 
    if (texto !== '') { 
        const savedData = JSON.parse(localStorage.getItem('datos')) || []; 
        savedData.push(texto); 
        localStorage.setItem('datos', JSON.stringify(savedData)); 
        mostrarDatos(savedData); 
        input.value = ''; 
    }
});


function mostrarDatos(datos) {
    dataList.innerHTML = ''; 
    datos.forEach(dato => {
        const item = document.createElement('li'); 
        item.textContent = dato; 
        dataList.appendChild(item); 
    });
}
