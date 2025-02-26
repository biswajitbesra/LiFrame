import React from 'react'

function FlexWrap() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Wrap.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-wrap</span> utility in LiFrame controls whether flex items should wrap onto multiple lines or stay in a single row. This is useful when managing layouts with varying content sizes.</p>

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
                            <td className="border-b border-[#ababab] py-2">flex-wrap</td>
                            <td className="border-b border-[#ababab] py-2">flex-wrap: wrap;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-wrap-reverse</td>
                            <td className="border-b border-[#ababab] py-2">flex-wrap: wrap-reverse;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-nowrap</td>
                            <td className="border-b border-[#ababab] py-2">flex-wrap: nowrap;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Don't wrap</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-nowrap</span> to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black overflow-x-scroll">
                        <div className="flex flex-nowrap gap-4 leading-6 rounded-lg">
                            <div className="w-2/5 flex-none last:pr-4">
                                <div className="p-4 w-full rounded-lg flex items-center justify-center bg-secondary shadow-lg">01</div>
                            </div>
                            <div className="w-2/5 flex-none last:pr-4">
                                <div className="p-4 w-full rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            </div>
                            <div className="w-2/5 flex-none last:pr-4">
                                <div className="p-4 w-full rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">flex-nowrap</span>{`">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Wrap normally</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-wrap</span> to allow flex items to wrap.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex flex-wrap gap-4 leading-6 bg-secondary/40 rounded-lg">
                            <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-secondary shadow-lg">01</div>
                            <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">flex-wrap</span>{`">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Wrap reversed</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-wrap-reverse</span> to wrap flex items in the reverse direction.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex flex-wrap-reverse gap-4 leading-6 bg-secondary/40 rounded-lg">
                            <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-secondary shadow-lg">01</div>
                            <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            <div className="p-4 w-2/5 rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">flex-wrap-reverse</span>{`">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can modify flex wrapping based on screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically change wrapping behavior.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="flex flex-wrap `}<span className="bg-secondary p-1 rounded">hover:flex-wrap-reverse</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FlexWrap