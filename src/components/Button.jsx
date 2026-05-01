function Button({ text, variant = 'primary', size = 'medium' }) {
  const colors = {
    primary: '#6366f1',
    secondary: '#10b981',
    danger: '#ef4444',
  }

  const paddings = {
    small: '8px 16px',
    medium: '12px 24px',
    large: '16px 32px',
  }

  const fontSizes = {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
  }

  return (
    <button
      style={{
        backgroundColor: colors[variant] || colors.primary,
        color: 'white',
        border: 'none',
        padding: paddings[size] || paddings.medium,
        fontSize: fontSizes[size] || fontSizes.medium,
        borderRadius: '8px',
        cursor: 'pointer',
        margin: '8px',
        fontWeight: '600',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      }}
      onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
      onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
    >
      {text}
    </button>
  )
}

export default Button
