function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e293b', color: 'white', textAlign: 'center', padding: '40px 20px' }}>
      <p style={{ fontSize: '1rem', opacity: '0.9' }}>&copy; 2026 Agash. All rights reserved.</p>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '25px' }}>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>GitHub</a>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>LinkedIn</a>
        <a href="#" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Twitter</a>
      </div>
    </footer>
  )
}

export default Footer
