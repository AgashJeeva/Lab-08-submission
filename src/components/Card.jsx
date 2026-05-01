function Card({ image, title, description }) {
  return (
    <div style={{ backgroundColor: 'white', border: 'none', borderRadius: '12px', width: '320px', padding: '15px', margin: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '15px' }} />
      <h3 style={{ marginBottom: '10px', color: '#1e293b' }}>{title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{description}</p>
    </div>
  )
}

export default Card
