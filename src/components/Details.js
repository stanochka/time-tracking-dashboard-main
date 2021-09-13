import { Card } from './Card';

export const Details = () => {
  const cards = [
    { title: 'Work',
      url: './images/icon-work.svg'},
    { title: 'Study',
      url: './images/icon-study.svg'},
    { title: 'Social',
      url: './images/icon-social.svg'},
    { title: 'Self Care',
      url: './images/icon-self-care.svg'},
    { title: 'Play',
      url: './images/icon-play.svg'},
    { title: 'Exercise',
      url: './images/icon-exercise.svg'},
  ]

  return (
    <div className='Details'>
      {cards.map(item => <Card key={item.title}
                              title={item.title}
                              url={item.url} />)}
    </div>
  )
}
