import { MongoClient, ObjectId } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='GET'){
    const {bid} = req.query;
    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const blogsCollection = db.collection('blogs');
    const blogID = new ObjectId(bid);
    const results = await blogsCollection.find({"_id": blogID}).toArray();
    client.close();
    res.status('200').json({blog:results})
  }
}

export default handler;