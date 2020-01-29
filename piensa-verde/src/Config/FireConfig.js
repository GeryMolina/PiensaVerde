import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';



const config = {
    apiKey: "AIzaSyAKjjSva2yB6mVHpmOOIjaj4JpufFVqPDY",
    authDomain: "piensaverde-514af.firebaseapp.com",
    databaseURL: "https://piensaverde-514af.firebaseio.com",
    projectId: "piensaverde-514af",
    storageBucket: "piensaverde-514af.appspot.com",
    messagingSenderId: "1088304355149",
    appId: "1:1088304355149:web:4bfec2704dc3efa35c8904"
  };

  class Firebase {
    constructor(){
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

// sign in 
    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
        });

        return user;
    }

// log in 

    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            console.log(err);
        })

        return user;
    }

// logout 

    async logout(){
        const logout = await firebase.auth().signOut().catch(err => {
            console.log(err);
        });

        return logout;
    }

    async getUserState(){
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve);
        })
    }

    //funciones de post
    //traer info de firebase
    async getPosts (){
        let postsArray=[];
        const posts= await firebase.firestore().collection('posts').get();
        posts.forEach(doc =>{
            postsArray.push({id: doc.id, data: doc.data()});
        })
        return postsArray;

    }

    async getPost(postid){
        const post= await firebase.firestore().collection('posts').doc(postid).get();
        const postData= post.data();
        return postData;
    }

    //crear nuevo post
    async createPost(post){
        const storageRef = firebase.storage().ref();
        // create a child inside the storage
        const storageChild = storageRef.child(post.cover.name);
        const postCover =  await storageChild.put(post.cover);
        const downloadURL = await storageChild.getDownloadURL();
        const fileRef = postCover.ref.location.path;
        
 
        let newPost = {
            title: post.title,
            content: post.content,
            cover: downloadURL,
            fileref : fileRef 
        } 
 
        
        const firestorePost = await firebase.firestore().collection("posts").add(newPost).catch(err => {
            console.log(err);
        });

        
        return firestorePost;
    }

    async updatePost(postid, postData){
        if(postData['cover']){
            const storageRef = firebase.storage().ref();
            const storageChild = storageRef.child(post.cover.name);
            const postCover =  await storageChild.put(post.cover);
            const downloadURL = await storageChild.getDownloadURL();
            const fileRef = postCover.ref.location.path;
        
            await storageRef.child(postData['oldcover']).delete().catch(err =>{
                console.log(err);
            })
            console.log('imagen borrada')

            let updatePost={
                title : postData.title,
                content : postData.content,
                cover : downloadURL,
                fileRef: fileRef,
            }

            const post = await firebase.firestore().collection('posts').doc(postid)
            .set(updatePost, {merge:true}).catch(err => console.log(err));

            console.log('publicación editada');
            
            return post;    
        }else{

            const post = await firebase.firestore().collection('posts').doc(postid)
            .set(postData, {merge:true});

            console.log('publicación editada')

            return post;
        }

    }

    async deletePost(postid, fileRef){
        const storageRef= firebase.storage().ref;
        await storageRef.child(fileRef).delete().catch(err => console.log(err))

        console.log('imagen borrada')

        const post = await firebase.firestore().collection('posts').doc(postid).delete().catch(err=> console.log(err));
        console.log('publicacion borrada')

        return post;
    }
} 

export default new Firebase();