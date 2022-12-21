const router = require("express").Router();
const places = require("../models/places.js");

//places index page
router.get("/", (req, res) => {
  res.render("places/index", { places });
});
// form for new places
router.get("/new", (req, res) => {
  res.render("places/new");
});

//create a new place
router.post("/", (req, res) => {
  if (!req.body.pic) {
    //default image if not added
    req.body.pic = "http://placekitten/com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});
// access edit page
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id: id });
  }
});
// access show page
router.get("/:id/", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { id: id, place: places[id] });
  }
});

router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log(id)
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.redirect(`/places/${id}`);
  }
});

//| Delete | /places/:id | Delete a particular place
//| POST | /places/:id/rant | Create a rant (comment) about a particular place |
//| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |

module.exports = router;
