import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='POST'){
    const data = req.body;
    const {author, title, date, image, description, content} =  data;

    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const blogsCollection = db.collection('blogs');
    
    const result = await blogsCollection.insertOne({...data});
    console.log(result);
    client.close();
    res.status('201').json({message:'blog created succesfully!!'})
  }
}

export default handler;