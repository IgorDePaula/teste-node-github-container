const app = require('express')()


app.get('/health', (req, res) => {
    res.send('ok')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
