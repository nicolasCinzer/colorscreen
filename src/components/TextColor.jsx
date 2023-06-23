/* eslint-disable react/prop-types */
const TextColor = ({ darkMode, color }) => {
  return (
    <>
      <section
        className='textColor'
        style={{ color: darkMode ? '#fff' : '#000' }}
      >
        {color ? color.toLocaleUpperCase() : '???'}
      </section>
    </>
  )
}

export default TextColor
