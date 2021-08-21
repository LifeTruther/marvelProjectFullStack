This is a mostly-finished React project.

I hosted the site on Firebase, and it references a database in a flask project that I hosted on Heroku.

The unfinished part is as follows: I would like the front-end to allow users to view the data, but only edit it if they have their own token.

The database on Heroku allows users to log in and view their token, so I was thinking to either allow the users to place their token
into an input form on the repo site, or simply take new user logins from the repo site and automatically create accounts that would use the same
'current_user_token' strategy I employed with the original flask project.
