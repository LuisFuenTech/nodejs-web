const index = (req, res) => {
    res.render('index', {title: 'First Web Site'});
}

const contact = (req, res) => {
    res.render('contact', {title: 'Contact page'})
}

module.exports = {
    index,
    contact
}