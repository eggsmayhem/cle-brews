# Cleveland Brews
#### Search Breweries in Cleveland, OH 

### Overview
This is a SPA that displays a list of breweries in Cleveland, OH. Info includes address, brewery type, phone number, and a clickable website link. Each brewery can also be displayed on a map.

### Libraries 

#### google-map-react

This library enables the page to contain an embedded Google map without requiring the use of an iframe. It is notable that Google Cloud does not offer full rate limiting, and so any limits will need to be custom (although you can of course partially solve the problem by restricting domain access to your API key on Google Cloud). This library is relatively similar to FOSS alternatives such as leaflet, which I might switch to due to less potential cloud billing headaches.

This library's behavior is a bit tricky when it comes to the rendering lifecycle, such that I had to disable Stict Mode in development. Rendering maps is a quirky process I would like to learn more about. 

## Going forward

### Add unit testing

### New features:

#### cheapest brews
This feature will take advantage of the "cheapest beer/cheapest beer abv" fields I added to the custom Nodejs API I wrote for this app. This feature will enable a broke college student to enter the amount of money they have to spend, and search for local breweries based on how many of each brewery's cheapest beer (+20% tip) they would be able to buy with that money, as well as the beer's alcohol percentage.

#### search
Modern applications hardly feel complete without a search function, and so enabling users to search by brewery type and distance will be helpful