import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    alert(data.info);
  };

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    alert(data.info);
    console.log("Token:", data.token);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{isLogin ? "🔐 Login" : "📝 Register"}</h2>

      {!isLogin && (
        <>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br /><br />
        </>
      )}

      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />

      {isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleRegister}>Register</button>
      )}
      <br /><br />

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "New User? Register" : "Already Registered? Login"}
      </button>
    </div>
  );
}

export default App;