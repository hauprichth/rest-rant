const router = require('express').Router()
const places = require('../models/places.js')

//places index page
router.get('/', (req, res) => {
        res.render('places/index', {places})
})
// form for new places
router.get('/new', (req, res) => {
    res.render('places/new')
})

//create a new place
router.post('/', (req,res) => {
    if(!req.body.pic) {
        //default image if not added
        req.body.pic = 'http://placekitten/com/400/400'
    }
    if(!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state){
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

//| GET | /places/:id | Details about a particular place |
//| PUT | /places/:id | Update a particular place |
//| GET | /places/:id/edit | Form page for editing an existing place |
//| Delete | /places/:id | Delete a particular place
//| POST | /places/:id/rant | Create a rant (comment) about a particular place |
//| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |

module.exports = router
