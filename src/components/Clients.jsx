import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => 
   (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap sm:flex-row flex-col w-full `}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1  ${styles.flexCenter}  sm:min-w-[192px] min-w-[120px] sm:mb-0 mb-8`}>
            <img src={client.logo} alt="client" className="w-[192px] "/>
          </div>
        ))}
      </div>
    </section>
  )


export default Clients