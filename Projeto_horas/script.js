function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date() // Data atual
    var hora = data.getHours() // Horas 
    var minutos = data.getMinutes() // Minutos 
    var segundos = data.getSeconds() // Segundos

    msg.innerHTML = `Agora é exatamente ${hora}:${minutos}:${segundos}`
    
    if (hora >= 0 && hora <12){ // Se hora for maior que 0 e menor que 12 é de manhã
         // Dia
        img.src = 'img/dian.jpg'
        document.body.style.background = '#00FF00'
    }
    else if (hora >= 12 && hora < 18) { // Se hora for maior igual a 12 e menor igual a 18 é de tarde
        // Tarde
        img.src = 'img/paisagemtarde2.jpg'  
        document.body.style.background = '#FFFF00' 
    }
    else {
        // Noite
        img.src = 'img/citynoite.jpg' // Se não for nem manhã e nem tarde é noite.
        document.body.style.background = '#000'


    
}
}