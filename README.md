Since the birth of the Internet and the World Wide Web, the information space has evolved from a simple set of hypertext documents to a rich digital media containing pictures, audio, video, graphics and animations. 3D graphics, which are commonly used in native desktop applications, has crossed its boundary and also became part of the web through plugin technologies such as Adobe Stage3D. Then it has evolved to pluginless technologies such as WebGL and X3DOM which are more convenient and secure.  WebGL API and its frameworks are imperative and flexible solutions but they focus on bringing 3D graphics to the web in a non declarative manner. X3DOM focuses on integrating 3D graphics with the standard web and make 3D graphics content behave in a similar manner to normal hypertext or html web page. Hyperlinks are a foundational concept in the world wide web, which help to link and branch a multitude of web pages within a site. The feature remains completely missing in modern declarative technologies such as X3DOM and thus leaves the 3D browsing experience largely unexplored. The goal of our project is to explore how adding hyperlinks to objects or models in web 3D scene to another 3D scene or web page could enhance the user experience and provide the overall feeling of browsing 3D web pages. To explore the idea, we use X3DOM to develop a 3D web application or website, which allows visitors to leave their own web addresses that can lead to their favourite 3D scenes or other web pages using the guestbook widget. The links to those 3D scenes or web pages will be represented by hyperlinked 3D objects in our web application in which users can interact with, in order to explore and navigate to the relevant 3D content or web pages.


Deployement Instructions: 

Prerequisites:
SQL Server 2017 
IIS Server 8.5

Instruction to run the program
In SQL Server Management Studio, open and run the ‘SQLQuery.sql’ file.
Deploy the ‘GuestBookAPI’  to IIS server.
Change the connection string in ‘appsettings.jason’ to the relevant sql server connection
Open the  GuestBook Widget web application using the IIS server URL 
