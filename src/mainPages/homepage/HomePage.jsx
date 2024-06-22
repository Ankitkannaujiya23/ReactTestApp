import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { PopupAlertBox } from '../../components/sweetAlertBox/CustomAlert';
import Pagination from '../../components/pagination/Pagination';
import axios from 'axios';
import UserCard from '../../components/userCard/UserCard';
import { CiLogout } from "react-icons/ci";
import { logout } from '../../stateStore/storeSlices/UserStoreSlice';


const HomePage = () => {
const navigate=useNavigate();
  const [page, setPage] = useState(1);
  const [usersList, setUserList] = useState([]);



  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then(res => {
      if (res.status === 200 && res.data.data.length > 0) {
        setUserList(res.data.data)
      }
    }).catch(error => console.log({ error }));
  }, [page]);

 const handleLogout=()=>{
    window.localStorage.removeItem('token');
    navigate('/login')
  }

  return (<>
    <div className="min-h-full">
      <header className="bg-gray-100 shadow">
        <div className="mx-auto flex justify-between align-items-center max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard  </h1>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 cursor-pointer" onClick={()=> handleLogout()} > <CiLogout /></h1>

         

        </div>
      </header>
      <main>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Users</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {usersList.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.avatar}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <span className="mt-4 text-sm text-gray-700">{product.first_name}</span> <span className="mt-4 text-sm text-gray-700">{product.last_name}</span>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.email}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Pagination currentPage={page} onPageChange={data => setPage(data)} />

      </main>
    </div>
  </>)
}

export default HomePage


