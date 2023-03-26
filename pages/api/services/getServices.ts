import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='GET'){
    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const servicesCollection = db.collection('services');
    const results = await servicesCollection.find().toArray();
    client.close();
    res.status('200').json({services:results})
  }
}

export default handler;