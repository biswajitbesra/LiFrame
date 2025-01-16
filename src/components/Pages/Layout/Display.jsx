import React from 'react'
import { Link } from 'react-router-dom'

function Display() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Display.</h1>
            <p className="mb-4">The <span className="font-semibold">display</span> property in CSS controls the display behavior of an element. It determines whether an element is rendered as a block, inline, or inline-block element. Tailwind CSS provides utilities for controlling the <span className="font-semibold">display</span> property, which allows for quick and responsive layout adjustments.</p>
            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>block</td>
                            <td className='border-b border-[#ababab] py-2'>display: block;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-block</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-block;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>flex</td>
                            <td className='border-b border-[#ababab] py-2'>display: flex;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-flex</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-flex;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table</td>
                            <td className='border-b border-[#ababab] py-2'>display: table;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-table</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-table;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-caption</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-caption;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-cell</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-cell;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-column</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-column;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-column-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-column-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-footer-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-footer-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-header-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-header-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-row-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-row-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-row</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-row;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>flow-root</td>
                            <td className='border-b border-[#ababab] py-2'>display: flow-root;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>grid</td>
                            <td className='border-b border-[#ababab] py-2'>display: grid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-grid</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-grid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>contents</td>
                            <td className='border-b border-[#ababab] py-2'>display: contents;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>list-item</td>
                            <td className='border-b border-[#ababab] py-2'>display: list-item;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>hidden</td>
                            <td className='border-b border-[#ababab] py-2'>display: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className='mb-7'>
                    <h6 className="font-bold text-lg mb-2">Block & Inline</h6>
                    <p className="mb-4">Use the <span className="font-semibold">inline</span>, <span className="font-semibold">block</span>, and <span className="font-semibold">inline-block</span> utilities to control the flow of text and elements.</p>
                    <div className="border border-black p-5 mb-5 rounded-lg">
                        The <span className="bg-secondary bg-opacity-50 px-1 rounded inline">inline</span> class is perfect for placing small elements like icons or links within a line of text, ensuring they flow naturally with surrounding content.
                        <br />
                        <br />
                        Using the <span className="bg-secondary bg-opacity-50 px-1 rounded block">block</span> class allows you to create elements that take up the full width of their container, making them ideal for headings, paragraphs, or dividers.
                        <br />
                        <br />
                        With the <span className="bg-secondary bg-opacity-50 px-1 rounded inline-block">inline-block</span> class, you can style elements like buttons or badges to behave inline while still allowing custom width and height adjustments.
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div>
  The <span class="inline">inline</span> 
  class is perfect for placing small elements like icons or links within a line of text, 
  ensuring they flow naturally with surrounding content.

  Using the <span class="block">block</span> 
  class allows you to create elements that take up the full width of their container, 
  making them ideal for headings, paragraphs, or dividers.

  With the <span class="inline-block">inline-block</span> class, 
  you can style elements like buttons or badges to behave inline while still allowing 
  custom width and height adjustments.
