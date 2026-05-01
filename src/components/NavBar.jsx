function NavBar() {
  return (
    <nav style={{ backgroundColor: '#6366f1', padding: '15px 30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '30px', margin: 0, padding: 0, justifyContent: 'center' }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Home</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Services</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Portfolio</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavBar
