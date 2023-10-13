const myUsers = async()=>{
    let data = await fetch("http://localhost:3000/api/users");
    return data.json();
}

export default myUsers

// already in comment below three line and use in this lib folder db.js
// // const {username,password}=process.env  //if using .env that time use this line
// // const username='salvepawan'
// // const password='pawan123'

// export let myConnectionStr="mongodb+srv://salvepawan:pawan123@cluster0.0gqscjf.mongodb.net/productDB?retryWrites=true&w=majority"
// reduce above export line above three line already commented
