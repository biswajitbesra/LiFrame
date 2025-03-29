import React from 'react'

function ListStyleType() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>List Style Type.</h1>
            <p className='mb-4'>The <span className='font-semibold'>list-style-type</span> utility in LiFrame allows you to change the type of bullet points for an unordered list or the numbering style for an ordered list. This gives you control over the appearance of the list markers, whether you want simple dots, numbers, Roman numerals, or other types of symbols.</p>

            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">list-none</td>
                            <td className="border-b border-[#ababab] py-2">list-style-type: none;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">list-disc</td>
                            <td className="border-b border-[#ababab] py-2">list-style-type: disc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">list-decimal</td>
                            <td className="border-b border-[#ababab] py-2">list-style-type: decimal;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply a specific list style type, you can use classes such as <span className='font-semibold'>list-disc</span> for a solid dot, <span className='font-semibold'>list-decimal</span> for numbered lists, and <span className='font-semibold'>list-none</span> to remove list markers completely.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>list-disc</span>
                            <ul className='list-disc list-inside'>
                                <li>MongoDB – A NoSQL database for modern web applications.</li>
                                <li>Express.js – A minimal and flexible Node.js web framework.</li>
                                <li>React.js – A JavaScript library for building user interfaces.</li>
                                <li>Node.js – A runtime for running JavaScript on the server.</li>
                            </ul>
                        </div>
                    <div>
                        <span className='text-third'>list-decimal</span>
                        <ol className='list-decimal list-inside'>
                            <li>MongoDB – A NoSQL database for modern web applications.</li>
                            <li>Express.js – A minimal and flexible Node.js web framework.</li>
                            <li>React.js – A JavaScript library for building user interfaces.</li>
                            <li>Node.js – A runtime for running JavaScript on the server.</li>
                        </ol>
                    </div>
                    <div>
                        <span className='text-third'>list-none</span>
                        <ul className='list-none list-inside'>
                            <li>MongoDB – A NoSQL database for modern web applications.</li>
                            <li>Express.js – A minimal and flexible Node.js web framework.</li>
                            <li>React.js – A JavaScript library for building user interfaces.</li>
                            <li>Node.js – A runtime for running JavaScript on the server.</li>
                        </ul>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<ul class="`}<span className="bg-secondary p-1 rounded">list-disc</span>{`">
  <li>MongoDB – A NoSQL database for modern web applications.</li>
  <!-- ... -->
</ul>

<ol class="`}<span className="bg-secondary p-1 rounded">list-decimal</span>{`">
  <li>MongoDB – A NoSQL database for modern web applications.</li>
  <!-- ... -->
</ol>

<ul class="`}<span className="bg-secondary p-1 rounded">list-none</span>{`">
  <li>MongoDB – A NoSQL database for modern web applications.</li>
  <!-- ... -->
</ul>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply list style types using responsive prefixes, like <span className='font-semibold'>sm:list-disc</span> or <span className='font-semibold'>lg:list-decimal</span>, to customize the list marker appearance for different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<ul class="list-none `}<span className="bg-secondary p-1 rounded">hover:list-disc</span>{`">
  <!-- ... -->
</ul>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default ListStyleType