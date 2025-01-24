import React from 'react'
import { Link } from 'react-router-dom'

function Position() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Position.</h1>
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
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Statically positioning elements</h6>
                    <p className="mb-2">Use the <span className="font-semibold">static</span> utility to position an element according to the normal flow of the document.</p>
                    <p className="mb-4">Any <Link to='/docs/top-right-bottom-left' className='underline underline-offset-2 decoration-third font-semibold'>offsets</Link> will be ignored and the element will not act as a position reference for absolutely positioned children.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div class="relative leading-6">
                            <div class="bg-third/80 border rounded-lg p-4">
                                <div class="static bg-secondary/50 p-4 h-32">
                                    <p>Static parent</p>
                                    <div class="absolute bottom-0 left-0 bg-secondary shadow-lg rounded-lg p-4">
                                        <p>Absolute child</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Relatively positioning elements</h6>
                    <p className="mb-2">Use the <span className="font-semibold">relative</span> utility to position an element according to the normal flow of the document.</p>
                    <p className="mb-4">Any <Link to='/docs/top-right-bottom-left' className='underline underline-offset-2 decoration-third font-semibold'>offsets</Link> are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div class="relative leading-6">
                            <div class="bg-third/80 rounded-lg p-4">
                                <div class="relative bg-secondary/50 p-4 h-32">
                                    <p>Relative parent</p>
                                    <div class="absolute bottom-0 left-0 bg-secondary shadow-lg rounded-lg p-4">
                                        <p>Absolute child</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Absolutely positioning elements</h6>
                    <p className="mb-2">Use the <span className="font-semibold">absolute</span> utility to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn’t exist.</p>
                    <p className="mb-3">Any <Link to='/docs/top-right-bottom-left' className='underline underline-offset-2 decoration-third font-semibold'>offsets</Link> are calculated relative to the nearest parent that has a position other than <span className="font-semibold">static</span>, and the element will act as a position reference for other absolutely positioned children.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div class="space-y-8">
                            <div>
                                <p class="text-sm font-medium mb-4">With static positioning</p>
                                <div class="relative leading-6">
                                    <div class="relative bg-third/80 rounded-lg p-4">
                                        <p class="-mt-2 mb-2">Relative parent</p>
                                        <div class="static bg-secondary/50 p-4 h-32 flex flex-col justify-between">
                                            <p>Static parent</p>
                                            <div class="flex gap-4">
                                                <div class=" bottom-0 left-0 bg-secondary shadow-lg rounded-lg p-4">
                                                    <p>Static child</p>
                                                </div>
                                                <div class="bg-primary shadow-lg rounded-lg p-4">
                                                    <p>Static sibling</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p class="text-sm font-medium mb-4">With absolute positioning</p>
                                <div class="relative leading-6">
                                    <div class="relative bg-third/80 rounded-lg p-4">
                                        <p class="-mt-2 mb-2">Relative parent</p>
                                        <div class="static bg-secondary/50 p-4 h-32 flex flex-col justify-between">
                                            <p>Static parent</p>
                                            <div class="flex gap-4">
                                                <div class="absolute top-0 right-0 bg-secondary shadow-lg rounded-lg p-4">
                                                    <p>Absolute child</p>
                                                </div>
                                                <div class="bg-primary shadow-lg rounded-lg p-4">
                                                    <p>Static sibling</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Fixed positioning elements</h6>
                    <p className="mb-2">Use the <span className="font-semibold">fixed</span> utility to position an element relative to the browser window.</p>
                    <p className="mb-4">Any <Link to='/docs/top-right-bottom-left' className='underline underline-offset-2 decoration-third font-semibold'>offsets</Link> are calculated relative to the viewport and the element will act as a position reference for absolutely positioned children.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div class="relative max-w-md mx-auto bg-secondary/50 shadow-lg h-80 overflow-hidden">
                            <div class="absolute top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm bg-secondary backdrop-blur-sm">Contacts</div>
                            <div class="overflow-auto flex flex-col divide-y divide-primary h-80">
                                <div class="flex items-center gap-4 p-4">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                    <strong class="text-sm font-medium">Andrew Alfred</strong>
                                </div>
                                <div class="flex items-center gap-4 p-4">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                    <strong class="text-sm font-medium">Debra Houston</strong>
                                </div>
                                <div class="flex items-center gap-4 p-4">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                    <strong class="text-sm font-medium">Jane White</strong>
                                </div>
                                <div class="flex items-center gap-4 p-4">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"/>
                                    <strong class="text-sm font-medium">Ray Flint</strong>
                                </div>
                                <div class="flex items-center gap-4 p-4">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                    <strong class="text-sm font-medium">Mindy Albrect</strong>
                                </div>
                                <div class="flex items-center gap-4 p-4">
                                    <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                    <strong class="text-sm font-medium">Olivia Watson</strong>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Sticky positioning elements</h6>
                    <p className="mb-2">Use the <span className="font-semibold">sticky</span> utility to position an element as <span className="font-semibold">relative</span> until it crosses a specified threshold, then treat it as <span className="font-semibold">fixed</span> until its parent is off scre</p>
                    <p className="mb-4">Any <Link to='/docs/top-right-bottom-left' className='underline underline-offset-2 decoration-third font-semibold'>offsets</Link> are calculated relative to the element’s normal position and the element will act as a position reference for absolutely positioned children.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div class="relative max-w-md mx-auto bg-secondary/50 shadow-lg h-80 overflow-auto -my-px">
                            <div class="relative">
                                <div class="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm bg-secondary backdrop-blur-sm">A</div>
                                <div class="divide-y divide-primary">
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Andrew Alfred</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Aisha Houston</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Anna White</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"/>
                                        <strong class="text-sm font-medium">Andy Flint</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm bg-secondary backdrop-blur-sm">B</div>
                                <div class="divide-y divide-primary">
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Bob Alfred</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Bianca Houston</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Brianna White</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"/>
                                        <strong class="text-sm font-medium">Bert Flint</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm bg-secondary backdrop-blur-sm">C</div>
                                <div class="divide-y divide-primary">
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Colton Alfred</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Cynthia Houston</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"/>
                                        <strong class="text-sm font-medium">Cheyenne White</strong>
                                    </div>
                                    <div class="flex items-center gap-4 p-4">
                                        <img class="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxwZW9wbGV8ZW58MHx8MHx8fDA%3D"/>
                                        <strong class="text-sm font-medium">Charlie Flint</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                </div>
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
