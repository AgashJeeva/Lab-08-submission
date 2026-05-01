function Testimonial({ quote, name, image }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', margin: '20px', maxWidth: '400px' }}>
      <img src={image} alt={name} style={{ borderRadius: '50%', width: '60px', height: '60px' }} />
      <p style={{ fontStyle: 'italic' }}>"{quote}"</p>
      <p style={{ fontWeight: 'bold' }}>- {name}</p>
    </div>
  )
}

export default Testimonial
