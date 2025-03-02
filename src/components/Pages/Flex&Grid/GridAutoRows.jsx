import React from 'react'

function GridAutoRows() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Auto Rows.</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-auto-rows</span> utility in LiFrame allows you to define the height of rows that are automatically generated in a grid container. It's helpful when you want to control the size of rows that expand dynamically within a grid layout.</p>

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
                            <td className="border-b border-[#ababab] py-2">auto-rows-auto</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-rows: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">auto-rows-min</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-rows: min-content;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">auto-rows-max</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-rows: max-content;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">auto-rows-fr</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-rows: minmax(0, 1fr);</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>auto-rows-&#9913;</span> utility helps set the height for auto-generated rows. For instance, <span className='font-semibold'>auto-rows-min</span> will give the rows a minimum height, while <span className='font-semibold'>auto-rows-max</span> can set a maximum height.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid grid-flow-row `}<span className="bg-secondary p-1 rounded">auto-rows-max</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                    </code>
                </pre>
                    
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Responsive prefixes such as <span className='font-semibold'>sm:auto-rows-&#9913;</span> can be used to modify row heights at different breakpoints. You can also use pseudo-classes like <span className='font-semibold'>hover</span> or <span className='font-semibold'>focus</span> to dynamically adjust the row height.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
{`<div class="grid grid-flow-row auto-rows-max `}<span className="bg-secondary p-1 rounded">hover:auto-rows-min</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default GridAutoRows