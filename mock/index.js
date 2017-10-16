function router(app) {
    app.get('/search', (req, res, next) => {
        res.send(req.query.q)
    })
}

module.exports = router