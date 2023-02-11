import React from 'react'
import pageProps from '../../../../app/utils/props/pageProps'
import MainBody from '../../components/MainBody'
import { useGetUsersQuery } from './usersApiSlice'

const Users:React.FC<pageProps> = ({pageData}:pageProps)  => {
  
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetUsersQuery('userList', {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
})

  return (
    <MainBody>
      <div className="container-fluid">
        
      </div>
    </MainBody>
  )
}

export default Users
