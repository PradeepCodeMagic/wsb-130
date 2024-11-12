

import SmallFile from './SmallFile'

function App() {

  let userData={
    name:"ws",
    location:"jodhpur",
    age:12,
    img:"https://i.pinimg.com/564x/cb/72/45/cb7245271756bb9e19c2869cec0c0be8.jpg"
  }

  return (
    <>
    hello Home page
    <br/>
    /

    <SmallFile  data={userData}    />
    </>
  )
}

export default App
