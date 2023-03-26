import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='POST'){
    const data = req.body;
    const {fullName, email, subject, msg ,date ,time} = data;

    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const contactCollection = db.collection('contactMessages');
    
    const result = await contactCollection.insertOne({...data});
    console.log(result);
    client.close();
    res.status('201').json({message:'message sent succesfully!!'})
  }
}

export default handler;