import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='POST'){
    const data = req.body;
    const {heading, image, description} = data;

    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const constructionsCollection = db.collection('constructions');
    
    const result = await constructionsCollection.insertOne({...data});
    console.log(result);
    client.close();
    res.status('201').json({message:'data added succesfully!!'})
  }
}

export default handler;