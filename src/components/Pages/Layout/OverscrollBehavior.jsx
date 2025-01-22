import React from 'react'

function OverscrollBehavior() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Overscroll Behavior.</h1>
            <p className="mb-4">The <span className="font-semibold">overscroll-behavior</span> property in LiFrame controls how the browser handles scrolling past the edge of a scrollable element. It is especially useful for managing scroll behavior in certain elements such as when a user scrolls beyond the end of a scrollable area. This can improve user experience by preventing unwanted scrolling effects like bouncing or content sliding when it shouldn't.</p>
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
                            <td className='border-b border-[#ababab] py-2'>overscroll-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-contain</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-none</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior: none;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-y-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-y: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-y-contain</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-y: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-y-none</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-y: none;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-x-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-x: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-x-contain</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-x: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-x-none</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-x: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Preventing parent overscrolling</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overscroll-contain</span> utility to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve “bounce” effects when scrolling past the end of the container in operating systems that support it.</p>
                    <div className="h-60 border border-black rounded-lg mb-5 p-1">
                        <div className='h-full p-5 space-y-2 overflow-auto overscroll-contain'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eum aliquam, corrupti saepe tempora suscipit laboriosam voluptatibus similique quaerat magnam quae qui debitis culpa recusandae praesentium aut, voluptas libero laudantium. Laborum soluta nesciunt sed. Ratione neque assumenda rem in cum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta, sequi rem, perspiciatis impedit repellendus nobis blanditiis corporis possimus velit voluptate accusamus. Repellendus porro magni accusamus repellat id dolorum illum obcaecati placeat possimus, velit recusandae tempora laudantium et sapiente doloribus commodi aut beatae. Corrupti at porro ipsum totam optio quam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius. Molestiae illum accusantium sit praesentium, quis harum sunt assumenda non dolor saepe, delectus ea repellendus. Dolorem nobis ipsa quod ullam.</p>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="overscroll-auto `}<span className="bg-secondary p-1 rounded">overscroll-contain</span>{` ...">Lorem, ipsum dolor sit ...</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Preventing overscroll bouncing</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overscroll-none</span> utility to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent “bounce” effects when scrolling past the end of the container.</p>
                    <div className="h-60 border border-black rounded-lg mb-5 p-1">
                        <div className='h-full p-5 space-y-2 overflow-auto overscroll-none'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eum aliquam, corrupti saepe tempora suscipit laboriosam voluptatibus similique quaerat magnam quae qui debitis culpa recusandae praesentium aut, voluptas libero laudantium. Laborum soluta nesciunt sed. Ratione neque assumenda rem in cum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta, sequi rem, perspiciatis impedit repellendus nobis blanditiis corporis possimus velit voluptate accusamus. Repellendus porro magni accusamus repellat id dolorum illum obcaecati placeat possimus, velit recusandae tempora laudantium et sapiente doloribus commodi aut beatae. Corrupti at porro ipsum totam optio quam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius. Molestiae illum accusantium sit praesentium, quis harum sunt assumenda non dolor saepe, delectus ea repellendus. Dolorem nobis ipsa quod ullam.</p>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="overscroll-auto `}<span className="bg-secondary p-1 rounded">overscroll-none</span>{` ...">Lorem, ipsum dolor sit ...</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Using the default overscroll behavior</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overscroll-auto</span> utility to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area.</p>
                    <div className="h-60 border border-black rounded-lg mb-5 p-1">
                        <div className='h-full p-5 space-y-2 overflow-auto overscroll-auto'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eum aliquam, corrupti saepe tempora suscipit laboriosam voluptatibus similique quaerat magnam quae qui debitis culpa recusandae praesentium aut, voluptas libero laudantium. Laborum soluta nesciunt sed. Ratione neque assumenda rem in cum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta, sequi rem, perspiciatis impedit repellendus nobis blanditiis corporis possimus velit voluptate accusamus. Repellendus porro magni accusamus repellat id dolorum illum obcaecati placeat possimus, velit recusandae tempora laudantium et sapiente doloribus commodi aut beatae. Corrupti at porro ipsum totam optio quam!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, eius. Molestiae illum accusantium sit praesentium, quis harum sunt assumenda non dolor saepe, delectus ea repellendus. Dolorem nobis ipsa quod ullam.</p>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="overscroll-auto `}<span className="bg-secondary p-1 rounded">overscroll-auto</span>{` ...">Lorem, ipsum dolor sit ...</div>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can also apply the overscroll behavior conditionally using LiFrame’s pseudo-classes like <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, and others. This allows you to create more dynamic and responsive designs.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<html class="overscroll-auto `}<span className="bg-secondary p-1 rounded">focus:overscroll-contain</span>{`">
  <!-- ... -->
</html>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default OverscrollBehavior
