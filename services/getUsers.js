const myUsers = async()=>{
    let data = await fetch("http://localhost:3000/api/users");
    return data.json();
}

export default myUsers