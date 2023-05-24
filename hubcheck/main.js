var SignalrConnection;
var ChatProxy;

function Connect() {
    ChatServerUrl="http://localhost:7165/";
    var ChatUrl=ChatServerUrl+ "GolfCar.GolfCarR";

    SignalrConnection=hubConnection(ChatUrl,{
        useDefaultPath:false
    });
    ChatProxy=SignalrConnection.createHubProxy('GolfCarHub');
    SignalrConnection.start().done(function () {
        alert("connected");
    })
    .fail(function () {
        alert("failed");
    })
let hub = new HubConnectionBuilder().withUrl(fullurl/huburl).withAutomaticReconnect().build()

this.hub.start().catch(err=>console.log(err))
}

Connect();



// const connection = new signalR.HubConnectionBuilder()
//     .withUrl("/golfcarHub") // Adjust the URL to match your Hub endpoint
//     .build();

// connection.on("OrderStatusChanged", (orderId, newStatus) => {
//     // Handle the OrderStatusChanged event
//     console.log(`Order ${orderId} status changed to ${newStatus}`);
// });

// connection.start()
//     .then(() => {
//         // Connection to the hub is successfully established
//         console.log("Connected to the hub");
//     })
//     .catch((error) => {
//         // Failed to connect to the hub
//         console.error("Failed to connect to the hub:", error);
//     });