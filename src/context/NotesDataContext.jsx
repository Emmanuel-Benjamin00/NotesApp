import React, { useState } from 'react'
export const NotesDataTaken = React.createContext(null)

function NotesDataContext({ children }) {
  
  const [data, setData] = useState([
    {
      title: "Sample Note",
      note: `Add title & Notes in the above box & press enter to add a note. 
      Click Edit, to Edit the content, & to see full content, if some content is hidden. Delete symbol deletes the Note.`
    }

  ])
  return <NotesDataTaken.Provider value={{ data, setData }}>
    {children}
  </NotesDataTaken.Provider>
}

export default NotesDataContext