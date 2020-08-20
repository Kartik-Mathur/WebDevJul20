const {MongoClient} = require('mongodb')
const DB_PATH = 'mongodb://localhost:27017'

MongoClient.connect(DB_PATH,(err,client)=>{
    if(err) throw err
    // console.log('Connected')
    const testdb = client.db('testdb')
    const people = testdb.collection('people')

    // people.insertOne({
    //     name:'Jatin',
    //     city:'Jharkand',
    //     age:20
    // },(err,result)=>{
    //     if(err) throw err
    //     console.log(result.ops)
    // })

    people.insertMany([{
        name:'Anmol',
        city:'Jharkand',
        age:30
    },{
        name:'Samarpan',
        city:'Delhi',
        age:20
    },{
        name:'Harmanjeet',
        city:'Banglore',
        age:24
    }],(err,result)=>{
        if(err) throw err
        console.log(result.ops)
    })
    
    client.close()
})
