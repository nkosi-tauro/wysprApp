import { useState, useEffect } from 'react'

const people = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]




export default function Cards() {
  type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
  }

  type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
  }

  type CombinedApiData = Photo & Comment

  // We will combine both apis into 1 state variable
  const [apiData, setApiData] = useState<CombinedApiData[]>([]) 

  useEffect(() => {
    const fetchData = async () => {
      const responsePhotos = await fetch('https://jsonplaceholder.typicode.com/photos')
      const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments')
      const photos: Photo[] = await responsePhotos.json()
      const comments: Comment[] = await responseComments.json()

      // Find matching ids and combine photos and comment object into 1
      const combinedApiData = photos.map((photo: any) => {
        const matchId = comments.find((comment: any) => comment.id === photo.id)
        if (matchId) {
          return { ...photo, ...matchId }
        }

        return photo
      
      })
      setApiData(combinedApiData) 
    }
    fetchData()
  },[])
  // console.log(apiData)

  return (
    <>
      <div className="m-20">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {apiData.map((data) => (
            <li
              key={data.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col p-4">
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-md" src={data.url} alt="" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{data.body}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}