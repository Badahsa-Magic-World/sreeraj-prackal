var firebaseConfig = {
    apiKey: "AIzaSyAlzeKvgGWRCfhG7qcv-ZcM9eDP2yjU8nA",
    authDomain: "hidden-gallery-69853.firebaseapp.com",
    databaseURL: "https://hidden-gallery-69853.firebaseio.com",
    projectId: "hidden-gallery-69853",
    storageBucket: "hidden-gallery-69853.appspot.com",
    messagingSenderId: "489710777722",
    appId: "1:489710777722:web:89611b9922f896381d52c3",
    measurementId: "G-MGDYSN3ZF7"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();
var code = '323697'; // client's code
console.log("Firebase app created !!!!");


window.onload = function() {
    getData().then((url) => {
        // image = console.log(data);
        var img = document.getElementById("predImage");
        // var loader = document.getElementById("loadingRing");
        // loader.setAttribute("class", '')
        img.setAttribute("src", url);
    });
}


const getData = async() => {
    const doc = await db.doc("prediction/" + code).get();
    const data = doc.data()
    if (!data) {
        console.error('document does not exist')
        return
    }
    return data['image'];
}