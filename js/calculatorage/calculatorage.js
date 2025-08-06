

function calcularedad() {
    
    const date_input = document.getElementById("CalculatorAge").value;

    if (date_input.length == "0") {
        
        Swal.fire("Por favor, ingrese una fecha válida.");
        return;

    }
    else {
        const date = new Date(date_input);
        const today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        if(edad < 0 || (edad === 0 && today.getDate() < date.getDate())) {
            edad--;
        }
        Swal.fire({
            title: "Edad Calculada",
            text: `Tu edad es ${edad} años.`,
            icon: "success"
        });
    
    }

 
    
}