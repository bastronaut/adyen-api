const constants = require('./utils/constants')

const app = require('./app')
const port = constants.port;

app.listen(port, () => {
    console.log(`Adyen API app listening on port ${port}!`)
})