Welcome to the Woodworking Project Management App!

Lets get started ...



1.  when you reach the site for the first time you may be promted to allow your location to be used.  This is for the weather API to display your current weather in the top-left of the screen.  If you do not accept you will just see an infinite loading animation.

2.  The whole app is contained to one box.  Any excess information can be found by scrolling within that box.  You will never have to scroll down continuously ... everything you will need is within the main box.

3.  You will find a sponsor logo in the top-left of the app.  Clicking it will take you to the sponsor's website.  The app can be configured to any business who wishes to sponsor a version that gets distributed among their customers.

4.  In the top-right you will have links to "sign-in" or "sign-up".  You can use the following test usernames to see a pre-seeded list of projects, or you can sign up and start from scratch on your own:
  username:  user1@test.com -- password: test
  username:  user2@test.com -- password: test
  username:  user3@test.com -- password: test

5.  If using a test user login you will be taken to a page to view their active projects.  There is a form on the same page that can be used to add a new project.  The only required field is "Project Name".

6.  You can click on an active project to go to its "show page".  There you will see more detailed information about the project.  If you scroll down you'll find a gray box with the ability to add woods to the project:
  * The dropdown list says "Select Wood" - you can click and scroll through the available woods, or start typing in the dropdown to search for a specific wood.  Try typing "maple" or "walnut" for example.
  * Once you've selected a wood you'll need to enter how many board-feet you need.  A board-foot is a cubic measurement and represents 12" x 12" x 1" worth of volume.  In the future there will be a board-foot calculator for users to enter the dimensions they need and see how many board-feet it really is (for example: 3' x 6" x 1' is 1.5 board-feet)  Numbers can have two decimal places with 999.99 as the highest number allowed, and 0.01 as the lowest.

  * Clicking "Add Selected" moves the wood and its board-feet over to the "Selected Woods To Be Added List" on the right (or below if on a mobile screen).
  * This is sort of like a staging list before you decide to save them to the project.
  * You can keep adding as many woods as you like, but DO NOT leave the page yet!!  You MUST click "Save List To Project" when you are ready to save the woods you added.  For now there is no option to delete individual woods from the list in state or the actual database.
  * The app shows your additions immediately.
  * The wood list will now update below the gray "Add Woods" box.  Each individual wood will show the name of the wood, how many board-feet you selected, and how much that material will cost.  There is now an updated "Wood Cost" higher up the screen under the "Description" heading.
  * Users cannot add the same wood twice to either the persisted database or the staging list.
  * You can click "Go Back" at very bottom of the page or "Active Projects" in the top-left in order to go back to your list of active projects

7. There are links for "Wood Info" and "Dev Info" available whether or not a user is signed in.

8. "Wood Info" shows a list of all the available hardwoods, and hovering over one will display a popup with detailed information on that specific wood.  This feature uses the wood's name to scrape another website and retrieve that wood's information.  If the scrape is unsuccessful you'll instead see a message saying "unable to scrape wood".

9. "Dev Info" has my picture, a heading, and some basic info about me.

10. From here you can sign out, and sign back in under another test user to see different projects for that specific user (or sign up for yourself and start adding your projects!!)


