/* A Travel Plan generator 
author: Rachel Owens 
Built as part of the Codecademy Fullstack Engineer course */

// random locations
const locations = ['Paris', 'London', 'Thailand', 'Hawaii', 'Colorado', 'Edinburgh', 'Washington D.C.', 'The Bahamas', 'Tokyo', 'Hong Kong', 'Egypt']; 
// random activities
const activities = ['siteseeing', 'swimming', 'shopping', 'cycling', 'have a picnic', 'meet someone new', 'take a walking tour', 'eat something new', 'horseback riding', 'visit a local attraction']; 
// random seasons
const seasons = ['Fall', 'Winter', 'Spring', 'Summer']; 

// Function to generate a random travel plan
function planTravel(locationArr, activitiesArr, seasonsArr) {
    const locationIdx = Math.floor(Math.random() * locationArr.length);
    const activityIdx = Math.floor(Math.random() * activitiesArr.length);
    const seasonIdx = Math.floor(Math.random() * seasonsArr.length);

    const plan = {
        location: locationArr[locationIdx],
        activity: activitiesArr[activityIdx],
        season: seasonsArr[seasonIdx]
    };

    return plan;

}

// Function to print out your travel plan 
function tellMeWhereToGo() {
    let travelPlan = planTravel(locations, activities, seasons);

    console.log(`You should go ${travelPlan.activity} in ${travelPlan.location} in the ${travelPlan.season}.`);
}

tellMeWhereToGo();