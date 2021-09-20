# How to Approach any Software

- In Backend it is very important, that every line is performant, secured, optimized and all edge cases are covered.
- As a Software Developer it is our work to think 80% of the time and code 20% of the time.
- Thinking in the sense __Planning out things__.

## How to plan it out if we need to develop some feature or the whole project?

- First thing you would do is Ask at least three questions from client. 
- Next is you would think about extra three questions which you need to ask yourself apart from the above.
- For Example: Let's take an example of E-Commerce Website.
    1. How much traffic are you expecting / Already How much traffic is coming if it has been made earlier?
    2. How much do you want to secure your website?
    3. What is your point of view in opening this company and opening this website?
    4. What is the budget?
- In Website Development, Traffic is the most important thing to consider.
- React and Node is used when we at least 1 Lakh active users generally. If there is very heavy traffic, Go language is preferred.
- First requirement gathering is done. Understand what client's exact requirements are and it can be handled in a best manner.
- For Example - In the Home Page of Amazon, some API calls are made for fetching different kinds of images. If we make a lot of API calls, browser will perform poorly as Javascript is single threaded. So the number of API calls should be as less as possible. This can be achieved using __GraphQL__. 
- GraphQL has many advantages - 
    1. It can give the exact things that are required from the database. That means front-end is telling the back-end to send exactly those things which front-end requires.
    2. When GraphQL connection is made, it is not broken. As compared to REST API, where first a option call is sent to check if a server is up and running and then actual GET/POST request is send.
- First you need to think about the problem, what all problems can we face in future, in as little things as possible. 
- We also need to make documentation of APIs. It gives a clear view of what we want to create. It also tells how we can use the API.
- Suppose we have a Departments API and we have lakhs of departments, we will not want to send the all the departments in one go. This can be handled by Pagination.
- Suppose your department data is security issue, then you will send the data in encrypted format then front-end will decrypt it and then you will see the data because your department data cannot be stealed in API calls.

Some techniques have been designed to handle all these kind of things (Planning out things). Most famous technique is __Agile Methodology__ which is famous today in the industry.


## Why do we need Agile?
### Waterfall Model
- Earlier we used to follow Waterfall model. In waterfall model we used to deploy application only when whole application has been made.
- Requirement Gathering -> Software Design -> Implementation -> Verification -> Maintenance
- In today's world , we cannot use it as there is a lot of competition.
- Here documentation is also a lot more because it consists of all the features of the software.

### Agile
- In agile methodology, we perform a number of sprints. Each sprint consists of no of steps. They are -  
- Requirement -> Design -> Develop -> Test -> Deploy -> Review -> Launch 
- Each Sprint is of 2 Weeks in most of the companies. 
- Each Sprint consists of small work. Ex: Login/Signup.
- This helps to execute small small things and tell the market that we exists. We are also taking client's review.
- Values of Agile - 
    - Individuals and Interactions over Processes and Tools
    - Working Software over comprehensive Documentation
    - Customer Collaboration over Contract Negotiation
    - Responding to Change over Following a Plan
- Advantages of Agile -
    - More Control
    - Better Productivity
    - Better Quality
    - Higher Customer Satisfaction
    - Higher Return on Investment
- Agile is implemented through Sprints, Kanban, Scrums, Risk, Retrospective, Backlogs, Extreme Programming, Lean, etc.

### Product Requirement Document (PRD)
- Product Requirement Document(PRD) is written by Non-Tech People what work needs to be performed from user's perspective.

### High Level Diagram (HLD)
 - We can also create High Level Diagram (HLD) to know a high level overview of what needs to be done. This contains what are you going to do, in which file you are going to do and the time estimate of doing the task.





