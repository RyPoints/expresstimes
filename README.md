# expresstimes
A newspaper GET/POST example in the JavaScript React stack.

## Architecture
[![Architecture](.images/architecture.png)](.images/architecture.png)
A React App connects to AWS Lambda, retrieving and posting articles to a Postgres database.

## Lambda

A short Lambda function is used to write and read the Postgres database using [Sequelize](https://sequelize.org) and Lambda function uploading and API endpoint creation was handled with [Claudia.js](https://claudiajs.com).

## React

An existing React grid component was further customized to provide display of articles.

## UI
[![UI](.images/expresstimes1.png)](.images/expresstimes1.png)

## Hosting

A live version of the React App is up at:

## From Dev to Production
I consider this more of a dev project, a tech demo.  If this was going to move to production, even more work would be needed, including:

* Scrolling functionality would need to be added to the details screen of the grid.
* Inputs from users would need to be checked to see if they were well-formed and for security purposes, because we are accepting HTML inputs, before passing them along.
* Error handling would need to be added.