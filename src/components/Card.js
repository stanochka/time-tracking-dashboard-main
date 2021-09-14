import ellipsis from '../icon-ellipsis.svg';

export const Card = ({ title, timeframes }) => {

  return (
    <div className='Card' id={title.replace(/ /g, '')}>
      <div className='imgWrapper'></div>
      <div className='ContentWrapper'>
        <div className='CardHeader'>
          <h2>{title}</h2>
          <img className='ellipsis' src={ellipsis} alt='See more'/>
        </div>
        <div className='mainTime'>{32}hrs</div>
        <div className='previousTime'>{'Last Week - ' + 5}hrs</div>
      </div>
    </div>
  )
}
