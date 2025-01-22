import React from 'react'

function ObjectPosition() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Object Position.</h1>
            <p className="mb-4">The <span className="font-semibold">object-position</span> property in CSS determines how an element's content (e.g., images, videos, or any replaced element) is positioned within its box. LiFrame provides utility classes to set this property quickly, allowing you to align media content within its container.</p>
            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-bottom</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: bottom;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-center</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: center;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-left</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-left-bottom</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: left bottom;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-left-top</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: left top;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-right</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-right-bottom</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: right bottom;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-right-top</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: right top;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-top</td>
                            <td className='border-b border-[#ababab] py-2'>object-position: top;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">object-&#9913;</span> utilities to specify how a replaced element’s content should be positioned within its container.</p>
                <div className='mb-5 p-5 rounded-lg border border-black grid grid-cols-3 gap-5'>
                    <div>
                        <p className='text-center mb-3'>object-left-top</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-left-top' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute top-0 left-0 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-top</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-top' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute top-0 -left-1/2 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-right-top</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-right-top' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute top-0 right-0 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-left</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-left' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute -top-1/2 left-0 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-center</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-center' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute -top-1/2 -left-1/2 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-right</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-right' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute -top-1/2 right-0 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-left-bottom</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-left-bottom' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute bottom-0 left-0 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-bottom</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-bottom' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute bottom-0 -left-1/2 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-center mb-3'>object-right-bottom</p>
                        <div className='relative h-16 w-16 mx-auto rounded-md overflow-hidden hover:overflow-visible'>
                            <div className='h-full w-full relative rounded-md shadow-lg z-10 bg-200% bg-right-bottom' style={{backgroundImage:`url("https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid")`}}></div>
                            <img className='h-32 w-32 opacity-50 rounded-md absolute bottom-0 right-0 max-w-none' src="https://img.freepik.com/free-photo/high-angle-shot-waterfalls-highlands-region-iceland-with-cloudy-gray-sky_181624-22131.jpg?ga=GA1.1.576126916.1735051726&semt=ais_hybrid" alt="" />
                        </div>
                    </div>
                </div>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-left-top</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-top</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-right-top</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-left</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-center</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-right</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-left-bottom</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-bottom</span>{` w-full h-full ..." src="...">
<img class="object-none `}<span className="bg-secondary px-1 py-0.5 rounded">object-right-bottom</span>{` w-full h-full ..." src="...">`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply object position utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="object-center `}<span className="bg-secondary p-1 rounded">hover:object-top</span>{`" src="...">`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default ObjectPosition
