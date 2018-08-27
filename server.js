const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;

// connect to mongo
mongo.connect('mongodb://127.0.0.1/mongochat',function(err, db){
    if(err){
        throw err;
    }
    console.log('Mongo connected');

    //connect to socket.io
    client.on('connection', function(){
        let chat = db.collection('chats');

        sendStatus = function(s){
            socket.emit('status',s);
        }

        //get chats from mongo
        chat.find().limit(100).sort({_id:1}).toArray(function(err,res){
            if(err){
                throw err;
            }

            //emit message
            socket.emit('output',res);
        });

        //handle input events
        socket.on('input', function(data){
            let name = data.name;
            let message = data.message;

            //check for name and message
            if (name == '' || message == ''){
                // send error
                sendStatus('Please enter a name and message');
            }
            else {
                // insert message
                chat.insert({name: name, message: message}, function(){
                    client.emit('output',[data]);
                    // send status object
                    sendStatus({
                        message: 'Message',
                        clear: true
                    });
                });
            }
        });

        socket.on('clear', function(data){
            //remove all
            chat.remove({}, function(){
                //emit
                socket.emit('cleared');
            });
        })
    });
});
