import React from 'react'

function FlexDirection() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Direction</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-direction</span> utility in LiFrame allows you to define the direction in which flex items are placed inside a flex container. It helps in controlling the layout of elements in row or column orientation.</p>

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
                            <td className="border-b border-[#ababab] py-2">flex-row</td>
                            <td className="border-b border-[#ababab] py-2">flex-direction: row;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-col</td>
                            <td className="border-b border-[#ababab] py-2">flex-direction: column;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-row-reverse</td>
                            <td className="border-b border-[#ababab] py-2">flex-direction: row-reverse;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-col-reverse</td>
                            <td className="border-b border-[#ababab] py-2">flex-direction: column-reverse;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Row</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-row</span> to position flex items horizontally in the same direction as text.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className=" flex flex-row gap-4">
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">1</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">2</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class=" flex `}<span className="bg-secondary p-1 rounded">flex-row</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Row reversed</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-row-reverse</span> to position flex items horizontally in the opposite direction.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className=" flex flex-row-reverse gap-4">
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">1</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">2</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class=" flex `}<span className="bg-secondary p-1 rounded">flex-row-reverse</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Column</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-col</span> to position flex items vertically.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className=" flex flex-col items-center gap-4">
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">1</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">2</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class=" flex `}<span className="bg-secondary p-1 rounded">flex-col</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Column reversed</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-col-reverse</span> to position flex items vertically in the opposite direction.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className=" flex flex-col-reverse items-center gap-4">
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">1</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">2</div>
                            <div className="h-14 w-14 bg-secondary rounded-lg flex justify-center items-center">3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class=" flex `}<span className="bg-secondary p-1 rounded">flex-col-reverse</span>{` gap-4">
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
                <p className='mb-4'>You can conditionally change the flex direction using responsive prefixes or pseudo-classes like <span className='font-semibold'>hover</span>, <span className='font-semibold'>focus</span>, and more.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="flex flex-row `}<span className="bg-secondary p-1 rounded">hover:flex-col</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FlexDirection