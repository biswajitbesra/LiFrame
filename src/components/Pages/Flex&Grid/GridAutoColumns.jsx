import React from 'react'

function GridAutoColumns() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Auto Columns</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-auto-columns</span> utility in LiFrame allows you to specify the width of columns that are automatically generated in a grid container. This is useful when the grid container is dynamically filled with content, and you want to control the size of the auto-generated columns.</p>

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
                            <td className="border-b border-[#ababab] py-2">auto-cols-auto</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-columns: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">auto-cols-min</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-columns: min-content;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">auto-cols-max</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-columns: max-content;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">auto-cols-fr</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-columns: minmax(0, 1fr);</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>auto-cols-&#9913;</span> utility allows you to define a fixed width for columns. For example, <span className='font-semibold'>auto-cols-min</span> will set the minimum width for all auto-generated columns, while <span className='font-semibold'>auto-cols-max</span> sets a maximum width.</p>
                <div className="mb-5 p-5 rounded-lg border border-black space-y-8">
                    <div>
                        <p className="mb-2 text-center">auto-cols-min</p>
                        <div className="grid auto-cols-min grid-flow-col place-content-center gap-4">
                            <div className="bg-blue-500 text-white p-4 rounded-md text-center">Small</div>
                            <div className="bg-gray-300 p-4 rounded-md text-center">Medium Content</div>
                            <div className="bg-blue-200 p-4 rounded-md text-center">Large Content Here</div>
                        </div>
                    </div>
                    <div>
                        <p className="mb-2 text-center">auto-cols-max</p>
                        <div className="grid auto-cols-max grid-flow-col place-content-center gap-4">
                            <div className="bg-green-500 text-white p-4 rounded-md text-center">Short</div>
                            <div className="bg-gray-400 p-4 rounded-md text-center">Some Longer Text</div>
                            <div className="bg-green-200 p-4 rounded-md text-center">A Very Long Content Here</div>
                        </div>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid grid-flow-col `}<span className="bg-secondary p-1 rounded">auto-cols-min</span>{` gap-4">
  <div>Small</div>
  <div>Medium Content</div>
  <div>Large Content Here</div>
</div>
<div class="grid grid-flow-col `}<span className="bg-secondary p-1 rounded">auto-cols-max</span>{` gap-4">
  <div>Short</div>
  <div>Some Longer Text</div>
  <div>A Very Long Content Here</div>
</div>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can adjust the auto-column size at different breakpoints using responsive prefixes like <span className='font-semibold'>sm:auto-cols-&#9913;</span>. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to change the column width dynamically.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
{`<div class="grid grid-flow-col auto-cols-max `}<span className="bg-secondary p-1 rounded">hover:auto-cols-min</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default GridAutoColumns