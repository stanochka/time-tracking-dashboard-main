import avatar from '../images/image-jeremy.png';

export const Profile = props => {
  return (
    <div className='Profile'>
      <div className='MainProfile'>
        <div className='AvatarWrapper'><img className='Avatar' src={avatar} alt="Jeremy" /></div>
        <div className='ProfileText'>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <ul className='TabNav'>
        <li><button id='daily' onClick={props.changeTab}>Daily</button></li>
        <li><button id='weekly' onClick={props.changeTab}>Weekly</button></li>
        <li><button id='monthly' onClick={props.changeTab}>Monthly</button></li>
      </ul>
    </div>
  )
}
