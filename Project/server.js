const express = require("express")
const app = express()
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    res.render('index.ejs')
})

app.get('/', (req, res) => {
    res.render('homepage.ejs')
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/error', (req, res) => {
    res.render('error.ejs')
})

app.get('/registration', (req, res) => {
    res.render('registration.ejs')
})
app.get('/cart', (req, res) => {
    res.render('cart.ejs')
})
app.get('/category', (req, res) => {
    res.render('category.ejs')
})
app.get('/checkout', (req, res) => {
    res.render('checkout.ejs')
})
app.get('/confirmation', (req, res) => {
    res.render('confirmation.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
app.get('/single-product', (req, res) => {
    res.render('single-product.ejs')
})
app.get('/tracking', (req, res) => {
    res.render('tracking.ejs')
})
app.get('/uploadRent', (req, res) => {
    res.render('uploadRent.ejs')
})

app.get('/product1', (req, res) => {
    res.render('product1.ejs')
})

app.get('/single-product1', (req, res) => {
    res.render('single-product1.ejs')
})
app.get('/single-product2', (req, res) => {
    res.render('single-product2.ejs')
})
app.get('/single-product3', (req, res) => {
    res.render('single-product3.ejs')
})
app.get('/single-product4', (req, res) => {
    res.render('single-product4.ejs')
})
app.get('/single-product5', (req, res) => {
    res.render('single-product5.ejs')
})
app.get('/single-product6', (req, res) => {
    res.render('single-product6.ejs')
})
app.listen(3000);