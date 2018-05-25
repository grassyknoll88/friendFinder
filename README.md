# FriendFinder

## Overview

The goal was to create a Friend Finder app using Node and Express servers. The user enters the page that leads to a survey. When the user submits the survey, they are matched with a "friend" that has the closest match to their personality.

### Getting Started
https://secret-brushlands-96921.herokuapp.com/

![image](https://user-images.githubusercontent.com/32990938/40373625-ed82794a-5dac-11e8-91ed-52ceb046627a.png)

![image](https://user-images.githubusercontent.com/32990938/40373641-f505a408-5dac-11e8-8da2-538405edacb0.png)


#### Technologies implemented

Node.js
body-parager NPM Package - https://www.npmjs.com/package/inquirer
express NPM Package - https://www.npmjs.com/package/express
path NPM Package - https://www.npmjs.com/package/path

##### Requirements

Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.
Your htmlRoutes.js file should include two routes:



A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. 



Your apiRoutes.js file should contain two routes:



A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 



You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

Determine the user's most compatible friend:



Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


Example: 


User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5





Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
The closest match will be the user with the least amount of difference.



Once you've found the current user's most compatible friend, display the result as a modal pop-up.


The modal should display both the name and picture of the closest match.



