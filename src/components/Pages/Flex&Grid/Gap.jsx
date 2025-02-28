import React from 'react'

function Gap() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Gap.</h1>
            <p className='mb-4'>The <span className='font-semibold'>gap</span> utility in LiFrame allows you to set the spacing between grid or flex items. It helps to create consistent and responsive layouts without needing to manually adjust margins between individual elements.</p>

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
                            <td className="border-b border-[#ababab] py-2">gap-0</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-0</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-0</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-px</td>
                            <td className="border-b border-[#ababab] py-2">gap: 1px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-px</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 1px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-px</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 1px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-0.5</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-0.5</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-0.5</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-1</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-1</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-1</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-1.5</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-1.5</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-1.5</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-2</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-2</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-2</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-2.5</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-2.5</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-2.5</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-3</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-3</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-3</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-3.5</td>
                            <td className="border-b border-[#ababab] py-2">gap: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-3.5</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-3.5</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-4</td>
                            <td className="border-b border-[#ababab] py-2">gap: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-4</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-4</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-5</td>
                            <td className="border-b border-[#ababab] py-2">gap: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-5</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-5</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-6</td>
                            <td className="border-b border-[#ababab] py-2">gap: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-6</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-6</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-7</td>
                            <td className="border-b border-[#ababab] py-2">gap: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-7</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-7</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-8</td>
                            <td className="border-b border-[#ababab] py-2">gap: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-8</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-8</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-9</td>
                            <td className="border-b border-[#ababab] py-2">gap: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-9</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-9</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-10</td>
                            <td className="border-b border-[#ababab] py-2">gap: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-10</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-10</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-11</td>
                            <td className="border-b border-[#ababab] py-2">gap: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-11</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-11</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-12</td>
                            <td className="border-b border-[#ababab] py-2">gap: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-12</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-12</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-14</td>
                            <td className="border-b border-[#ababab] py-2">gap: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-14</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-14</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-16</td>
                            <td className="border-b border-[#ababab] py-2">gap: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-16</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-16</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-20</td>
                            <td className="border-b border-[#ababab] py-2">gap: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-20</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-20</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-24</td>
                            <td className="border-b border-[#ababab] py-2">gap: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-24</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-24</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-28</td>
                            <td className="border-b border-[#ababab] py-2">gap: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-28</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-28</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-32</td>
                            <td className="border-b border-[#ababab] py-2">gap: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-32</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-32</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-36</td>
                            <td className="border-b border-[#ababab] py-2">gap: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-36</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-36</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-40</td>
                            <td className="border-b border-[#ababab] py-2">gap: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-40</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-40</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-44</td>
                            <td className="border-b border-[#ababab] py-2">gap: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-44</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-44</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-48</td>
                            <td className="border-b border-[#ababab] py-2">gap: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-48</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-48</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-52</td>
                            <td className="border-b border-[#ababab] py-2">gap: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-52</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-52</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-56</td>
                            <td className="border-b border-[#ababab] py-2">gap: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-56</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-56</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-60</td>
                            <td className="border-b border-[#ababab] py-2">gap: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-60</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-60</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-64</td>
                            <td className="border-b border-[#ababab] py-2">gap: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-64</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-64</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-72</td>
                            <td className="border-b border-[#ababab] py-2">gap: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-72</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-72</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-80</td>
                            <td className="border-b border-[#ababab] py-2">gap: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-80</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-80</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-96</td>
                            <td className="border-b border-[#ababab] py-2">gap: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-x-96</td>
                            <td className="border-b border-[#ababab] py-2">column-gap: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">gap-y-96</td>
                            <td className="border-b border-[#ababab] py-2">row-gap: 24rem; /* 384px */</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Setting the gap between elements</h6>
                    <p className='mb-4'>The <span className='font-semibold'>gap-&#9913;</span> utility lets you control the space between items in both grid and flex layouts.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 text-center bg-secondary/40">
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>01</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>02</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>03</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>04</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>05</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>06</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>07</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>08</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>09</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div className="grid grid-cols-3 `}<span className="bg-secondary p-1 rounded">gap-4</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Changing row and column gaps independently</h6>
                    <p className="mb-4">Use the <span className='font-semibold'>gap-x-&#9913;</span> and <span className='font-semibold'>gap-y-&#9913;</span> utilities to change the gap between columns and rows independently.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-x-8 gap-y-4 text-center bg-secondary/40">
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>01</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>02</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>03</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>04</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>05</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>06</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>07</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>08</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>09</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div className="grid grid-cols-3 `}<span className="bg-secondary p-1 rounded">gap-x-8</span> <span className="bg-secondary p-1 rounded">gap-y-4</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can use responsive prefixes like <span className='font-semibold'>lg:gap-6</span> to adjust the gap based on different screen sizes. Pseudo-classes like <span className='font-semibold'>hover</span> or <span className='font-semibold'>focus</span> can also be used to change the gap dynamically on interactions.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid gap-4 `}<span className="bg-secondary p-1 rounded">hover:gap-8</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Gap