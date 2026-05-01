function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>
      <p>&copy; 2026 Agash. All rights reserved.</p>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>GitHub</a>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>LinkedIn</a>
        <a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>Twitter</a>
      </div>
    </footer>
  )
}

export default Footer
