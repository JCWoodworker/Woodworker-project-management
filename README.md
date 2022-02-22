Welcome to the Woodworking Project Management App!

Lets get started ...



1.  when you reach the site for the first time you may be promted to allow your location to be used.  This is for the weather API to display your current weather in the top-left of the screen.  If you do not accept you will just see an infinite loading animation.

2.  The whole app is contained to one box.  Any excess information can be found by scrolling within that box.  You will never have to scroll the entire page ... everything you will need is within that main box.

3.  You will find a sponsor logo in the top-left of the app.  Clicking it will take you to the sponsor's website.  The app can be configured to any business who wishes to sponsor a version that gets distributed among their customers.

4.  In the top-right you will have links to "sign-in" or "sign-up".  You can use the following test usernames to see a pre-seeded list of projects, or you can sign up and start from scratch on your own:
  username:  user1@test.com -- password: test
  username:  user2@test.com -- password: test
  username:  user3@test.com -- password: test
There is no validation set up for these forms yet.

5.  If using a test user login you will be taken to a page to view their active projects.  There is a form on the same page that can be used to add a new project.  The only required field is "Project Name" and currently there is not validation set up yet.

6.  You can click on an active project to go to its "show page".  There you will see more detailed information about the project.  If you scroll down you'll find a gray box with the ability to add woods to the project:
  * The dropdown list says "Select Wood" - you can click and scroll through the available woods, or start typing in the dropdown to search for a specific wood.  Try typing "maple" or "walnut" for example.
  * Once you've selected a wood you'll need to enter how many board-feet you need.  A board-foot is a cubic measurement and represents 12" x 12" x 1" worth of volume.  In the future there will be a board-foot calculator for users to enter the dimensions they need and see how many board-feet it really is (for example: 3' x 6" x 1' is 1.5 board-feet)  Right now you can only enter whole numbers without decimals.  If you enter a number with a decimal the wood will not persist to your list.
  * Clicking "Add Selected" moves the wood and its board-feet over to the "Selected Woods To Be Added List" on the right (or below if on a mobile screen).
  * You can keep adding as many woods as you like, but DO NOT leave the page yet!!  You MUST click "Save List To Project" when you are ready to save the woods you added.  For now there is no option to delete individual woods from the list in state or the actual database.
  * The app needs to be refactored to show your additions immediately.  Until then, you'll have to refresh the page to see the woods you added after clicking "Save List To Project"
  * The wood list will now show up below the gray "Add Woods" box.  each individual wood will show the name of the wood, how many board-feet you selected, and how much that individual material will cost.  There is now an updated "Wood Cost" higher up the screen under the "Description" heading.
  * For now the program does not have logic to stop a user from entering the same wood twice if that wood is already saved to the database.
  * You can click "Go Back" at very bottom of the page or "Active Projects" in the top-left in order to go back to your list of active projects

7. There are links for "Wood Info" and "Dev Info" available whether or not a user is signed in.

8. "Wood Info" shows a list of all the available hardwoods, and clicking one will (eventually) lead to a page with detailed information on that specific wood, as well as pictures of the edge grain and end grain.  For now this feature is not yet fully constructed, and it will be scraping data from www.wood-database.com to be populated.

9.  "Dev Info" just has my picture and a heading for now.

10.  From here you can sign out, and sign back in under another test user to see different projects for that specific user.


