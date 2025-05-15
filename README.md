# Zero Knowledge Proof

## Installing

Install Node.js        
npm install react   
npm install node_modules

## Running the Website

To run in development mode, use `npm start`. While developing, the page will automatically reload when you make edits. 

This runs on [http://localhost:3000](http://localhost:3000)

For web debugging you can use `npm test`. Launches the website in interactive mode.

`npm run build` builds the app in the build folder. Puts react in production mode, optimizing the build for the best performance.

## Knowledge-based verification method flow
When a user creates an account to use Hypixel's "services", a quiz verification page is brought up. This quiz is used to determine if the user is 13 years old and over, or 12 years old and below. The quiz has 3 low, 3 medium, and 3 heavy "weighted" questions that do not require rigorous work. These weights are determined by the probability of correct identifying the user's age. Heavier weights means a high probability to correctly identify users over the age of 13. Low weights means a low probability to correctly identify users over the age of 13. Each question is timed to ensure they are answered in a timely manner; this is to prevent cheating via ChatGPT or googling. 

Once the user answers all 9 questions, if they received 75+ points, their account is classified as 13 and up or 12 and below. This classification is saved to the user's device similar to SSH (no implementation in the code at the moment). When a user tries to access Hypixel's services with a classification of 12 and below, they will be restricted from using them. On the contrary, with the classification of 13 and over, users will have the freedom to use them. For false negatives, users can contact Hypixel staff or try to override the classification by using their ID verification or some form of verification method as a fail safe. 



