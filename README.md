# Welcome to the Woodworking Project Management App!

Lets get started ..

## Home Page
![Home Page](https://i.imgur.com/Xu3dRQe.png)

* You will find a sponsor logo in the top-left of the app.  Clicking it will take you to the sponsor's website.  The app can be configured to any business who wishes to sponsor a version that gets distributed among their customers.
* You will also find links for "login" and "register"

![Login and Register](https://i.imgur.com/FPwOw2z.jpg)

* You can use the following test usernames to see a pre-seeded list of projects, or you can sign up and start from scratch on your own:

  | username | password |
  | --- | --- |
  | user1@test.com | test |
  | user2@test.com | test |
  | user3@test.com | test |

  * There is also an admin login:

  | username | password |
  | --- | --- |
  | admin@test.com | test |

  * (skip to down this page to the admin section for more info)

* After loggin in you will be taken to a page to the **User Home Page**

## User Home Page
![User Home Page](https://i.imgur.com/BW7abJT.jpg)
### Here's what you'll see:

| User Home Page Links | Description |
| --- | --- |
| **New Project** | Opens a form for adding a new project |
| **User Settings** | Links to "User Settings" page |
| **Hardwood Info** | Links to page with information on all different hardwoods |
| **Developer Info** | Links to page with info on the developer ... that's me!! |

* Under the links are all of your active projects - you can click on any one of them to go to their **Project Page**

### Project Page has the following items: 
| Element | Description |
| --- | --- |
| **Top Links** | Takes you back to projects list, lets you edit this project's settings, or lets you delete this project |
| **Main Heading** | Shows the project name, destination (either a customer name or "website/store"), and the quantity ordered |
| **Description** | Your description of the project.  May include dimensions, woods, quotes, engravings, notes, etc... |
| **Metrics** | Auto calculations based on user settings (see METRICS table below this one for further detail) |
| **Added Wood Tiles** | These are individual tiles with woods you've added to your project including the boardfeet you need.  Boardfeet calculations change based on user settings.  Click the "X" on a tile to delete it from your project. |
| **Add Wood Section** | This is where you can choose from a list of hardwoods, enter the boardfeet you need, and add them to your project |
| **Project Images Section** | Here you can add images of your project's progress and final product |

### Metrics:
| Metric | Description |
| --- | --- |
| **Wood Cost** | Takes the cost of each hardwood, multiplies that by the boardfeet needed, and adds all hardwoods you've added together.  Boardfeet needed is automatically increased on each individual hardwood by the percentage you chose for *Wood Waste* in your *User Settings* |
| **Labor** | Shows the *Estimated Hours* you entered in the *Project Settings*, and your *Labor Rate* from your *User Settings*.  Estimated Hours is an educated guess at how many hours the entire project will take to complete. |
| **Suggested Sale Price** | ((*Wood Cost* times your *Markup*) plus (*Estimated Hours* times *Labor Rate*)) divided by the *Quantity*.  This gives you a suggested sale price for each item within the entirety of the project. |

> NOTE:  Lumber retailers use "boardfeet" when selling hardwoods.  One boardfoot = 12" x 12" x 4/4.  We describe wood thickness by the quarter, so 1" = 4 quarter (4/4), 1.5" = 6 quarter (6/4), and so on.  Boardfeet is a measure of VOLUME (length x width x height) ... for example; 6" x 12" x 8/4 is also 1bdft (One Boardfoot)

### User Settings:
| Metric | Description |
| --- | --- |
| **** |  |
| **** |  |
| **** |  |
  
  
  
  
  
  ### OLD README INFO BELOW ... CURRENTLY RE-FACTORING ENTIRE README FILE (A LITTLE BIT AT A TIME)
  
  * The dropdown list says "Select Wood" - you can click and scroll through the available woods, or start typing in the dropdown to search for a specific wood.  Try typing "maple" or "walnut" for example.
  * Once you've selected a wood you'll need to enter how many board-feet you need.  A board-foot is a cubic measurement and represents 12" x 12" x 1" worth of volume.  In the future there will be a board-foot calculator for users to enter the dimensions they need and see how many board-feet it really is (for example: 3' x 6" x 1' is 1.5 board-feet)  Numbers can have two decimal places with 999.99 as the highest number allowed, and 0.01 as the lowest.

  * Clicking "Add Selected" moves the wood and its board-feet over to the "Selected Woods To Be Added List" on the right (or below if on a mobile screen).
  * This is sort of like a staging list before you decide to save them to the project.
  * You can keep adding as many woods as you like, but DO NOT leave the page yet!!  You MUST click "Save List To Project" when you are ready to save the woods you added.  You can click the "x" to the left of each wood you added to remove it from the staging list
  * The app shows your additions immediately.
  * The wood list will now update below the gray "Add Woods" box.  Each individual wood will show the name of the wood, how many board-feet you selected, and how much that material will cost.  There is now an updated "Wood Cost" higher up the screen under the "Description" heading.
  * Each wood tile with have a gray "x" that can be clicked to delete that wood from the project.
  * Users cannot add the same wood twice to either the persisted database or the staging list.
  * You can click "Go Back" at very bottom of the page or "Active Projects" in the top-left in order to go back to your list of active projects

7. When you click on "settings" in the top bar you'll be taken to a page to view your wood waste, labor rate, and markup.  From here you can update any or all of them, and all calculations in your project will be instantly updated.
  - Wood waste is a percentage.  It tells the app to add that to the total boardfeet they need every time they add wood to a project.  Typical wood waste is 30%, so if they add 1 boardfoot of Maple it will persist as 1.3 boardfeet.  This is necessary because wood is milled and cut over and over when making projects, and will give a more accurate dollar output for wood cost.
  - Labor rate is an hourly rate charged by a woodworker.  Labor cost is found by multiplying your labor rate by the estimated project hours.
  - Markup is used to increase your wood cost before adding labor.
  - Every user is automatically has wood waste at 30%, labor at $40, and markup at 80% when they sign up.

8. There are links for "Wood Info" and "Dev Info" available whether or not a user is signed in.

9. "Wood Info" shows a list of all the available hardwoods, and hovering over one will display a popup with detailed information on that specific wood.  This feature uses the wood's name to scrape another website and retrieve that wood's information.  If the scrape is unsuccessful you'll instead see a message saying "unable to scrape wood".  Currently only Cherry and Cumaru seem to be able to get data.

10. "Dev Info" has my picture, a heading, and some basic info about me.

11. From here you can sign out, and sign back in under another test user to see different projects for that specific user (or sign up for yourself and start adding your projects!!)

12.  You can now sign in as an admin!  The admin screen has buttons labeled
      - Add Wood
      - Edit/Delete Wood
      - Show Metrics

      12.a => Add Wood
        - When admin clicks "Add Wood" a box appears below with options to type a wood name and price.  Price is per boardfoot (ex .. entering "12.95"  would set the price at $12.95 per boardfoot)
        - Upon submitting the box disappears and a message appears telling you that you've successfully added the wood, and to refresh the screen.  Some refactoring is still needed until a refresh will not be necessary.
      12.b => Edit/Delete Wood
        - When admin clicks "Edit/Delete Wood" a list of all woods in the hardwood database appears below
        - Each wood has a gray "x" and an "Edit" button to the left of the wood name
        - Clicking the "x" will cause a confirm box to pop up stating that you cannot delete woods that have been added to active projects by users.
          - If you click confirm the wood will either be deleted, or another pop up will tell you that it cannot be deleted since it is part of an active project
          - (This is in place so customer's won't just randomly lose woods they've added to their projects.  There will be a future feature that allows the mark these woods as "unavailable" instead)
        - Clicking "Edit" will open a form below that wood pre-filled with the name and price.
          - Admin can now edit either the name or the price of the wood.
          - Clicking "submit" instantly adds that wood to the end of the list (it does not re-alphabetize the list yet, but a refresh will re-fetch an ordered list)
      12.c => Show Metrics
        - When admin clicks "Show Metrics" a list of metrics will appear below.
          - "Non-Admin Users" =  this number represents the total number of users who have signed up and have admin set to false
            - All users who sign up automatically have admin set to false.  Dev must designate a user as admin for now.
          - "Active Projects" = This number represents the total number of active projects between all users
          - "Top Woods Needed" = This shows a chart with that takes all the woods that have been added to projects and adds up the total boardfeet needed for each type of hardwood.  Admin now has a visualization of what woods their customers need most, and can be use it when deciding what to order.  Another future feature will include weekly charts so admins can see how customers' needs are changing week to week!
        

        UPCOMING FEATURES!!!
        * Admin will be able to do the following:
          - View a weekly chart of woods added to projects to better predict ordering needs (rather than the current chart which shows woods added from all-time data)
          - Use an email campaign API for mass marketing to all users
          - Instant message with online users who have questions
          - Post messages to their users' home page.  This can be used for updated on pricing, deliveries, events, etc...
        
          



