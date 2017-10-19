The X3DOM framework (www.x3dom.org) allows embedding of VR (in the general sense, as in the older VRML) content in webpages, but surprisingly hyperlinks do not feature in X3DOM; yet hyperlinks are an essential element of what we consider the Web. In this project the concept of clickable content in an X3DOM scene that leads to another page/scene should be developed, e.g. with JavaScript. A web of such scenes containing such hyperlinks to other scenes becomes hence a true VR web. Also a guestbook widget shall be developed, which I can put into my own X3DOM page, and where visitors can leave their own web addresses of their own X3DOM pages. Later visitors can find those pages from earlier visitors and explore them. The new concept of hyperlinks in X3DOM should be incorporated into the browser as well as possible. A good demo setup would start in a common welcome space, where there are booths with guestbooks for different interests, e.g. architecture marvels, great scenery, games etc etc. Especially welcome would be any sample X3DOM content, possibly a mixture of collecting available content and own content, that explores how VR can be used to replace or complement HTML

Deployment:

Prerequisites:
SQL Server 2017 
IIS Server 8.5

Instruction to run the program
In SQL Server Management Studio, open and run the ‘SQLQuery.sql’ file.
Deploy the ‘GuestBookAPI’  to IIS server.
Change the connection string in ‘appsettings.jason’ to the relevant sql server connection
Open the  GuestBook Widget web application using the IIS server URL 
