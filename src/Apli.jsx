import './Apli.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: "midudev",
    name: "miguel angel Duran",
    isFollowing: true,
  },
  {
    userName: "HIDEO_KOJIMA",
    name: "Hideo Kojima",
    isFollowing: false,
  },
  {
    userName: "LuquitaRodrigue",
    name: "Lucas Rodriguez",
    isFollowing: true,
  },
  {
    userName: "CarlosMaslaton",
    name: "Carlos Maslaton",
    isFollowing: false,
  },
]

export const Apli = () => {
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing = {isFollowing}
            name={name}/>
          )
        )
      }

    </section>
  )
}

export default Apli