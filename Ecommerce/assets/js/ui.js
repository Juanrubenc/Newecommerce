function printTasks(product) {
    // Identificar el contenedor
    const container = document.getElementById('tasks-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < product.length; i++) {
        html += `<div class=" mb-3">
        <div class="card-body cards border border-light">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
            <div>
                <img
                src="${product[i].image}"
                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
            </div>
            <div class="ms-4">
                <h7>${product[i].name}<h7>
            </div>
            </div>
            <div class="d-flex sm-1 flex-row align-items-center">
            <div style="width: 100%;">
                <h7 class="mb-0">${product[i].price}</h7>
            </div>
            <button class="btn ms-1 btn-sm btn-danger" onclick="deleteProduct(${product[i].id})"><i class="fas fa-trash-alt"></i></button>
            <button class="btn ms-2 btn-sm btn-primary" onclick="editProduct(${product[i].id})"><i class="fas fa-pen"></i></button>
            </div>
        </div>
</div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}

export { printTasks }



