import ellipsis from '../icon-ellipsis.svg'

export const Card = ({ title, url }) => {
  return (
    <div className='Card' id={title.replace(/ /g, '')}>
      <div className='ContentWrapper'>
        <div className='CardHeader'>
          <h2>{title}</h2>
          <img className='ellipsis' src={ellipsis} alt='See more'/>
        </div>
      </div>
    </div>
  )
}
