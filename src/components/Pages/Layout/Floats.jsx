import React from 'react'

function Floats() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Floats.</h1>
            <p className="mb-4">The <span className="font-semibold">float</span> property is used to position elements to the left or right of their container, allowing inline content (like text) to wrap around the floated element. LiFrame provides utility classes to handle floats effortlessly and responsively.</p>
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
                            <td className='border-b border-[#ababab] py-2'>float-start</td>
                            <td className='border-b border-[#ababab] py-2'>float: inline-start;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-end</td>
                            <td className='border-b border-[#ababab] py-2'>float: inline-end;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-right</td>
                            <td className='border-b border-[#ababab] py-2'>float: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-left</td>
                            <td className='border-b border-[#ababab] py-2'>float: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-none</td>
                            <td className='border-b border-[#ababab] py-2'>float: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Floating elements to the left</h6>
                    <p className="mb-4">Use the <span className="font-semibold">float-left</span> utility to float an element to the left of its container.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-left h-32 mr-3 rounded-lg"
                        />
                        <p>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<img class="`}<span className="bg-secondary p-1 rounded">float-left</span>{` ..." src="...">
<p>Brewing the perfect cup of coffee is both an art and a science...</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Floating elements to the right</h6>
                    <p className="mb-4">Use the <span className="font-semibold">float-right</span> utility to float an element to the right of its container.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-right h-32 ml-3 rounded-lg"
                        />
                        <p>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<img class="`}<span className="bg-secondary p-1 rounded">float-right</span>{` ..." src="...">
<p>Brewing the perfect cup of coffee is both an art and a science...</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Disabling a float</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">float-none</span> utility to reset any floats that are applied to an element. This is the default value for the float property.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-none h-32 mb-2 rounded-lg"
                        />
                        <p>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<img class="`}<span className="bg-secondary p-1 rounded">float-none</span>{` ..." src="...">
<p>Brewing the perfect cup of coffee is both an art and a science...</p>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply floats utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="float-right`} <span className="bg-secondary p-1 rounded">hover:float-left</span> {`..." src="path/to/image.jpg">`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Floats
