import React from 'react'

function Position() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Position--</h1>
            <p className="mb-4">The <span className="font-semibold">position</span> utility in LiFrame allows you to control the positioning of elements within the page. It is used to adjust the layout and control how an element is positioned in relation to its normal flow in the document, or its parent element. The position property can be crucial for creating layouts such as modals, tooltips, and fixed navigation bars.</p>
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
                            <td className='border-b border-[#ababab] py-2'>static</td>
                            <td className='border-b border-[#ababab] py-2'>position: static;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>fixed</td>
                            <td className='border-b border-[#ababab] py-2'>position: fixed;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>sticky</td>
                            <td className='border-b border-[#ababab] py-2'>position: sticky;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>relative</td>
                            <td className='border-b border-[#ababab] py-2'>position: relative;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>absolute</td>
                            <td className='border-b border-[#ababab] py-2'>position: absolute;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">static</span>{` ...">
  <p>Static parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">relative</span>{` ...">
  <p>Relative parent</p>
  <div class="absolute bottom-0 left-0 ...">
    <p>Absolute child</p>
  </div>
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><p>Static child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
  <!-- Static parent -->
  <div class="`}<span className="bg-secondary p-1 rounded">absolute</span>{` ..."><p>Absolute child</p></div>
  <div class="inline-block ..."><p>Static sibling</p></div>
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="relative">
  <div class="`}<span className="bg-secondary p-1 rounded">fixed</span>{` top-0 left-0 right-0">Contacts</div>
  <div>
    <div>
      <img src="..." />
      <strong>Andrew Alfred</strong>
    </div>
    <div>
      <img src="..." />
      <strong>Debra Houston</strong>
    </div>
    <!-- ... -->
  </div>
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div>
  <div>
    <div class="`}<span className="bg-secondary p-1 rounded">sticky top-0</span>{` ...">A</div>
    <div>
      <div>
        <img src="..." />
        <strong>Andrew Alfred</strong>
      </div>
      <div>
        <img src="..." />
        <strong>Aisha Houston</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <div>
    <div class="`}<span className="bg-secondary p-1 rounded">sticky top-0</span>{`">B</div>
    <div>
      <div>
        <img src="..." />
        <strong>Bob Alfred</strong>
      </div>
      <!-- ... -->
    </div>
  </div>
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can conditionally apply position utilities using LiFrame's pseudo-classes like <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, and others.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="relative `}<span className="bg-secondary p-1 rounded">hover:absolute</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Position
