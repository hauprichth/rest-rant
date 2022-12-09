# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Color Palette 
541388, D90368, F1E9DA, 2E294E, FFD400

| Method | Path | Purpose |
| --- | --- | --- |
| GET | / | Home Page |
| GET | /places | Places index page |
| POST | /places | Create new place |
| GET | /places/new | Form page for creating new place |
| GET | /places/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| Delete | /places/:id | Delete a particular place
| POST | /places/:id/rant | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

Places should have
* name (string)
* city (string)
* state (string)
* cuisines (string)
* picture (string) 