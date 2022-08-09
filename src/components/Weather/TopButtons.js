import React from 'react'

function TopButtons({ setQuery }) {
  const cities = [
    {
      id:1,
      title: "Tulsa"
    },
    {
      id:2,
      title: "Oklahoma City"
    },
    {
      id:3,
      title: "Miami"
    },
    {
      id:4,
      title: "Lawton"
    },
    {
      id:5,
      title: "Idabel"
    }
  ]
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) =>(
        <button
        key={city.id}
        className="text-white text-lg font-medium"
        onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
          </button>
      ))}
    </div>
  )
}

export default TopButtons;
