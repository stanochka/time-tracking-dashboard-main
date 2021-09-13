import avatar from '../images/image-jeremy.png'

export const Profile = () => {
  return (
    <div className='Profile'>
    <div className='MainProfile'>
      <div className='AvatarWrapper'><img className='Avatar' src={avatar} alt="Jeremy" /></div>
      <p>Report for</p>
      <h1>Jeremy Robson</h1>
    </div>

    <ul className='TabNav'>
      <li>Daily</li>
      <li>Weekly</li>
      <li>Monthly</li>
    </ul>
    </div>
  )
}
