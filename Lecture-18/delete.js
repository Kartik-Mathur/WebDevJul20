const {MongoClient} = require('mongodb')
const DB_PATH = 'mongodb://localhost:27017'

MongoClient.connect(DB_PATH,(err,client)=>{
    if(err) throw err
    // console.log('Connected')
    const testdb = client.db('testdb')
    const people = testdb.collection('people')

    people.deleteOne({name:'Jatin'},(err,results)=>{
        if(err) throw err
        console.log("Deleted Successfully")
        console.log(results)
    })

    client.close()
})
