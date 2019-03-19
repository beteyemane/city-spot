
# General Assembly Project 3: City Spot

Bete Yemane | Josh King | Lauren Bell | Alessandro Lepri

## Project Brief

The breif was to build a MERN stack application in a group. The app was also required to have automated tests for at least one RESTful resource on the back-end. 

### Timeframe

7 Days

## Technologies Used
* React
* JavaScript(ES6)
* Node.js
* MongoDB
* Express
* Webpack
* Mocha/Chai/Supertest
* Filestack
* Axios
* SCSS/CSS
* Babel
* Semantic UI
* HTML5
* Git/Github
* Heroku

## Deployed Web App

---> https://city-spot.herokuapp.com/

## Our Application - City Spot

![Screenshot 2019-03-16 at 12 34 52](https://user-images.githubusercontent.com/44004811/54475500-d18ad700-47e9-11e9-8997-b206c1586b30.png)

## Project Summary

City Spot is a social platform for travellers to showcase their recent trips. This is done by generating a 'post' on a city's show page, which includes:

* a chosen image of the place
* a brief summary of their experience/caption relating to their image. 

To increase interactivity amongst the travellers, users can also:

* add a comment to a post
* 'like' the post

10 Posts with highest amounts of likes in the database will be featured on a popular posts page, where they are ordered from the most likes to the least likes. The number of 'likes' are shown on the post to clarify this, and to visually display the popularity ranking on the page. The users are also able to 'like' the posts they see on that page, and will be navigated to the city's show page if they click on the post.

As well as the posts, the city show pages also include general city information such as population and region, event and restaurant recommendations, and a weekly weather forcast. This was a tool for user to find out information on cities they're planning to go to in the future. 

Users can also like and comment on the posts made by other users. 

## Users Journey

When the user first visits City Spot, they have two paths to reach their desired city: a search bar, and links to each continent where they can select a city. 

![Screenshot 2019-03-16 at 12 34 27](https://user-images.githubusercontent.com/44004811/54475406-e7e46300-47e8-11e9-87c3-6099e41a5c8e.png)

City show page.

![Screenshot 2019-03-17 at 23 09 08](https://user-images.githubusercontent.com/44004811/54499448-e2cb0500-4909-11e9-8dc5-2b7fc1ecb0b2.png)


![Screenshot 2019-03-17 at 23 09 24](https://user-images.githubusercontent.com/44004811/54499450-f2e2e480-4909-11e9-9f91-047a2cf6e611.png)

If a user would like to add a post, they are required to register and login and if they have forgotten their password, they have the option to request an email with the link to reset their password.

![Screenshot 2019-03-16 at 12 54 08](https://user-images.githubusercontent.com/44004811/54475586-af458900-47ea-11e9-8524-854cdcbe9512.png)

The user has a profile page which contains their uploaded profile image, bio, a cover photo and their posts. They are also able to edit their bio and cover photo image.

## Process

### Development

We first began creating wireframes to work out the structure of the website and content placement. From then we were able to establish the endpoints, models, and routes needed for our app. We firstly began to develop our backend API using Mongoose, and created three of our main models; City, Continent, and User, as well as the controllers. We were then able to test our routes making adjustments needed to populate the accurate information we wanted to display, using Insomnia as our client. We then created a seeds file and added the data for both Continent and City to kick-start our database. 

Frontend setup
-setting up components and pages
-setting up forms
-connecting API requests to the front end.

### Task Management and Communication

Being in a team of four, we decided the easiest way to divide the workload was to have two people build the front-end, and two people build the back-end. We held stand-ups every morning and communicated via Slack to update each other with our progress.

## Styling

We used Semantic UI as our CSS Framework which created a sleek and user friendly design. 

## Challenges and Wins
Challenges:
-email system

Wins:

One of the biggest wins was the team communication. We had a group Slack channel where every member was equally active. This really helped us manage Git as a team, as we all got into the habit of informing each other when we were pushing to the development branch. Any errors or conflicts during this process, we notified the group channel where we all worked together to resolve the issue.


## Future features

* Currently, the only way to add new Cities is via our seeds file, so an admin account to add the cities will be a useful feature to add.

* To follow the conventions of a social media platform, and for users to engage with each other to have a sense of community, I'd like to implement user messaging & friend requests.

* A search bar for the Continent and City pages to improve user navigation.

