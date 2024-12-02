const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 8000;

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

const recipes = {
    'alfredo pasta' : {
        'ingridient1' : 'salt',
        'ingridient2' : 'pepper',
        'ingridient3' : 'cream',
        'ingridient4' : 'parmesan cheese',
        'ingridient5' : 'chili flakes'
    },
    'roasted asparagus' : {
        'ingridient1' : 'salt',
        'ingridient2' : 'pepper',
        'ingridient3' : 'asparagus',
        'ingridient3' : 'garlic powder'
    },
    'unknown' :{
        'ingridient1' : 'unknown',
        'ingridient2' : 'unknown',
        'ingridient3' : 'unknown'
    }
}

app.get('/api/:name', (request, response) => {
    const recipeName = request.params.name.toLowerCase();
    if(recipes[recipeName]){
        response.json(recipes[recipeName])
    } else {
        response.json(recipes['unknown'])
    }
})

app.listen( PORT, () => {
    console.log(`The server is now listening on port ${PORT}`)
})