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
      <li><button>Daily</button></li>
      <li><button>Weekly</button></li>
      <li><button>Monthly</button></li>
    </ul>
    </div>
  )
}
