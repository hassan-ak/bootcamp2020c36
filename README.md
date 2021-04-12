# bootcamp2020c36
- JAM-Stack 

## Step18 Gatsby Netlify Functions Use Library
Steps:-
- Repeat Step 04
- Now we will add a dependency package in the netlify function
- cd functions/hello
- npm init
- npm i --save random-name
- Update hello.js code
- Add useEffect hook in index.tsx
- netlify dev
- Note that there are three servers running on local host, Functions server is listening on port 52810, Gatsby server running on port 8000, and proxy server running at port 8888
- Open in the Browser: http://localhost:8888
- Create a netlify.toml file with publish directory public and build command
- yarn build
- Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):
- netlify login
- To publish on Netlify:
  - netlify deploy --prod
- Notice that the tool has created .netlify directory in your project folder.
- Now the site is published and you can copy the link given by the tool in the browser.
- Add /.netlify in .gitignore before pushing to public repo

## Step19 Faunadb Crud Node

### Create FaunaDB Database, Setup a Collection, and Create an Index with Node.js
FaunaDB Overview:
- [What is FaunaDB](https://docs.fauna.com/fauna/current/introduction)
- [FaunaDB review: Fast NoSQL database for global scale](https://www.infoworld.com/article/3489459/faunadb-review-fast-nosql-database-for-global-scale.html)
- [Fauna Raises $27 Million to Continue Providing Cutting Edge Solutions for Developers](https://www.dbta.com/Editorial/News-Flashes/Fauna-Raises-27-Million-to-Continue-Providing-Cutting-Edge-Solutions-for-Developers-141679.aspx)
- [Madrona leads $27M round in Twitter vets’ Fauna database startup; Bob Muglia named chairman](https://www.geekwire.com/2020/madrona-leads-27m-round-twitter-vets-fauna-database-startup-bob-muglia-named-chairman/)
- [Fauna Named to Database Trends and Applications 2019 DBTA 100](https://www.businesswire.com/news/home/20190612005222/en/Fauna-Named-Database-Trends-Applications-2019-DBTA/)
- [Consistency without Clocks: The FaunaDB Distributed Transaction Protocol](https://fauna.com/blog/consistency-without-clocks-faunadb-transaction-protocol)
- [Signup for FaunaDB Service](https://dashboard.fauna.com/accounts/register)
- [Install DotEnv](https://www.npmjs.com/package/dotenv)
- [We will follow this tutorial](https://docs.fauna.com/fauna/current/tutorials/crud)

Steps to Follow:
- [Signup for FaunaDB Service](https://dashboard.fauna.com/accounts/register)
- Create a Project Directory
- npm init
- [Install DotEnv](https://www.npmjs.com/package/dotenv)
- npm install dotenv --save
- npm install faunadb --save
- [We will follow this tutorial](https://docs.fauna.com/fauna/current/tutorials/crud)
- Go to fauna dashboard setting section create a new account API key and paste it in .env file with the name FAUNADB_ADMIN_SECRET=my-admin-secret
- Write and Run Node Programs:
- node step0-create-database
- Do the same with all the nine steps

Topics Covered:- 
- Create database
- Create database key
- Create container
- Create index
- Create document
- Create multiple documents
- Retrive document by ref
- Retrive document by index
- Update document
- Replace document
- Delete document

## Online Lectures
- [Link1](https://www.youtube.com/watch?v=URXA_2HV61s&ab_channel=PanacloudServerlessSaaSTraining)
- [Link2](https://www.facebook.com/zeeshanhanif/videos/10224681883899372/)
- [Link3](https://www.youtube.com/watch?v=ysEQiXY9ozM&ab_channel=PanacloudServerlessSaaSTraininginUrdu)
- [Link4](https://www.facebook.com/zeeshanhanif/videos/10224690706039920/)
