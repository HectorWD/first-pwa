const express = require('express')
const cors = require('cors')
const webpush= require('web-push')
//Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//Simulacion de BD conlos datos de la subscripsion
const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/f3rirmA5EMU:APA91bHsiaTuycf5nMkmwN-MCZugJ3Q82NCvgEw53mp7xA-Hu4t1W3MTUwrcLqyl4difDJlBxr5p_KBOvbk13nOIDxaCE_MJFZnBjcc89SDe2Q_U7c853Rc2nsZQWXAqKVsoSRJTLF3Y',
    expirationTime: null,
    keys: {
        p256dh: 'BEVWnd-XC_gpdXP15XmSvbuF9rxdI0TUdCa6TCpgyyefJwy3d5e52OPYslDhk0J215MfHLmWRUjLa7pMgmWpYv4',
        auth: 'X9Cuu5xIdkh_VlABX9XpoQ'
    }
}

//Keys generadas todo esta info esta en la doc. de npm web-push
const vapidKeys = {
    private: 'AaDwz5FGI1mBz0g61MzgPNVvTkxK3MM6gVbIEsO4QwI',
    public: 'BLWPeA0QPl3yK3paVLWe9L0lXV9zQJhj1UgIbjqy-QsTLuvcZ5iUfm489VwvjfP-RRVX1zmNZnNaRmheMtYV8mA'
}

webpush.setVapidDetails(
    'mailto:hectorwong2110@gmail.com',
    vapidKeys.public,
    vapidKeys.private
  );
//Routes
app.get('/', async(req, res) => {
    try {
        const payload=JSON.stringify({title:'titulo',message:'Soy el mensaje'});
        await webpush.sendNotification(pushSubscription,payload)
        await res.send('Enviado')
    } catch (error) {
        console.log(error)
    }
});

app.post('/subscription', (req, res) => {
    console.log(req.body)
    res.sendStatus(200).json();
})
app.listen(8000, () => console.log('Server listening on port 8001'))