import { useState } from "react";

export default function INI() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("welcome");
  const [ageGroup, setAgeGroup] = useState(null);

  // WELCOME PAGE
  if (page === "welcome" && !user) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ textAlign: "center", color: "#fff", maxWidth: "500px" }}>
          <div style={{ fontSize: "80px", marginBottom: "20px" }}>🎮</div>
          <h1 style={{ fontSize: "48px", margin: "0 0 10px", letterSpacing: "2px", fontWeight: "bold" }}>INI</h1>
          <p style={{ fontSize: "18px", opacity: 0.9, marginBottom: "40px" }}>Build Games with FEMI AI</p>
          
          <div style={{ display: "flex", gap: "12px", flexDirection: "column", maxWidth: "300px", margin: "0 auto" }}>
            <button onClick={() => { setAgeGroup("kid"); setPage("account"); }} style={{ padding: "16px", background: "#ff6b9d", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
              👶 I'm a Kid
            </button>
            <button onClick={() => { setAgeGroup("adult"); setPage("account"); }} style={{ padding: "16px", background: "#4ecdc4", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
              👨 I'm an Adult
            </button>
            <button onClick={() => { const pwd = prompt("Admin Password:"); if (pwd === "INIROCKS100%") setPage("admin"); else alert("Wrong!"); }} style={{ padding: "12px", background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid #fff", borderRadius: "8px", fontSize: "12px", cursor: "pointer" }}>
              🔐 Admin
            </button>
          </div>

          <div style={{ marginTop: "40px", fontSize: "12px", opacity: 0.7 }}>
            <p>✨ Create amazing games without coding</p>
            <p>📚 Educational rewards for kids</p>
            <p>🤖 Powered by FEMI AI</p>
          </div>
        </div>
      </div>
    );
  }

  // ACCOUNT PAGE
  if (page === "account" && !user) {
    return (
      <div style={{ minHeight: "100vh", background: "#f5f7fa", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", maxWidth: "400px", width: "100%" }}>
          <button onClick={() => setPage("welcome")} style={{ marginBottom: "20px", background: "transparent", color: "#667eea", border: "none", cursor: "pointer", fontSize: "14px" }}>← Back</button>
          
          <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px", fontSize: "24px" }}>Create Account</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button onClick={() => { setUser({ email: "user@gmail.com", method: "google", ageGroup }); setPage(ageGroup === "kid" ? "kids" : "adult"); }} style={{ padding: "12px", background: "#4285f4", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
              🔵 Google
            </button>
            <button onClick={() => { setUser({ email: "user@apple.com", method: "apple", ageGroup }); setPage(ageGroup === "kid" ? "kids" : "adult"); }} style={{ padding: "12px", background: "#000", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
              🍎 Apple
            </button>
            <button onClick={() => { const email = prompt("Enter email:"); if (email) { setUser({ email, method: "email", ageGroup }); setPage(ageGroup === "kid" ? "kids" : "adult"); } }} style={{ padding: "12px", background: "#667eea", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
              ✉️ Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  // KIDS DASHBOARD
  if (page === "kids" && user) {
    return (
      <div style={{ minHeight: "100vh", background: "#fff9e6", padding: "20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ color: "#667eea", margin: 0, fontSize: "28px" }}>👋 Hi {user.email.split("@")[0]}!</h1>
          <button onClick={() => { setUser(null); setPage("welcome"); }} style={{ padding: "8px 16px", background: "#ff6b9d", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            Logout
          </button>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", marginBottom: "20px", border: "2px solid #667eea" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
            <div>
              <div style={{ fontSize: "12px", color: "#666" }}>Weekly Tokens</div>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#667eea" }}>2.0M</div>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#666" }}>Status</div>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#ff6b9d" }}>📌 Free</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#fffbea", border: "2px solid #ffd700", padding: "20px", borderRadius: "12px", marginBottom: "20px" }}>
          <h3 style={{ margin: "0 0 10px", color: "#d97706", fontSize: "18px" }}>📚 Daily Questions</h3>
          <p style={{ color: "#666", marginBottom: "15px", fontSize: "14px" }}>Answer 10 questions correctly to unlock Premium for 24 hours!</p>
          <button style={{ padding: "10px 20px", background: "#d97706", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            📖 Start Quiz
          </button>
        </div>

        <div style={{ background: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #ddd" }}>
          <h3 style={{ margin: "0 0 15px", fontSize: "18px" }}>What would you like to build?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button style={{ padding: "16px", background: "#667eea", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>
              ✨ AI Mode (Recommended)
            </button>
            <button style={{ padding: "16px", background: "#4ecdc4", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}>
              🔨 Drag & Drop
            </button>
          </div>
        </div>

        <div style={{ marginTop: "20px", padding: "12px", background: "#f0f0f0", borderRadius: "8px", fontSize: "12px", color: "#666" }}>
          🔗 Referral Code: <strong style={{ color: "#667eea" }}>INI-{Math.random().toString(36).slice(2, 8).toUpperCase()}</strong>
        </div>
      </div>
    );
  }

  // ADULT DASHBOARD
  if (page === "adult" && user) {
    return (
      <div style={{ minHeight: "100vh", background: "#0f0f1a", color: "#fff", padding: "20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h1 style={{ color: "#667eea", margin: 0, fontSize: "28px" }}>INI Studio</h1>
          <button onClick={() => { setUser(null); setPage("welcome"); }} style={{ padding: "8px 16px", background: "#667eea", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            Logout
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px", marginBottom: "20px" }}>
          <div style={{ background: "#1a1a2e", padding: "16px", borderRadius: "8px", border: "1px solid #333" }}>
            <div style={{ fontSize: "12px", color: "#888" }}>Weekly Tokens</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#667eea" }}>2.0M</div>
          </div>
          <div style={{ background: "#1a1a2e", padding: "16px", borderRadius: "8px", border: "1px solid #333" }}>
            <div style={{ fontSize: "12px", color: "#888" }}>Plan</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#ff6b9d" }}>Free</div>
          </div>
          <div style={{ background: "#1a1a2e", padding: "16px", borderRadius: "8px", border: "1px solid #333" }}>
            <div style={{ fontSize: "12px", color: "#888" }}>Games</div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#4ecdc4" }}>0</div>
          </div>
        </div>

        <h2 style={{ marginTop: "20px", color: "#a78bfa", fontSize: "20px" }}>Create New Game</h2>
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <button style={{ flex: 1, padding: "16px", background: "#667eea", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
            ✨ AI Mode
          </button>
          <button style={{ flex: 1, padding: "16px", background: "#4ecdc4", color: "#000", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
            🔨 Drag & Drop
          </button>
        </div>

        <h2 style={{ color: "#a78bfa", marginTop: "30px", fontSize: "20px" }}>Your Games</h2>
        <div style={{ textAlign: "center", color: "#666", padding: "40px", background: "#1a1a2e", borderRadius: "8px" }}>
          No games yet. Create one!
        </div>
      </div>
    );
  }

  // ADMIN PANEL
  if (page === "admin") {
    return (
      <div style={{ minHeight: "100vh", background: "#1a1a1a", color: "#fff", padding: "20px", fontFamily: "'Courier New', monospace" }}>
        <h1 style={{ color: "#ff6b9d", margin: "0 0 20px" }}>🔐 ADMIN PANEL</h1>
        <button onClick={() => { setPage("welcome"); }} style={{ marginBottom: "20px", padding: "8px 16px", background: "#667eea", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
          Logout
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "8px", border: "2px solid #ff6b9d" }}>
            <div style={{ fontSize: "12px", color: "#888" }}>Total Users</div>
            <div style={{ fontSize: "36px", fontWeight: "bold", color: "#ff6b9d" }}>0</div>
          </div>
          <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "8px", border: "2px solid #4ecdc4" }}>
            <div style={{ fontSize: "12px", color: "#888" }}>Total Games</div>
            <div style={{ fontSize: "36px", fontWeight: "bold", color: "#4ecdc4" }}>0</div>
          </div>
          <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "8px", border: "2px solid #fbbf24" }}>
            <div style={{ fontSize: "12px", color: "#888" }}>Revenue</div>
            <div style={{ fontSize: "36px", fontWeight: "bold", color: "#fbbf24" }}>$0</div>
          </div>
        </div>

        <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "8px", border: "1px solid #555" }}>
          <h2 style={{ marginTop: 0, color: "#667eea" }}>Settings</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <label style={{ display: "block" }}>
              <div style={{ marginBottom: "4px", color: "#888", fontSize: "12px" }}>Export Fee ($)</div>
              <input defaultValue="2" type="number" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #555", background: "#1a1a1a", color: "#fff", boxSizing: "border-box", fontFamily: "inherit" }} />
            </label>
            <label style={{ display: "block" }}>
              <div style={{ marginBottom: "4px", color: "#888", fontSize: "12px" }}>Weekly Token Limit</div>
              <input defaultValue="2000000" style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #555", background: "#1a1a1a", color: "#fff", boxSizing: "border-box", fontFamily: "inherit" }} />
            </label>
            <button style={{ padding: "10px", background: "#667eea", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
              Save Changes
            </button>
          </div>
        </div>

        <div style={{ marginTop: "20px", padding: "12px", background: "#1a1a1a", borderRadius: "6px", border: "1px solid #444", fontSize: "11px", color: "#888" }}>
          Admin password protected. Only accessible with correct credentials.
        </div>
      </div>
    );
  }

  return null;
}
