import React from 'react'

function ListStyleImage() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>List Style Image. need a look</h1>
            <p className='mb-4'>The <span className='font-semibold'>list-style-image</span> utility in LiFrame enables you to use a custom image as a bullet point for list items. This is useful for styling unordered lists with a unique visual touch, such as using icons, logos, or other custom images as list markers.</p>

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
                            <td className="border-b border-[#ababab] py-2">list-image-none</td>
                            <td className="border-b border-[#ababab] py-2">list-style-image: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply a custom list-style image, you can use the <span className='font-semibold'>list-image-&#91;image-url&#93;</span> class, where `image-url` is the path to the image you want to use as the bullet point for the list items.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply list style images using responsive prefixes like <span className='font-semibold'>sm:list-image-&#91;image-url&#93;</span> or <span className='font-semibold'>lg:list-image-&#91;image-url&#93;</span>, to adjust the list marker for different screen sizes.</p>
            </section>
        </div>
    )
}

export default ListStyleImage