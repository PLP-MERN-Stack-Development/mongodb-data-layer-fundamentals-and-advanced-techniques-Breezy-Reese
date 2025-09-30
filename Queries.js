

// Queries.js - Node.js script to run MongoDB queries
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://basil59mutuku_db_user:cjq6UZRoK2Bg4cYX@plp.ycdlukc.mongodb.net/plp_bookstore?retryWrites=true&w=majority&appName=PLP';
const client = new MongoClient(url);

// Database Name
const dbName = 'plp_bookstore';

async function runQueries() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('books');

    console.log('\n--- Task 2 Queries ---');

    // db.books.find({ genre: "Science Fiction" })
    console.log('Books with genre "Science Fiction":');
    const sciFiBooks = await collection.find({ genre: "Science Fiction" }).toArray();
    console.log(sciFiBooks);

    // db.books.find({ published_year: { $gt: 2015 } })
    console.log('\nBooks published after 2015:');
    const recentBooks = await collection.find({ published_year: { $gt: 2015 } }).toArray();
    console.log(recentBooks);

    // db.books.find({ author: "J.K. Rowling" })
    console.log('\nBooks by J.K. Rowling:');
    const rowlingBooks = await collection.find({ author: "J.K. Rowling" }).toArray();
    console.log(rowlingBooks);

    // db.books.updateOne({ title: "Book Title" }, { $set: { price: 35.99 } })
    console.log('\nUpdating price of "Book Title" to 35.99:');
    const updateResult = await collection.updateOne(
      { title: "Book Title" },
      { $set: { price: 35.99 } }
    );
    console.log(updateResult);

    // db.books.deleteOne({ title: "Book Title" })
    console.log('\nDeleting book with title "Book Title":');
    const deleteResult = await collection.deleteOne({ title: "Book Title" });
    console.log(deleteResult);

    console.log('\n--- Task 3 Queries ---');

    // db.books.find({ in_stock: true, published_year: { $gt: 2010 } })
    console.log('Books in stock and published after 2010:');
    const inStockRecent = await collection.find(
      { in_stock: true, published_year: { $gt: 2010 } }
    ).toArray();
    console.log(inStockRecent);

    // db.books.find({ in_stock: true, published_year: { $gt: 2010 } }, { title: 1, author: 1, price: 1, _id: 0 })
    console.log('\nProjected fields for books in stock and published after 2010:');
    const projected = await collection.find(
      { in_stock: true, published_year: { $gt: 2010 } },
      { title: 1, author: 1, price: 1, _id: 0 }
    ).toArray();
    console.log(projected);

    console.log('\n--- Task 4 Queries ---');

    // db.books.find().sort({ price: 1 })
    console.log('Books sorted by price ascending:');
    const sortedAsc = await collection.find().sort({ price: 1 }).toArray();
    console.log(sortedAsc);

    // db.books.find().sort({ price: -1 })
    console.log('\nBooks sorted by price descending:');
    const sortedDesc = await collection.find().sort({ price: -1 }).toArray();
    console.log(sortedDesc);

    // db.books.find().limit(5)
    console.log('\nFirst 5 books:');
    const first5 = await collection.find().limit(5).toArray();
    console.log(first5);

    // db.books.find().skip(5).limit(5)
    console.log('\nNext 5 books after skipping first 5:');
    const next5 = await collection.find().skip(5).limit(5).toArray();
    console.log(next5);

    // db.books.aggregate([{ $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }])
    console.log('\nAverage price per genre:');
    const avgPriceGenre = await collection.aggregate([
      { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
    ]).toArray();
    console.log(avgPriceGenre);

    // db.books.aggregate([{ $group: { _id: "$author", count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 1 }])
    console.log('\nAuthor with most books:');
    const topAuthor = await collection.aggregate([
      { $group: { _id: "$author", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log(topAuthor);

    // db.books.aggregate([{ $group: { _id: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] }, count: { $sum: 1 } } }, { $sort: { _id: 1 } }])
    console.log('\nBooks grouped by publication decade:');
    const decadeCount = await collection.aggregate([
      {
        $group: {
          _id: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]).toArray();
    console.log(decadeCount);

    console.log('\n--- Task 5 Queries ---');

    // db.books.createIndex({ title: 1 })
    console.log('Creating index on title field:');
    const indexTitle = await collection.createIndex({ title: 1 });
    console.log('Index created:', indexTitle);

    // db.books.createIndex({ author: 1, published_year: -1 })
    console.log('\nCreating compound index on author and published_year:');
    const indexCompound = await collection.createIndex({ author: 1, published_year: -1 });
    console.log('Index created:', indexCompound);

    // db.books.find({ title: "Book Title" }).explain("executionStats") - Without index (but index already created)
    console.log('\nExplain for find on title (with index):');
    const explainWithIndex = await collection.find({ title: "Book Title" }).explain("executionStats");
    console.log(explainWithIndex);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('\nConnection closed');
  }
}

runQueries();

