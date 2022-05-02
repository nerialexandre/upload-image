import './App.css';
import { useState } from 'react'

function App() {

  const [avatar, setAvatar] = useState(false)

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }
  return (
    <div className="App">
        <img src={avatar ? avatar : "https://via.placeholder.com/300x300"} alt="logo" />
        <p>
          Upload image.
        </p>

        <input type="file" accept="image/*" onChange={onChange} />

        
       
    </div>
  );
}

export default App;
