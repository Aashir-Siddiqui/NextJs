"use client"

import { useState } from "react"

function Counter() {
    const [increment, setIncrement] = useState(0)

  return (
    <button onClick={() => setIncrement((prev) => prev + 1)} className="bg-blue-500 text-white p-2 rounded">Add - {increment}</button>
  )
}

export default Counter