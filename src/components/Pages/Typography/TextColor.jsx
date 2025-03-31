import React from 'react'

function TextColor() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Color. need a look</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-color</span> utility in LiFrame allows you to apply custom colors to text elements. This enables you to easily adjust the text's visual appearance according to your design needs, offering a wide range of color options for various text elements throughout your layout.</p>

            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-inherit</td>
                            <td className="border-b border-[#ababab] py-2">color: inherit;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-current</td>
                            <td className="border-b border-[#ababab] py-2">color: currentColor;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-transparent</td>
                            <td className="border-b border-[#ababab] py-2">color: transparent;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-white</td>
                            <td className="border-b border-[#ababab] py-2">color: #ffffff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-black</td>
                            <td className="border-b border-[#ababab] py-2">color: #000000;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f8fafc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #f1f5f9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #e2e8f0;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #cbd5e1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #94a3b8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #64748b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #475569;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #334155;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #1e293b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #0f172a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-slate-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #020617;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f9fafb;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #f3f4f6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #e5e7eb;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #d1d5db;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #9ca3af;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #6b7280;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #4b5563;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #374151;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #1f2937;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #111827;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-gray-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #030712;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fafafa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #f4f4f5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #e4e4e7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #d4d4d8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #a1a1aa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #71717a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #52525b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #3f3f46;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #27272a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #18181b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-zinc-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #09090b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fafafa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #f5f5f5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #e5e5e5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #d4d4d4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #a3a3a3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #737373;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #525252;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #404040;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #262626;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #171717;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-neutral-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #0a0a0a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fafaf9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #f5f5f4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #e7e5e4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #d6d3d1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #a8a29e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #78716c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #57534e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #44403c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #292524;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #1c1917;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-stone-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #0c0a09;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fef2f2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #fee2e2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #fecaca;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #fca5a5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #f87171;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #ef4444;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #dc2626;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #b91c1c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #991b1b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #7f1d1d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-red-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #450a0a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fff7ed;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #ffedd5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #fed7aa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #fdba74;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #fb923c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #f97316;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #ea580c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #c2410c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #9a3412;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #7c2d12;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-orange-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #431407;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fffbeb;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #fef3c7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #fde68a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #fcd34d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #fbbf24;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #f59e0b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #d97706;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #b45309;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #92400e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #78350f;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-amber-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #451a03;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fefce8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #fef9c3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #fef08a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #fde047;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #facc15;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #eab308;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #ca8a04;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #a16207;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #854d0e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #713f12;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-yellow-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #422006;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f7fee7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #ecfccb;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #d9f99d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #bef264;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #a3e635;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #84cc16;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #65a30d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #4d7c0f;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #3f6212;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #365314;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lime-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #1a2e05;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f0fdf4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #dcfce7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #bbf7d0;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #86efac;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #4ade80;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #22c55e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #16a34a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #15803d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #166534;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #14532d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-green-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #052e16;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #ecfdf5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #d1fae5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #a7f3d0;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #6ee7b7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #34d399;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #10b981;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #059669;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #047857;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #065f46;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #064e3b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-emerald-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #022c22;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f0fdfa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #ccfbf1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #99f6e4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #5eead4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #2dd4bf;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #14b8a6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #0d9488;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #0f766e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #115e59;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #134e4a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-teal-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #042f2e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #ecfeff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #cffafe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #a5f3fc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #67e8f9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #22d3ee;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #06b6d4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #0891b2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #0e7490;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #155e75;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #164e63;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-cyan-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #083344;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f0f9ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #e0f2fe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #bae6fd;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #7dd3fc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #38bdf8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #0ea5e9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #0284c7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #0369a1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #075985;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #0c4a6e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sky-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #082f49;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #eff6ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #dbeafe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #bfdbfe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #93c5fd;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #60a5fa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #3b82f6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #2563eb;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #1d4ed8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #1e40af;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #1e3a8a;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-blue-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #172554;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #eef2ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #e0e7ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #c7d2fe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #a5b4fc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #818cf8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #6366f1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #4f46e5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #4338ca;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #3730a3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #312e81;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-indigo-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #1e1b4b;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #f5f3ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #ede9fe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #ddd6fe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #c4b5fd;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #a78bfa;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #8b5cf6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #7c3aed;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #6d28d9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #5b21b6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #4c1d95;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-violet-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #2e1065;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #faf5ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #f3e8ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #e9d5ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #d8b4fe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #c084fc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #a855f7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #9333ea;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #7e22ce;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #6b21a8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #581c87;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-purple-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #3b0764;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fdf4ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #fae8ff;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #f5d0fe;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #f0abfc;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #e879f9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #d946ef;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #c026d3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #a21caf;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #86198f;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #701a75;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-fuchsia-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #4a044e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fdf2f8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #fce7f3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #fbcfe8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #f9a8d4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #f472b6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #ec4899;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #db2777;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #be185d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #9d174d;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #831843;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-pink-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #500724;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-50</td>
                            <td className="border-b border-[#ababab] py-2">color: #fff1f2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-100</td>
                            <td className="border-b border-[#ababab] py-2">color: #ffe4e6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-200</td>
                            <td className="border-b border-[#ababab] py-2">color: #fecdd3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-300</td>
                            <td className="border-b border-[#ababab] py-2">color: #fda4af;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-400</td>
                            <td className="border-b border-[#ababab] py-2">color: #fb7185;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-500</td>
                            <td className="border-b border-[#ababab] py-2">color: #f43f5e;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-600</td>
                            <td className="border-b border-[#ababab] py-2">color: #e11d48;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-700</td>
                            <td className="border-b border-[#ababab] py-2">color: #be123c;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-800</td>
                            <td className="border-b border-[#ababab] py-2">color: #9f1239;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-900</td>
                            <td className="border-b border-[#ababab] py-2">color: #881337;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-rose-950</td>
                            <td className="border-b border-[#ababab] py-2">color: #4c0519;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply text colors, you can use classes such as <span className='font-semibold'>text-red-500</span>, <span className='font-semibold'>text-blue-700</span>, or <span className='font-semibold'>text-gray-900</span> for different color options. Simply replace the color name and shade to suit your design.</p>
                <div className="mb-5 p-4 rounded-lg border border-black">
                    <p className='text-stone-500'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">text-stone-500</span>{`">Lorem ipsum dolor sit amet consectetur</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text colors using responsive prefixes like <span className='font-semibold'>sm:text-green-500</span> or <span className='font-semibold'>md:text-yellow-700</span> to adjust text color based on screen size.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="text-stone-500 `}<span className="bg-secondary p-1 rounded">hover:text-black</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TextColor