import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='POST'){
    const data = req.body;
    const {heading, image, description} = data;

    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const servicesCollection = db.collection('services');
    
    const result = await servicesCollection.insertOne({...data});
    console.log(result);
    client.close();
    res.status('201').json({message:'service added succesfully!!'})
  }
}

export default handler;