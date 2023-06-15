import React from 'react'
import Quality from '../assets/quality.png'
import Cost from '../assets/cost.png'
import Scalable from '../assets/cloud-server.png'

const Benefits = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-[#fbbf24]">

            <section className="max-w-[1240px] mx-auto text-gray-800 text-center">

                <h2 className="text-[#1e1b4b] text-3xl font-bold mb-12">Outsource to Thrive!</h2>
                <p className='text-center m-0 mt-3'>Unlock the advantages of outsourcing with us. Harness our expertise, save resources, and drive growth.</p>

                <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                    <div className="mb-12 md:mb-0">
                        <div className="flex justify-center">
                            <img className='scale-50 mx-auto' src={Quality} alt='Quality-assurance' />
                        </div>
                        <h5 className="text-lg font-bold mb-4">Assured Quality</h5>
                        <p className="mb-4">
                            Experience our unwavering dedication to quality assurance. We leave no stone unturned when it comes to delivering the highest standards of excellence in our services.
                        </p>
                    </div>
                    <div className="mb-12 md:mb-0">
                        <div className="flex justify-center">
                            <img className='scale-50 mx-auto' src={Scalable} alt='Scalable-solutions' />
                        </div>
                        <h5 className="text-lg font-bold mb-4">Scalability</h5>
                        <p className="mb-4">
                            Unleash your potential with our scalable solutions. Expand your horizons and embrace growth effortlessly.
                        </p>
                    </div>
                    <div className="mb-0">
                        <div className="flex justify-center">
                            <img className='scale-50 mx-auto' src={Cost} alt='affordable-cost' />
                        </div>
                        <h5 className="text-lg font-bold mb-4">Competitive pricing</h5>
                        <p className="mb-4">
                            Discover our unbeatable prices for top-quality services. We believe in providing the best value for our customers without compromising on excellence.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Benefits