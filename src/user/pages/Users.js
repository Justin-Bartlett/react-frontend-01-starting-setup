import React from 'react'

import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Justin Bartlett',
      image: 'https://avatars.githubusercontent.com/u/61560496?v=4',
      places: 5,
    },
    {
      id: 'u2',
      name: 'Justin Bartlett',
      image: 'https://avatars.githubusercontent.com/u/61560496?v=4',
      places: 7,
    },
    {
      id: 'u3',
      name: 'Justin Bartlett',
      image: 'https://avatars.githubusercontent.com/u/61560496?v=4',
      places: 5,
    },
    {
      id: 'u4',
      name: 'Justin Bartlett',
      image: 'https://avatars.githubusercontent.com/u/61560496?v=4',
      places: 7,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
