import React from 'react'
import { Link } from 'react-router-dom'

function Visibility() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Visibility.</h1>
            <p className="mb-4">The <span className="font-semibold">visibility</span> utility in LiFrame controls whether an element is visible or hidden. Unlike <span className="font-semibold">display</span>, which removes the element from the document layout entirely, <span className="font-semibold">visibility</span> simply hides the element but still occupies space in the layout. This is useful when you want to hide an element but maintain the space it takes up.</p>
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
                            <td className='border-b border-[#ababab] py-2'>visible</td>
                            <td className='border-b border-[#ababab] py-2'>visibility: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>invisible</td>
                            <td className='border-b border-[#ababab] py-2'>visibility: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>collapse</td>
                            <td className='border-b border-[#ababab] py-2'>visibility: collapse;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Making elements invisible</h6>
                    <p className="mb-4">Use the <span className="font-semibold">invisible</span> utility to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with <span className="font-semibold">hidden</span> from the <Link to='/docs/display' className='underline underline-offset-2 decoration-third font-semibold'>display</Link> documentation).</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-16 bg-secondary rounded-lg flex justify-center items-center">01</div>
                            <div className="h-16 bg-secondary rounded-lg flex justify-center items-center invisible">02</div>
                            <div className="h-16 bg-secondary rounded-lg flex justify-center items-center">03</div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="grid grid-cols-3 gap-4">
<div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">invisible</span>{`">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Collapsing elements</h6>
                    <p className="mb-4">Use the <span className="font-semibold">collapse</span> utility to hide table rows, row groups, columns, and column groups as if they were set to display: none, but without impacting the size of other rows and columns.</p>
                    <div className='border border-black p-5 rounded-lg mb-5'>
                        <p className='mb-2 text-sm'>Showing all rows</p>
                        <table className="table border-collapse table-auto w-full text-md mb-5">
                            <thead>
                                <tr className="bg-third/40">
                                    <th className="font-medium p-4 text-left">Name</th>
                                    <th className="font-medium p-4 text-left">Position</th>
                                    <th className="font-medium p-4 text-left">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-secondary/40">
                                    <td className="p-4">John Doe</td>
                                    <td className="p-4">Software Engineer</td>
                                    <td className="p-4">john.doe@example.com</td>
                                </tr>
                                <tr className="bg-third/40">
                                    <td className="p-4">Jane Smith</td>
                                    <td className="p-4">UI/UX Designer</td>
                                    <td className="p-4">jane.smith@example.com</td>
                                </tr>
                                <tr className="bg-secondary/40">
                                    <td className="p-4">Alex Johnson</td>
                                    <td className="p-4">Project Manager</td>
                                    <td className="p-4">alex.johnson@example.com</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='mb-2 text-sm'>Hiding a row using collapse</p>
                        <table className="table border-collapse table-auto w-full text-md">
                            <thead>
                                <tr className="bg-third/40">
                                    <th className="font-medium p-4 text-left">Name</th>
                                    <th className="font-medium p-4 text-left">Position</th>
                                    <th className="font-medium p-4 text-left">Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-secondary/40">
                                    <td className="p-4">John Doe</td>
                                    <td className="p-4">Software Engineer</td>
                                    <td className="p-4">john.doe@example.com</td>
                                </tr>
                                <tr className="bg-third/40 collapse">
                                    <td className="p-4">Jane Smith</td>
                                    <td className="p-4">UI/UX Designer</td>
                                    <td className="p-4">jane.smith@example.com</td>
                                </tr>
                                <tr className="bg-secondary/40">
                                    <td className="p-4">Alex Johnson</td>
                                    <td className="p-4">Project Manager</td>
                                    <td className="p-4">alex.johnson@example.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Software Engineer</td>
      <td>john.doe@example.com</td>
    </tr>
    <tr class="`}<span className="bg-secondary p-1 rounded">collapse</span>{`">
      <td>Jane Smith</td>
      <td>UI/UX Designer</td>
      <td>jane.smith@example.com</td>
    </tr>
    <tr>
      <td>Alex Johnson</td>
      <td>Project Manager</td>
      <td>alex.johnson@example.com</td>
    </tr>
  </tbody>
</table>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Making elements visible</h6>
                    <p className="mb-4">Use the <span className="font-semibold">visible</span> utility to make an element visible. This is mostly useful for undoing the <span className="font-semibold">invisible</span> utility at different screen sizes.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-16 bg-secondary rounded-lg flex justify-center items-center">01</div>
                            <div className="h-16 bg-secondary rounded-lg flex justify-center items-center visible">02</div>
                            <div className="h-16 bg-secondary rounded-lg flex justify-center items-center">03</div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="grid grid-cols-3 gap-4">
<div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">visible</span>{`">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply the visibility utilities conditionally using pseudo-classes like <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, and others.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="visible `}<span className="bg-secondary p-1 rounded">hover:invisible</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Visibility
