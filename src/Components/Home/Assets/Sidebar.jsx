import React from 'react';
import "./Sidebar.css";
import noti from './Icons/noti.png';
import bookmark from './Icons/bookmark.png';
import shop from './Icons/shop.png';
import sms from './Icons/sms.png';
import user from './Icons/user.png';

function Sidebar() {
  const side = {
        1: {
            icon:noti,
            title:"Notifications",
            desc:"Notifications"
        },
        2: {
            icon:bookmark,
            title:"Saved",
            desc:"Saved Items"
        },
        3: {
            icon:shop,
            title:"My Adverts",
            desc:"Adverts posted by me"
        },
        4: {
            icon:sms,
            title:"Messages",
            desc:"Messages"
        },
        5: {
            icon:user,
            title:"User",
            desc:"User Account"
        }
    }
  
  console.log(side)
  return (
      <main className="nevedelier">
            {Object.keys(side).map((row, ind) => (
                <article className='side_ic' key={`nevedilier ${ind}`}>
                    <img src={side[row]['icon']} alt={side[row]['desc']} />
                </article>
            ))}
      </main>
  )
}



export default Sidebar