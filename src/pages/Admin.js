import { useEffect, useState } from "react"

const Admin = () => {
    const [booksList, setBooksList] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            let headersList = {
                "Accept": "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "accestoken": localStorage.getItem('token'),
                "Content-Type": "application/json"
            }



            let response = await fetch("http://localhost:5000/getBooks", {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            setBooksList(data)
            console.log(data)
        }
        getBooks()

    }, [])

    const DeleteBook=async(e,index)=>{
        setBooksList((prevList) => {
            const newList = prevList.filter((book, i) => i !== index);
            return newList;
          });
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "accestoken": localStorage.getItem('token'),
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "id":e._id
           });
           
           let response = await fetch("http://localhost:5000/deleteBook", { 
             method: "DELETE",
             body: bodyContent,
             headers: headersList
           });
           
           let data = await response.json();
         
    }

    return (
        <div className="w-full px-8 overflow-x-auto mb-10">
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Num</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">title</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">user</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">total</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">date</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>

                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 ">
                    {booksList.map((e, index) => {
                        return (
                            <tr>
                                <td class="px-6 py-4 whitespace-nowrap">{index}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{e.title}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{e.username}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{e.phone}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{e.Guests}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-orange-500 font-bold">${e.total}</td>
                                <td class="px-6 py-4 whitespace-nowrap">{e.date}</td>
                                <td class="px-6 py-4 whitespace-nowrap"><button onClick={()=>DeleteBook(e,index)} className=" px-1 py-2  bg-red-500 text-white rounded-md hover:bg-red-700">Delete</button></td>
                            </tr>
                        )
                    })}
                    

                </tbody>
            </table>

        </div>
    )
}

export default Admin