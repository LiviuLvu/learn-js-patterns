// Publish Subscribe Implementation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript

(function(myPubSubObject) {
    let topicStorage = {};
 
    let topicID = -1;

    // Publish events
    myPubSubObject.publish = function(topic, args) {
 
        if (!topicStorage[topic]) {
            return false;
        }
 
        let subscribers = topicStorage[topic],
            subscribersID = subscribers ? subscribers.length : 0;
 
        while (subscribersID--) {
            subscribers[subscribersID].func(topic, args);
        }
 
        return this;
    };
 
    // Subscribe to events
    myPubSubObject.subscribe = function(topic, func) {
 
        if (!topicStorage[topic]) {
            topicStorage[topic] = [];
        }
 
        let token = ( ++topicID ).toString();
        topicStorage[topic].push({
            token: token,
            func: func
        });
        return token;
    };
 
    // Unsubscribe from a specific topic based on reference from subscription
    myPubSubObject.unsubscribe = function( token ) {
        for ( let m in topicStorage ) {
            if ( topicStorage[m] ) {
                for ( let i = 0, j = topicStorage[m].length; i < j; i++ ) {
                    if ( topicStorage[m][i].token === token ) {
                        topicStorage[m].splice( i, 1 );
                        return token;
                    }
                }
            }
        }
        return this;
    };
}( pubSubObject ));

let pubSubObject = {};

let callBackExample = function ( topicStorage, data ) {
  console.log( "Logging: " + topicStorage + ": " + data );
};

// listen for topicStorage they have subscribed to. Invoke a callback once a new notification is broadcast on that topic
let subscriber = pubSubObject.subscribe( "inbox/newMessage", callBackExample );

// publishers are in charge of publishing topicStorage or notifications
pubSubObject.publish( "inbox/newMessage", "hello world!" ); // publish string
pubSubObject.publish( "inbox/newMessage", ["test", "a", "b", "c"] ); // publish array
pubSubObject.publish( "inbox/newMessage", { // publish object
    sender: "hello@google.com",
    body: "Hey again!"
});

// unsubscribe if subscribers should not be notified anymore
pubSubObject.unsubscribe(subscriber);

// the subscriber is no longer listening. callBackExample will not log
pubSubObject.publish("inbox/newMessage", "Hello! are you still there?");