    const socket = io();

    const users = {
    matias : {id : 1, email : "matias@matias.com", name : "matias"},
    raul : {id : 2, email : "raul@raul.com", name : "raul"},
    jair : {id : 3, email : "jair@jair.com", name : "jair"},
    agustin : {id : 4, email : "agustin@agustin.com", name : "agustin"}
    }
    const newProduct = document.getElementById('newProduct')
    newProduct.addEventListener('submit', event => {
    event.preventDefault()
    let id = document.getElementById('ID').value
    let name = document.getElementById('NAME').value
    let price = document.getElementById('price').value
    let src = document.getElementById('src').value
    console.log(`${name}, #${id}, $${price}, ${src}`)
    socket.emit('new_product', {
        id : id,
        name : name,
        price : price,
        src : src
    })
    newProduct.reset();
    })
    const messageForm = document.getElementById('messageForm');
    messageForm.addEventListener('submit', event => {
    event.preventDefault()
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+"  "+today.getHours() + ":" + today.getMinutes()
    let value = document.getElementById('name').value
    let name = users[value].name
    let email = users[value].email
    let userId = users[value].id
    let messageId = Date.now()
    let message = document.getElementById('message').value
    socket.emit('new_message', {
        date : date,
        name : name,
        email : email,
        message : message,
        userId : userId,
        messageId : messageId
        })
    messageForm.reset();
    })
    socket.on('connect', () => {
    console.warn('Conectado al servidor');
    });
    socket.on('update_products', products => {
    fetch('http://localhost:8080/views/products-render.hbs')
        .then(response => {
        return response.text()
        })
        .then(plantilla => {
        let template = Handlebars.compile(plantilla);
        let html = template({products})
        document.getElementById('productos').innerHTML = html;
        })
    })
    socket.on('update_messages', messages => {
    fetch('http://localhost:8080/views/messages-render.hbs')
        .then(response => {
        return response.text()
        })
        .then(plantilla => {
        let template = Handlebars.compile(plantilla);
        let html = template({messages});
        document.getElementById('messageDisplay').innerHTML = html;
        })
    })