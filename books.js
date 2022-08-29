const { db } = require("./admin");
const express = require('express')
const router = express.Router();
const booksRef = db.collection('books');

router.post('/create', async (req, res) => {
   try {
    await booksRef.doc().create(
        req.body
    );
    res.send({ msg: "user added" })
    return res.status(200).send();
   } catch (error) {
    console.log(error);
    return res.status(500).send(error);
   }
   
})

router.get('/', async (req, res) => {
    try {
        const snapshot = await booksRef.get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        res.send(list);
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
   
})

router.put('/update', async (req, res) => {
   try {
    await booksRef.doc(req.body.id).update(
        {
            name:req.body.name
        }
    )
    res.send({ msg:"updated"})
    return res.status(200).send();
   } catch (error) {
    console.log(error);
    return res.status(500).send(error);
   }
})

router.delete('/delete', async (req, res) => {
    try {
     await booksRef.doc(req.body.id).delete()
     res.send({ msg:"deleted"})
     return res.status(200).send();
    } catch (error) {
     console.log(error);
     return res.status(500).send(error);
    }
 })
module.exports = router;