</div>
`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Flow Root</h6>
                    <p className="mb-4">
                        The <span className="font-semibold">flow-root</span> class is used to establish a new <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context" className='underline underline-offset-2 decoration-third'>block formatting context</Link>, which ensures that floats inside the container are properly cleared. Here's an example:
                    </p>
                    <div className="p-5 border border-black rounded-lg mb-5">
                        <div className="flow-root bg-blue-100 p-4 rounded">
                            <div className="float-left w-1/3 bg-blue-200 p-2">Left Float</div>
                            <div className="float-right w-1/3 bg-blue-300 p-2">Right Float</div>
                            <p className="mt-4">
                                The parent container uses the flow-root class, so it wraps around its floated children automatically.
                            </p>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class="`}<span className="bg-secondary p-1 rounded">flow-root</span>{` bg-blue-100 p-4 rounded">
  <div class="float-left w-1/3 bg-blue-200 p-2">Left Float</div>
  <div class="float-right w-1/3 bg-blue-300 p-2">Right Float</div>
  <p class="mt-4">The parent container uses the flow-root class, so it wraps...</p>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Flex</h6>
                    <p className="mb-4">
                        Use the <span className="font-semibold">flex</span> utility to create a block-level flex container.
                    </p>
                    <div className='border border-black p-5 rounded-lg flex justify-center mb-5'>
                        <div className='flex gap-4 w-3/4'>
                            <div className='h-14 w-48 bg-secondary flex justify-center items-center shadow-lg rounded-lg'>01</div>
                            <div className='h-14 w-48 bg-secondary flex justify-center items-center shadow-lg rounded-lg'>02</div>
                            <div className='h-14 w-48 bg-secondary flex justify-center items-center shadow-lg rounded-lg'>03</div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class='`}<span className="bg-secondary p-1 rounded">flex</span>{` gap-4'>
  <div> 01 </div>
  <div> 02 </div>
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Inline Flex</h6>
                    <p className="mb-4">
                        Use the <span className="font-semibold">inline-flex</span> utility to create an inline flex container that flows with text.
                    </p>
                    <div className='border border-black p-5 rounded-lg mb-5'>
                        <p className="text-sm leading-6 sm:text-base sm:leading-7">
                            Today, I found myself caught up in an entirely different idea: opening a small coffee stand at the park. <span className="ml-1 inline-flex items-baseline"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="self-center w-5 h-5 rounded mr-1"/><span className="font-medium text-black">John</span></span> of course, barged in with his wild theories, insisting I should focus on selling "gourmet pickles" instead. He swears there’s a booming market for it. I tried explaining that coffee is a safer bet, but Kramer being Kramer, he started rambling about pickle festivals and niche demographics. Sometimes, I think he’s on to something—but then again, maybe not.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<p>
  Today, I found myself caught up in an entirely different idea: opening ...
    <span class="`}<span className="bg-secondary p-1 rounded">inline-flex</span>{` items-baseline">
      <img src="..." alt="" class="self-center w-5 h-5 rounded mr-1"/>
      <span>John</span>
    </span> 
    of course, barged in with his wild theories, insisting I should focus on ...
</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Grid</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">grid</span> utility to create a grid container.</p>
                    <div className="grid grid-cols-3 grid-rows-3 gap-4 leading-6 text-center border border-black p-5 rounded-lg mb-5">
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">01</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">02</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">03</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">04</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">05</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">06</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">07</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">08</div>
                        <div className="p-4 bg-secondary shadow-lg rounded-lg">09</div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class="`}<span className="bg-secondary p-1 rounded">grid</span>{` grid-cols-3 grid-rows-3 gap-4">
  <div> 01 </div>
  <div> 02 </div>
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Inline Grid</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">inline-grid</span> utility to create an inline grid container.</p>
                    <div className="space-x-3 w-full whitespace-nowrap border border-black p-5 rounded-lg mb-5">
                        <div className="inline-grid grid-cols-3 gap-4 leading-6 bg-secondary/40 rounded-lg text-center">
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">01</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">02</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">03</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">04</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">05</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">06</div>
                        </div>
                        <div className="inline-grid grid-cols-3 gap-4 leading-6 bg-secondary/40 rounded-lg text-center">
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">01</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">02</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">03</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">04</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">05</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">06</div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class="`}<span className="bg-secondary p-1 rounded">inline-grid</span>{` grid-cols-3 gap-4">
  <div> 01 </div>
  <div> 02 </div>
  <div> 03 </div>
  <div> 04 </div>
  <div> 05 </div>
  <div> 06 </div>
</div>
<div class="`}<span className="bg-secondary p-1 rounded">inline-grid</span>{` grid-cols-3 gap-4">
  <div> 01 </div>
  <div> 02 </div>
  <div> 03 </div>
  <div> 04 </div>
  <div> 05 </div>
  <div> 06 </div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Contents</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">contents</span> utility to create a “phantom” container whose children act like direct children of the parent.</p>
                    <div className='border border-black p-5 rounded-lg mb-5'>
                        <div className="flex gap-4 leading-6 bg-secondary/50 rounded-lg text-center">
                            <div className="flex-1 p-4 bg-secondary shadow-lg rounded-lg">01</div>
                            <div className="contents">
                                <div className="flex-1 p-4 bg-secondary shadow-lg rounded-lg">02</div>
                                <div className="flex-1 p-4 bg-secondary shadow-lg rounded-lg">03</div>
                            </div>
                            <div className="flex-1 p-4 bg-secondary shadow-lg rounded-lg">04</div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class="flex gap-4">
  <div class="flex-1">01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">contents</span>{`">
    <div class="flex-1">02</div>
    <div class="flex-1">03</div>
  </div>
  <div class="flex-1">04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Table</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">table</span>, <span className="font-semibold">table-row</span>, <span className="font-semibold">table-cell</span>, <span className="font-semibold">table-caption</span>, <span className="font-semibold">table-column</span>, <span className="font-semibold">table-column-group</span>, <span className="font-semibold">table-header-group</span>, <span className="font-semibold">table-row-group</span>, and <span className="font-semibold">table-footer-group</span> utilities to create elements that behave like their respective table elements.</p>
                    <div className='border border-black p-5 rounded-lg mb-5'>
                        <div className="table border-collapse table-auto w-full text-md">
                            <div className="table-header-group">
                                <div className="table-row bg-third/40">
                                    <div className="table-cell font-medium p-4 text-left">Name</div>
                                    <div className="table-cell font-medium p-4 text-left">Position</div>
                                    <div className="table-cell font-medium p-4 text-left">Contact</div>
                                </div>
                            </div>
                            <div className="table-row-group">
                                <div className="table-row bg-secondary/40">
                                    <div className="table-cell p-4">John Doe</div>
                                    <div className="table-cell p-4">Software Engineer</div>
                                    <div className="table-cell p-4">john.doe@example.com</div>
                                </div>
                                <div className="table-row bg-third/40">
                                    <div className="table-cell p-4">Jane Smith</div>
                                    <div className="table-cell p-4">UI/UX Designer</div>
                                    <div className="table-cell p-4">jane.smith@example.com</div>
                                </div>
                                <div className="table-row bg-secondary/40">
                                    <div className="table-cell p-4">Alex Johnson</div>
                                    <div className="table-cell p-4">Project Manager</div>
                                    <div className="table-cell p-4">alex.johnson@example.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table</span>{` border-collapse table-auto w-full">
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-header-group</span>{`">
    <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-row</span>{`">
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Name</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Position</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Contact</div>
    </div>
  </div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-row-group</span>{`">
    <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-row</span>{`">
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">John Doe</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Software Engineer</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">john.doe@example.com</div>
    </div>
    <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-row</span>{`">
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Jane Smith</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">UI/UX Designer</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">jane.smith@example.com</div>
    </div>
    <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-row</span>{`">
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Alex Johnson</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">Project Manager</div>
      <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">table-cell</span>{`">alex.johnson@example.com</div>
    </div>
  </div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Hidden</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">hidden</span> utility to set an element to <span className="font-semibold">display: none</span> and remove it from the page layout.</p>
                    <div className='border border-black p-5 rounded-lg mb-5'>
                        <div className="flex gap-4 leading-6 bg-secondary/50 rounded-lg text-center">
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">01</div>
                            <div className="hidden p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">02</div>
                            <div className="p-4 w-14 h-14 bg-secondary shadow-lg rounded-lg">03</div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div class="flex gap-4">
  <div> 01 </div>
  <div class="`}<span className="bg-secondary p-1 rounded">hidden</span>{`"> 02 </div>
  <div> 03 </div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>LiFrame lets you conditionally apply utility classes in different states using variant modifiers. For example, use <span className="font-semibold">hover:inline-flex</span> to only apply the <span className="font-semibold">inline-flex</span> utility on hover.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="flex `}<span className="bg-secondary p-1 rounded">hover:inline-flex</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Display
