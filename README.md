# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data
- `Queries.js`: Script to run various MongoDB queries on the books collection
- `SETUP_INSTRUCTIONS.md`: Detailed setup instructions for common issues
- `examples/`: Directory containing example MongoDB scripts and connection examples

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Running the Scripts

### Prerequisites

1. Ensure Node.js is installed: `node --version`
2. Install the MongoDB Node.js driver: `npm install mongodb`
3. Have MongoDB running locally or access to a MongoDB Atlas cluster

### 1. Populate the Database (`insert_books.js`)

This script inserts sample book data into your MongoDB database.

**To run:**
```bash
node insert_books.js
```

**What it does:**
- Connects to the MongoDB database (configured for a specific Atlas cluster)
- Drops the existing `books` collection if it exists
- Inserts 12 sample books with details like title, author, genre, price, etc.
- Displays the inserted books in the console
- Provides example MongoDB queries you can try in the shell

**Note:** The script uses a hardcoded MongoDB Atlas connection string. If you're using your own MongoDB instance, update the `uri` variable in `insert_books.js` with your connection string.

### 2. Run Queries (`Queries.js`)

This script demonstrates various MongoDB queries and operations on the books collection.

**To run:**
```bash
node Queries.js
```

**What it does:**
- Connects to the MongoDB database
- Runs a series of queries including:
  - Find operations with filters (genre, publication year, author)
  - Update and delete operations
  - Projection queries
  - Sorting and limiting results
  - Aggregation pipelines (average price by genre, author with most books, books by decade)
  - Index creation and query performance analysis

**Important:** Run `insert_books.js` first to populate the database before running `Queries.js`.

### Configuration

The scripts are configured to connect to a MongoDB Atlas cluster. If you need to use a different database:

1. Update the `uri` variable in both `insert_books.js` and `Queries.js`
2. Ensure your MongoDB instance is running and accessible
3. Update the `dbName` if using a different database name

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
