import React , {useState} from 'react'

export default function Login() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDeafault();
        console.log("Username:", username);
        console.log("Email:", email)
    }


  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>
        Username:
        <input 
           type='text'
           value={username}
           onChange={(e) => setUsername(e.target.value)}
        />
      </label>
    </div>
    <div>
        <label>
            Email:
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </label>
    </div>
    <button type='submit'>Submit</button>
    </form>
  )
}
