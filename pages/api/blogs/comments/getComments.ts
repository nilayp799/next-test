import { MongoClient } from 'mongodb';


async function handler(req:any,res:any){
  if(req.method==='GET'){
    const {bid} = req.query;
    const client = await MongoClient.connect('mongodb+srv://nilaytest:1234@cluster0.xiszjbe.mongodb.net/next-test?retryWrites=true&w=majority')
    const db = client.db();
    const commentsCollection = db.collection('comments');
    const results = await commentsCollection.find({"bid": bid}).toArray();
    console.log(results)
    client.close();
    res.status('200').json({comments:results})
  }
}

export default handler;