const firebaseConfig = {
    apiKey: "AIzaSyD1ccLKhgqoAf6Zcbk04awQrIn1J1DWmBA",
    authDomain: "userdata-f2775.firebaseapp.com",
    databaseURL: "https://userdata-f2775-default-rtdb.firebaseio.com",
    projectId: "userdata-f2775",
    storageBucket: "userdata-f2775.appspot.com",
    messagingSenderId: "1040703374269",
    appId: "1:1040703374269:web:5866af891161d00ea1c8d4",
    measurementId: "G-CXKS076QX1"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB=  firebase.database().ref('contactForm');
  document.getElementById('contactForm').addEventListener("submit" , submitForm);
  function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name');
    var number=getElementVal('number');
    var email=getElementVal('email');
    var message =getElementVal('message');
    saveMessage(name,number,email,message);
    document.querySelector('.alert').style.display='block';
    setTimeout(()=>{
        document.querySelector('.alert').style.display='none';
    },3000
    );
    document.getElementById('contactForm').reset();
  }

  const saveMessage=(name,number,email,message)=>{
    var newConF=contactFormDB.push();
    newConF.set({
        name:name,
        number:number,
        email:email,
        message:message,
    })
  };

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };
