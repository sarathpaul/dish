// import React, {Component} from 'react';
// import axios from 'axios'
// // function Dishes() {
// //     return(
// //         <div>
// //             <p>haiiii dishes</p>
// //         </div>
// //     )
// // }
// // export default Dishes

// class Ajax extends Component{
//     constructor() {
//         super();
//         this.state = {
//             posts : []
//         }
//     }

//     componentDidMount() {
//         axios.get("https://jsonplaceholder.typicode.com/posts/1/comments").then(responce=>{
//             console.log(responce)
//             this.setState({posts:responce.data})
//         })
//     }

//     render() {
//         return (
            
//             <table>
//                 <thead>
//                     <tr>
//                         <td>id</td>
//                         <td>title</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.posts.map((itm,k)=>{
//                         return (
//                             <tr>
//                                 <td>{itm.id}</td>
//                                 <td>{itm.name}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         )
//     }
// }
// export default Ajax