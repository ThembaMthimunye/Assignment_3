import React from 'react'
import Navbar from './navbar'

const page3 = () => {
    return (
        <div>
            <Navbar />
            <div className='Content-container'>
                <div className='image-section'>
                    <img src="" alt="" />
                </div>
                <div className='content-infor'>
                    <div className='content-title'>
                        <h2>

                        </h2>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio commodi ullam iusto
                            accusamus ipsum praesentium sapiente cumque delectus quaerat distinctio consequatur atque nobis,
                            odio architecto animi hic nulla, facilis et error nam, rem esse. Rerum iste non minus ipsam!
                        </h3>

                        <p>Country:{ }</p>
                        <p>Genre:{ }</p>
                        <p>Year:{ }</p>
                        <p>Type:{ }</p>
                    </div>
                    <button className='add-btn'>EDIT</button>
                    <button className='add-btn'>DELETE</button>
                </div>
            </div>
        </div>
    )
}

export default page3
