import React from 'react'

function FlexBasis() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Basis.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-basis</span> utility in LiFrame allows you to set the initial size of a flex item before any remaining space is distributed. It is particularly useful for defining how elements grow or shrink inside a flex container.</p>

            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='sticky top-0 w-full bg-primary'>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-0</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0px;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-3</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-4</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-6</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-7</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-8</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-9</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-10</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-11</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-14</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-16</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-20</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-24</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-28</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-32</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-36</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-40</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-44</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-48</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-52</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-56</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-60</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-64</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-72</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-80</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-96</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-auto</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-px</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 1px;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-0.5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1.5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2.5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-3.5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1/2</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 50%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1/3</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2/3</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1/4</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 25%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2/4</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 50%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-3/4</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 75%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1/5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 20%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2/5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 40%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-3/5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 60%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-4/5</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 80%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1/6</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 16.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2/6</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-3/6</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 50%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-4/6</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-5/6</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 83.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-1/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 8.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-2/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 16.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-3/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 25%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-4/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-5/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 41.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-6/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 50%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-7/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 58.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-8/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-9/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 75%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-10/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 83.333333%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-11/12</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 91.666667%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">basis-full</td>
                            <td class="border-b border-[#ababab] py-2">flex-basis: 100%;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To control the initial size of a flex item, simply add the appropriate <span className='font-semibold'>basis-&#9913;</span> utility class. This defines the default size before it starts growing or shrinking.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can apply flex basis utilities conditionally using responsive prefixes or pseudo-classes like <span className='font-semibold'>hover</span>, <span className='font-semibold'>focus</span>, and more.</p>
            </section>
        </div>
    )
}

export default FlexBasis