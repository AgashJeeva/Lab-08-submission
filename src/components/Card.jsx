function Card({ image, title, description }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', width: '300px', padding: '10px', margin: '20px' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card
