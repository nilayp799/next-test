import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='GET'){
    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const constructionsCollection = db.collection('constructions');
    const results = await constructionsCollection.find().toArray();
    client.close();
    res.status('200').json({constructions:results})
  }
}

export default handler;