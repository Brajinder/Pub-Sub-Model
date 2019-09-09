const express =require('express');
const app =express();
const mqtt= require('mqtt');

app.get ('/', (req, res) => {

    const client =mqtt.connect('mqtt://test.mosquitto.org');


    client.on('connect', () => {
        client.publish('presence', 'hey!, its got the msg', ()=> {
            res.send("published");
        });
    } )

})

app.listen(5000, () => {
    console.log("connected");
})