import React from 'react'

function Clear() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Clear.</h1>
            <p className="mb-4">The <span className="font-semibold">clear</span> property is used to control the behavior of elements that follow floated elements. It specifies whether an element should be moved below the preceding floated elements. LiFrame provides utility classes to easily manage this behavior in layouts.</p>
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
                            <td className='border-b border-[#ababab] py-2'>clear-start</td>
                            <td className='border-b border-[#ababab] py-2'>clear: inline-start;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-end</td>
                            <td className='border-b border-[#ababab] py-2'>clear: inline-end;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-left</td>
                            <td className='border-b border-[#ababab] py-2'>clear: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-right</td>
                            <td className='border-b border-[#ababab] py-2'>clear: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-both</td>
                            <td className='border-b border-[#ababab] py-2'>clear: both;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-none</td>
                            <td className='border-b border-[#ababab] py-2'>clear: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Clearing left-floated elements</h6>
                    <p className="mb-4">Use the <span className="font-semibold">clear-left</span> utility to position an element below any preceding left-floated elements.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-left h-32 mr-3 mb-2 rounded-lg"
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-right h-40 ml-3 mb-2 rounded-lg"
                        />
                        <p className='clear-left'>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<article>
  <img class="float-left ..." src="...">
  <img class="float-right ..." src="...">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-left</span>{` ...">Brewing the perfect cup of coffee is both...</p>
</article>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Clearing right-floated elements</h6>
                    <p className="mb-4">Use the <span className="font-semibold">clear-right</span> utility to position an element below any preceding right-floated elements.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-left h-40 mr-3 mb-2 rounded-lg"
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-right h-32 ml-3 mb-2 rounded-lg"
                        />
                        <p className='clear-right'>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<article>
  <img class="float-left ..." src="...">
  <img class="float-right ..." src="...">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-right</span>{` ...">Brewing the perfect cup of coffee is both...</p>
</article>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Clearing all floated elements</h6>
                    <p className="mb-4">Use the <span className="font-semibold">clear-both</span> utility to position an element below all preceding floated elements.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-left h-32 mr-3 mb-2 rounded-lg"
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-right h-40 ml-3 mb-2 rounded-lg"
                        />
                        <p className='clear-both'>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<article>
  <img class="float-left ..." src="...">
  <img class="float-right ..." src="...">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-both</span>{` ...">Brewing the perfect cup of coffee is both...</p>
</article>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Disabling applied clears</h6>
                    <p className="mb-4">Use the <span className="font-semibold">clear-none</span> utility to reset any clears that are applied to an element. This is the default value for the clear property.</p>
                    <div class="mb-5 p-5 rounded-lg border border-black w-auto mx-auto">
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-left h-40 mr-3 mb-2 rounded-lg"
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1512576301712-26fd28feb7fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGElMjBjdXAlMjBvZiUyMGNvZmZlZXxlbnwwfDB8MHx8fDA%3D" 
                            alt="A cup of coffee" 
                            class="float-right h-32 ml-3 mb-2 rounded-lg"
                        />
                        <p className='clear-none'>
                            Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light. The process of making coffee isn’t just about the drink—it’s about creating a moment to savor, whether you're enjoying it alone or sharing it with friends. Imagine a freshly brewed cup of coffee resting on a wooden table, steam rising as the rich aroma fills the air. The process of brewing coffee starts with selecting quality beans, understanding the roast profile, and finding the perfect grind size. These small details can significantly impact the flavor, allowing you to unlock a world of taste—from bright, citrusy notes to deep, chocolatey undertones. The choice of brewing method further adds to the complexity of the experience.
                        </p>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<article>
  <img class="float-left ..." src="...">
  <img class="float-right ..." src="...">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-none</span>{` ...">Brewing the perfect cup of coffee is both...</p>
</article>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply clear utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<p class="clear-left`} <span className="bg-secondary p-1 rounded">hover:clear-none</span> {`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Clear
