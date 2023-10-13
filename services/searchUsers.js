const myUsers = async(id)=>{
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data= await data.json();
    return data.result;
}

export default myUsers
