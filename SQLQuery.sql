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

Insert into Questbook values ('Mark Robinson', 'https://www.youtube.com/', 'Sport')
Insert into Questbook values ('Steve Jobs', 'https://www.google.co.nz/', 'Fashion')
Insert into Questbook values ('Ben Hur', 'https://www.wikipedia.org/', 'Technology')
Insert into Questbook values ('Philip Lam', 'https://www.python.org/', 'Astronomy')

Go

Select * From Questbook
