const index = (req, res) => {
    res.render('index', {title: 'First Web Site'});
}

const contact = (req, res) => {
    res.render('contact', {title: 'Contact'})
}

const about = (req, res) => {
    res.render('about', {title: 'About'})
}

module.exports = {
    index,
    contact,
    about
}