# React-native-application
React native application to search a list of tv series.
React Native mobile application which allows the user to
search for information about TV Series, using the TV maze API.

Applications show the list of TV series  and an option to search through series. search results in a list and allow the user
to see more detailed information in another view.

The TV maze API free public API used for this application is: http://api.tvmaze.com/search/shows?q=postman.

Running application: 
Steps:

For Emulator, launch Android studio. 
Create a virtual Android device and start running it. 

from application: 

1. Download the source code.
2. run > "npm install" to install dependencies.
3. For Android OS, run > "pod install". This one is for viewing show details as a web page. 
4. run > "npm start react-native" to run the application. 
5. Open another terminal, run > "npx react-native run-android" to install and launch the application on the emulator. 


Updates as on 6th April 2023:
Current application functionality:
1. Current application lists and give option to search through the list of shows by their names. 
2. All the shows part of "http://api.tvmaze.com/search/shows?q=postman" API as shown as a list in the home screen of the application. 
3. User can click on favorite icon to add the show to wishlist. 
4. an option to show the wishlisted shows in an alert modal. 
5. View the details of each show by clicking the show row from the list. 
6. Details screen to show the website havingh all the details of the show. 

What could have been better:
1. Clicking on the favorite icon to add item to wishlist reflect immediately on the screen. This happens when the list is refreshed as of today. 
2. Wish list modal content could have been beautified if some more time was there. 

what more can be done:
1. Wishlist can be shown in a seperate screen. 
2. serach can be enhanced to include more fields.
3. Implement REDUX STORE for better state management. 
4. Option to remove item from wish list. 


Limitations:
1. IOS platform testing is not done due to unavailability of the environment. 


