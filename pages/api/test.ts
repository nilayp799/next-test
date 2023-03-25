import { MongoClient } from 'mongodb';
import { json } from 'stream/consumers';

async function handler(req:any,res:any){
  if(req.method==='GET'){
    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const testCollection = db.collection('test');
    const results = await testCollection.find().toArray();
    client.close();
    console.log(results)
    res.status('200').json({data:JSON.stringify(results)})
  }
}

export default handler;