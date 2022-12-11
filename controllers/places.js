const router = require('express').Router()
const Places = require('../')

//places index page
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '../images/spices.jpg',
        link: '"https://unsplash.com/@stri_khedonia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"',
        photographer: 'Alice Pasqual'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '../images/muffins.jpg',
        link: '"https://unsplash.com/@foodfaithfit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"',
        photographer: 'Taylor Kiser'
    }]

    res.render('places/index', {places})
    
})
// form for new places
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req,res) => {
    console.log(req.body)
    res.send('POST/places')
})

//| POST | /places | Create new place |
//| GET | /places/:id | Details about a particular place |
//| PUT | /places/:id | Update a particular place |
//| GET | /places/:id/edit | Form page for editing an existing place |
//| Delete | /places/:id | Delete a particular place
//| POST | /places/:id/rant | Create a rant (comment) about a particular place |
//| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |

module.exports = router
