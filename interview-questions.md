# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: To fix this mistake see method below. The name of the foreign key would be has_many students and is on the student model.

  Researched answer:

  To correct the mistake: Step 1: run the command 'rails generate migration', add a new column to the table. Step 2: add_column :students, :cohort_id, :integer' Step 3: lastly, in terminal, run 'rails db:migrate'.


2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Params are passed so information can get to the query database and modified if needed.

  Researched answer:

  RESTful routes are alway passed params because parameters are attached to the URL and helps to retrieve specific data and performs actions based on the inputs passed by the user.


3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate mode adds data, rails generate controller coordinates data and rails generate migration evolves data.

  Researched answer:

  RAILS GENERATE mode - Adds database records, adding rows to the table, find particular data you're looking for, update that data, or remove data.

  RAILS GENERATE controller - The logical center of your application. It coordinates the interaction between the user, the views, and the model.

  RAILS GENERATE migration - Migrations are a feature of Active Record that allows you to evolve your database schema over time. Rather than write schema modifications in pure SQL, migrations allow you to use a Ruby DSL to describe changes to your tables. 


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - Index controller method, will list all students.         

action: "POST" location: /students - Create controller method, create new students then redirect.      

action: "GET" location: /students/new - New controller method, show new students.

action: "GET" location: /students/2 - Shw controller method, show info about specific students. 

action: "GET" location: /students/2/edit - Edit controller method, show edit form for one student.   

action: "PATCH" location: /students/2 -  Update controller method, update particular students, then redirect.     

action: "DELETE" location: /students/2 - Destroy controller method, delete student that redirect.     

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a developer, I can create a full-stack Rails application.

As a developer, my to-do list can have a title and content.

As a developer, I can add a new my to-do list directly to my database.

As a user, I can see all the titles listed on the home page of my to-do list.

As a user, I can click on the title of my to-do list and be routed to a page where I see the title and content I selected.

As a user, I can navigate from my to-do list page back to the home page.

As a user, I see a form where I can create a new my to-do list.

As a user, I can click a button that will take me from the home page to a page 
where I can create my to-do list.

As a user, I can navigate from my to-do list back to the home page.

As a user, I can click a button that will submit my to-do to the database.

As a user, I when I submit my to-do, I am redirected to the home page.

As a user, I can update my to-do list.

As a user, I can delete my to-do list.