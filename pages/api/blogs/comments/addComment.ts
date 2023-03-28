import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='POST'){
    const data = req.body;
    const {author, date, comment, time, bid} =  data;

    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const commentsCollection = db.collection('comments');
    
    const result = await commentsCollection.insertOne({...data});
    console.log(result);
    client.close();
    res.status('201').json({message:'comment added succesfully!!'})
  }
}

export default handler;