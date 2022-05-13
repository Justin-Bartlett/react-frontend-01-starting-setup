import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world',
    imageUrl:
      'https://static.thousandwonders.net/Empire.State.Building.original.141.jpg',
    address: '20 West 34th Street, New York City, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world',
    imageUrl:
      'https://static.thousandwonders.net/Empire.State.Building.original.141.jpg',
    address: '20 West 34th Street, New York City, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u2',
  },
]

const UserPlaces = (props) => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(
    (places) => places.creator === userId
  )

  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
