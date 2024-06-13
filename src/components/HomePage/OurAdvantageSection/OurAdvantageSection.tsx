import React from 'react'

export default function OurAdvantageSection() {
    return (
        <div>
            <div className='text-center text-xl font-bold uppercase'>
                <h3 className='customTextBorder p-2'> Our Advantages</h3>
                <h2 className='text-5xl my-4 max-w-4xl mx-auto leading-snug'>We take care of everything for you!</h2>
                <p className='text-base font-normal lowercase first-letter:uppercase max-w-2xl mx-auto'>With our comprehensive services, you can sit back and relax while we handle all the details. From planning to execution, we ensure every aspect of your project is managed seamlessly, so you can focus on what matters most to you.</p>
            </div>
            <div className='my-16'>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box rounded-md">
                            <h2 className='font-bold text-xl border-b border-b-gray-300 w-full py-2'>Listen</h2>
                            <p className='py-2'>First, we take the time to understand your needs and vision. Our team listens carefully to your ideas, goals, and concerns, ensuring we have a clear understanding of what you want to achieve.</p>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr className="bg-black" />
                    </li>
                    <li>
                        <hr className="bg-black" />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box rounded-md">
                            <h2 className='font-bold text-xl border-b border-b-gray-300 w-full py-2'>strategies</h2>
                            <p className='py-2'>Next, we develop tailored strategies designed to meet your specific goals. Our experts craft a detailed plan, leveraging the latest trends and technologies to create a roadmap that sets your project on the path to success.</p>
                        </div>
                        <hr className="bg-black" />
                    </li>
                    <li>
                        <hr className="bg-black" />
                        <div className="timeline-start timeline-box rounded-md">
                            <h2 className='font-bold text-xl border-b border-b-gray-300 w-full py-2'>Project Work</h2>
                            <p className='py-2'>During the project work phase, our skilled team brings the strategy to life with precision and creativity. We handle all aspects of the implementation, ensuring high standards of quality and timely progress at every step.</p>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box rounded-md">
                            <h2 className='font-bold text-xl border-b border-b-gray-300 w-full py-2'>Launch</h2>
                            <p className='py-2'>Finally, we orchestrate a smooth and successful launch. Our team manages all the final details, ensuring everything is perfectly in place for a seamless rollout. We’re here to support you, celebrating your success and ensuring your project reaches its full potential.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
