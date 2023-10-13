import searchUsers from '../../../../services/searchUsers'
import Link from 'next/link';
const Userdetail = async ({params}) => {
  const user = await searchUsers(params.userid)
  console.log(user.id);
  return (
    <div>
      <h2>Hello All user id Here</h2>
      <ul>
        <li>User Id: {user.id}</li>
        <li>User Name: {user.name}</li>
        <li>User  Age: {user.age}</li>
        <li>User Email: {user.email}</li>
      </ul>
      <Link href="/about">&lt;&lt;Go to Back</Link>
    </div>
  )
}

export default Userdetail


// static params create logic here

// export async function generateStaticParams() {
//   const getUserList = searchUsers()
//   const users = await getUserList;
//   return users.map((user) => ({
//     UserId: user.id.toString()
//   }))
// }