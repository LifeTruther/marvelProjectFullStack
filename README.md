# A Hero Repository: https://a-hero-repository.web.app/

This is a mostly-finished React project.
It is a proof-of-concept that allows users to create a 'hero' with class attributes, change those attributes, delete the hero, and view all the 
heroes. Essentially this is the web front-end of CRUD functionality. 

I host the site on Firebase, and it references a database in a flask project that I host on Heroku.

The unfinished part is as follows: I would like the front-end to allow users to view the data, but only edit it if they have their own token.
I also plan to make multiple aesthetic changes, and I will most likely be using this setup to create something with a very different theme
in the future.

The database on Heroku allows users to log in and view their token, so I was thinking to either allow the users to place their token
into an input form on the repo site, or simply take new user logins from the repo site and automatically create accounts that would use the same
'current_user_token' strategy I employed with the original flask project.
