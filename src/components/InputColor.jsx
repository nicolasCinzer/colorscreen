/* eslint-disable react/prop-types */
const InputColor = ({ darkMode, setColor }) => {
  return (
    <>
      <footer>
        <input
          type='text'
          style={{ color: darkMode ? '#fff' : '#000', borderBottom: darkMode ? '1px solid white' : '1px solid black' }}
          className='inputColor'
          onChange={e => setColor(e.target.value)}
        />
      </footer>
    </>
  )
}

export default InputColor
