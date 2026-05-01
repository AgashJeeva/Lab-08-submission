function Button({ text, variant = 'primary', size = 'medium' }) {
  const colors = {
    primary: '#007bff',
    secondary: '#6c757d',
    danger: '#dc3545',
  }

  const paddings = {
    small: '5px 12px',
    medium: '10px 20px',
    large: '14px 30px',
  }

  const fontSizes = {
    small: '13px',
    medium: '15px',
    large: '18px',
  }

  return (
    <button
      style={{
        backgroundColor: colors[variant] || colors.primary,
        color: 'white',
        border: 'none',
        padding: paddings[size] || paddings.medium,
        fontSize: fontSizes[size] || fontSizes.medium,
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '6px',
      }}
    >
      {text}
    </button>
  )
}

export default Button
