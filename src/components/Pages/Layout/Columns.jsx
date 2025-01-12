import React from 'react'

function Columns() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Columns.</h1>
            <p className='mb-4'>The <span className="font-semibold">columns</span> utility in LiFrame allows you to easily define a multi-column layout, where content automatically flows across columns. This is useful for creating layouts like magazines, articles, or grids where content spans multiple columns.</p>
            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='sticky top-0'>
                        <tr className='bg-primary'>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-1 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 1; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-2 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 2; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-3 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 3; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-4 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 4; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-5 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 5; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-6 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 6; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-7 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 7; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-8 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 8; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-9 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 9; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-10 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 10; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-11 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 11; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-12 </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 12; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-auto </td>
                            <td className='border-b border-[#ababab] py-2'> columns: auto; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-3xs </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 16rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-2xs </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 18rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-xs </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 20rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-sm </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 24rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-md </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 28rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-lg </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 32rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 36rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-2xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 42rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-3xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 48rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-4xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 56rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-5xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 64rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-6xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 72rem; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> columns-7xl </td>
                            <td className='border-b border-[#ababab] py-2'> columns: 80rem; </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-8">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use utilities like <span className="font-semibold">columns-2</span> and <span className="font-semibold">columns-3</span> to set the number of columns that should be created for the content within an element. The column width will be automatically adjusted to accommodate that number.</p>
                <div className='mb-5 p-5 rounded-lg border border-black'>
                    <div className='columns-1 sm:columns-3 gap-4'>
                        <img className='w-full rounded-md' src="https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img className='w-full mt-4 rounded-md' src="https://images.unsplash.com/photo-1465408522361-a6f502298219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxmb3Jlc3R8ZW58MHx8MHx8fDA%3D" alt="" />
                        <img className='w-full mt-4 rounded-md' src="https://plus.unsplash.com/premium_photo-1666874681316-023c0fc7a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxmb3Jlc3R8ZW58MHx8MHx8fDA%3D" alt="" />
                        <img className='w-full mt-4 rounded-md' src="https://images.unsplash.com/photo-1420745981456-b95fe23f5753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxmb3Jlc3R8ZW58MHx8MHx8fDA%3D" alt="" />
                        <img className='w-full mt-4 rounded-md' src="https://plus.unsplash.com/premium_photo-1669240769839-05d04cb2f714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZvcmVzdCUyMGFuZCUyMGFuaW1hbHN8ZW58MHx8MHx8fDA%3D" alt="" />
                        <img className='w-full mt-4 rounded-md' src="https://images.unsplash.com/photo-1521753643072-122f97ed86e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </div>
            <p className='mb-2'><span className='px-2 py-0.5 bg-secondary rounded'>Note:</span> To manage the gap between columns use <span className='font-semibold'>gap-&#9913;.</span></p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>columns-3</span> {`gap-4">
  <img class="w-full ..." src="..." />
  <img class="w-full ..." src="..." />
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-8'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply the columns utility conditionally using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        <span>&lt;</span><span>div</span> <span>class</span><span>="</span><span className='bg-secondary p-1 rounded'>hover:columns-3</span> <span>gap-4</span><span>"</span><span>&gt;</span><span>...</span><span>&lt;/div&gt;</span>
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Columns
