Create Database QuestbookDB
Go

Use QuestbookDB
Go

Create table Questbook
(
     ID int primary key identity,
     Name nvarchar(200),
     Url nvarchar(200),
     Category nvarchar (200)
)
Go

Insert into Questbook values ('Mark Robinson', 'www.youtube.com/', 'Architecture')
Insert into Questbook values ('Steve Jobs', 'www.google.co.nz/', 'Architecture')
Insert into Questbook values ('Ben Hur', 'www.wikipedia.org/', 'Games')
Insert into Questbook values ('Philip Lam', 'www.python.org/', 'Scenery')

Go

Select * From Questbook
