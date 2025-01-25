import React from 'react'
import { Link } from 'react-router-dom'

function TopRightBottomLeft() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Top / Right / Bottom / Left.</h1>
            <p className="mb-4">The <span className="font-semibold">top</span>, <span className="font-semibold">right</span>, <span className="font-semibold">bottom</span>, and <span className="font-semibold">left</span> utilities in LiFrame are used to control the positioning of elements along the respective edges when the element's position is set to absolute, relative, fixed, or sticky. These utilities are helpful for placing elements in specific areas of their container or viewport.</p>
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
                            <td className='border-b border-[#ababab] py-2'>inset-0</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-0</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0px; <br /> right: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-0</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0px; <br /> bottom: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-0</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-0</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-0</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-0</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-0</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-0</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-px</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-px</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1px; <br /> right: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-px</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1px; <br /> bottom: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-px</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-px</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-px</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-px</td>
                            <td className='border-b border-[#ababab] py-2'>right: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-px</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-px</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.125rem; /* 2px */ <br /> right: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.125rem; /* 2px */ <br /> bottom: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-0.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-1</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-1</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.25rem; /* 4px */ <br /> right: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-1</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.25rem; /* 4px */ <br /> bottom: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-1</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-1</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-1</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-1</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-1</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-1</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.375rem; /* 6px */ <br /> right: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.375rem; /* 6px */ <br /> bottom: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-1.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-2</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-2</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.5rem; /* 8px */ <br /> right: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-2</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.5rem; /* 8px */ <br /> bottom: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-2</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-2</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-2</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-2</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-2</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-2</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.625rem; /* 10px */ <br /> right: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.625rem; /* 10px */ <br /> bottom: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-2.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-3</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-3</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.75rem; /* 12px */ <br /> right: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-3</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.75rem; /* 12px */ <br /> bottom: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-3</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-3</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-3</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-3</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-3</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-3</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.875rem; /* 14px */ <br /> right: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.875rem; /* 14px */ <br /> bottom: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>right: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-3.5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-4</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1rem; /* 16px */ <br /> right: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1rem; /* 16px */ <br /> bottom: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-4</td>
                            <td className='border-b border-[#ababab] py-2'>right: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-4</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-5</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1.25rem; /* 20px */ <br /> right: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1.25rem; /* 20px */ <br /> bottom: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-5</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-5</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-5</td>
                            <td className='border-b border-[#ababab] py-2'>right: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-5</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-5</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-6</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-6</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1.5rem; /* 24px */ <br /> right: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-6</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1.5rem; /* 24px */ <br /> bottom: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-6</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-6</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-6</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-6</td>
                            <td className='border-b border-[#ababab] py-2'>right: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-6</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-6</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-7</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-7</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1.75rem; /* 28px */ <br /> right: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-7</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1.75rem; /* 28px */ <br /> bottom: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-7</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-7</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-7</td>
                            <td className='border-b border-[#ababab] py-2'>top: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-7</td>
                            <td className='border-b border-[#ababab] py-2'>right: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-7</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-7</td>
                            <td className='border-b border-[#ababab] py-2'>left: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-8</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-8</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2rem; /* 32px */ <br /> right: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-8</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2rem; /* 32px */ <br /> bottom: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-8</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-8</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-8</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-8</td>
                            <td className='border-b border-[#ababab] py-2'>right: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-8</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-8</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-9</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-9</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2.25rem; /* 36px */ <br /> right: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-9</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2.25rem; /* 36px */ <br /> bottom: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-9</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-9</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-9</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-9</td>
                            <td className='border-b border-[#ababab] py-2'>right: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-9</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-9</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-10</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-10</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2.5rem; /* 40px */ <br /> right: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-10</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2.5rem; /* 40px */ <br /> bottom: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-10</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-10</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-10</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-10</td>
                            <td className='border-b border-[#ababab] py-2'>right: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-10</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-10</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-11</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-11</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2.75rem; /* 44px */ <br /> right: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-11</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2.75rem; /* 44px */ <br /> bottom: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-11</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-11</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-11</td>
                            <td className='border-b border-[#ababab] py-2'>top: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-11</td>
                            <td className='border-b border-[#ababab] py-2'>right: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-11</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-11</td>
                            <td className='border-b border-[#ababab] py-2'>left: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-12</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-12</td>
                            <td className='border-b border-[#ababab] py-2'>left: 3rem; /* 48px */ <br /> right: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-12</td>
                            <td className='border-b border-[#ababab] py-2'>top: 3rem; /* 48px */ <br /> bottom: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-12</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-12</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-12</td>
                            <td className='border-b border-[#ababab] py-2'>top: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-12</td>
                            <td className='border-b border-[#ababab] py-2'>right: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-12</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-12</td>
                            <td className='border-b border-[#ababab] py-2'>left: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-14</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-14</td>
                            <td className='border-b border-[#ababab] py-2'>left: 3.5rem; /* 56px */ <br /> right: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-14</td>
                            <td className='border-b border-[#ababab] py-2'>top: 3.5rem; /* 56px */ <br /> bottom: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-14</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-14</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-14</td>
                            <td className='border-b border-[#ababab] py-2'>top: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-14</td>
                            <td className='border-b border-[#ababab] py-2'>right: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-14</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-14</td>
                            <td className='border-b border-[#ababab] py-2'>left: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-16</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-16</td>
                            <td className='border-b border-[#ababab] py-2'>left: 4rem; /* 64px */ <br /> right: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-16</td>
                            <td className='border-b border-[#ababab] py-2'>top: 4rem; /* 64px */ <br /> bottom: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-16</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-16</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-16</td>
                            <td className='border-b border-[#ababab] py-2'>top: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-16</td>
                            <td className='border-b border-[#ababab] py-2'>right: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-16</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-16</td>
                            <td className='border-b border-[#ababab] py-2'>left: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-20</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-20</td>
                            <td className='border-b border-[#ababab] py-2'>left: 5rem; /* 80px */ <br /> right: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-20</td>
                            <td className='border-b border-[#ababab] py-2'>top: 5rem; /* 80px */ <br /> bottom: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-20</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-20</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-20</td>
                            <td className='border-b border-[#ababab] py-2'>top: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-20</td>
                            <td className='border-b border-[#ababab] py-2'>right: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-20</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-20</td>
                            <td className='border-b border-[#ababab] py-2'>left: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-24</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-24</td>
                            <td className='border-b border-[#ababab] py-2'>left: 6rem; /* 96px */ <br /> right: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-24</td>
                            <td className='border-b border-[#ababab] py-2'>top: 6rem; /* 96px */ <br /> bottom: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-24</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-24</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-24</td>
                            <td className='border-b border-[#ababab] py-2'>top: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-24</td>
                            <td className='border-b border-[#ababab] py-2'>right: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-24</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-24</td>
                            <td className='border-b border-[#ababab] py-2'>left: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-28</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-28</td>
                            <td className='border-b border-[#ababab] py-2'>left: 7rem; /* 112px */ <br /> right: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-28</td>
                            <td className='border-b border-[#ababab] py-2'>top: 7rem; /* 112px */ <br /> bottom: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-28</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-28</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-28</td>
                            <td className='border-b border-[#ababab] py-2'>top: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-28</td>
                            <td className='border-b border-[#ababab] py-2'>right: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-28</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-28</td>
                            <td className='border-b border-[#ababab] py-2'>left: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-32</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-32</td>
                            <td className='border-b border-[#ababab] py-2'>left: 8rem; /* 128px */ <br /> right: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-32</td>
                            <td className='border-b border-[#ababab] py-2'>top: 8rem; /* 128px */ <br /> bottom: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-32</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-32</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-32</td>
                            <td className='border-b border-[#ababab] py-2'>top: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-32</td>
                            <td className='border-b border-[#ababab] py-2'>right: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-32</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-32</td>
                            <td className='border-b border-[#ababab] py-2'>left: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-36</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-36</td>
                            <td className='border-b border-[#ababab] py-2'>left: 9rem; /* 144px */ <br /> right: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-36</td>
                            <td className='border-b border-[#ababab] py-2'>top: 9rem; /* 144px */ <br /> bottom: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-36</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-36</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-36</td>
                            <td className='border-b border-[#ababab] py-2'>top: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-36</td>
                            <td className='border-b border-[#ababab] py-2'>right: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-36</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-36</td>
                            <td className='border-b border-[#ababab] py-2'>left: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-40</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-40</td>
                            <td className='border-b border-[#ababab] py-2'>left: 10rem; /* 160px */ <br /> right: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-40</td>
                            <td className='border-b border-[#ababab] py-2'>top: 10rem; /* 160px */ <br /> bottom: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-40</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-40</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-40</td>
                            <td className='border-b border-[#ababab] py-2'>top: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-40</td>
                            <td className='border-b border-[#ababab] py-2'>right: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-40</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-40</td>
                            <td className='border-b border-[#ababab] py-2'>left: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-44</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-44</td>
                            <td className='border-b border-[#ababab] py-2'>left: 11rem; /* 176px */ <br /> right: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-44</td>
                            <td className='border-b border-[#ababab] py-2'>top: 11rem; /* 176px */ <br /> bottom: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-44</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-44</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-44</td>
                            <td className='border-b border-[#ababab] py-2'>top: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-44</td>
                            <td className='border-b border-[#ababab] py-2'>right: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-44</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-44</td>
                            <td className='border-b border-[#ababab] py-2'>left: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-48</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-48</td>
                            <td className='border-b border-[#ababab] py-2'>left: 12rem; /* 192px */ <br /> right: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-48</td>
                            <td className='border-b border-[#ababab] py-2'>top: 12rem; /* 192px */ <br /> bottom: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-48</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-48</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-48</td>
                            <td className='border-b border-[#ababab] py-2'>top: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-48</td>
                            <td className='border-b border-[#ababab] py-2'>right: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-48</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-48</td>
                            <td className='border-b border-[#ababab] py-2'>left: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-52</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-52</td>
                            <td className='border-b border-[#ababab] py-2'>left: 13rem; /* 208px */ <br /> right: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-52</td>
                            <td className='border-b border-[#ababab] py-2'>top: 13rem; /* 208px */ <br /> bottom: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-52</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-52</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-52</td>
                            <td className='border-b border-[#ababab] py-2'>top: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-52</td>
                            <td className='border-b border-[#ababab] py-2'>right: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-52</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-52</td>
                            <td className='border-b border-[#ababab] py-2'>left: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-56</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-56</td>
                            <td className='border-b border-[#ababab] py-2'>left: 14rem; /* 224px */ <br /> right: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-56</td>
                            <td className='border-b border-[#ababab] py-2'>top: 14rem; /* 224px */ <br /> bottom: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-56</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-56</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-56</td>
                            <td className='border-b border-[#ababab] py-2'>top: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-56</td>
                            <td className='border-b border-[#ababab] py-2'>right: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-56</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-56</td>
                            <td className='border-b border-[#ababab] py-2'>left: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-60</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-60</td>
                            <td className='border-b border-[#ababab] py-2'>left: 15rem; /* 240px */ <br /> right: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-60</td>
                            <td className='border-b border-[#ababab] py-2'>top: 15rem; /* 240px */ <br /> bottom: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-60</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-60</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-60</td>
                            <td className='border-b border-[#ababab] py-2'>top: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-60</td>
                            <td className='border-b border-[#ababab] py-2'>right: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-60</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-60</td>
                            <td className='border-b border-[#ababab] py-2'>left: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-64</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-64</td>
                            <td className='border-b border-[#ababab] py-2'>left: 16rem; /* 256px */ <br /> right: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-64</td>
                            <td className='border-b border-[#ababab] py-2'>top: 16rem; /* 256px */ <br /> bottom: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-64</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-64</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-64</td>
                            <td className='border-b border-[#ababab] py-2'>top: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-64</td>
                            <td className='border-b border-[#ababab] py-2'>right: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-64</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-64</td>
                            <td className='border-b border-[#ababab] py-2'>left: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-72</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-72</td>
                            <td className='border-b border-[#ababab] py-2'>left: 18rem; /* 288px */ <br /> right: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-72</td>
                            <td className='border-b border-[#ababab] py-2'>top: 18rem; /* 288px */ <br /> bottom: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-72</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-72</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-72</td>
                            <td className='border-b border-[#ababab] py-2'>top: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-72</td>
                            <td className='border-b border-[#ababab] py-2'>right: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-72</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-72</td>
                            <td className='border-b border-[#ababab] py-2'>left: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-80</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-80</td>
                            <td className='border-b border-[#ababab] py-2'>left: 20rem; /* 320px */ <br /> right: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-80</td>
                            <td className='border-b border-[#ababab] py-2'>top: 20rem; /* 320px */ <br /> bottom: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-80</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-80</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-80</td>
                            <td className='border-b border-[#ababab] py-2'>top: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-80</td>
                            <td className='border-b border-[#ababab] py-2'>right: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-80</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-80</td>
                            <td className='border-b border-[#ababab] py-2'>left: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-96</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-96</td>
                            <td className='border-b border-[#ababab] py-2'>left: 24rem; /* 384px */ <br /> right: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-96</td>
                            <td className='border-b border-[#ababab] py-2'>top: 24rem; /* 384px */ <br /> bottom: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-96</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-96</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-96</td>
                            <td className='border-b border-[#ababab] py-2'>top: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-96</td>
                            <td className='border-b border-[#ababab] py-2'>right: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-96</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-96</td>
                            <td className='border-b border-[#ababab] py-2'>left: 24rem; /* 384px */</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-auto</td>
                            <td className='border-b border-[#ababab] py-2'>inset: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-full</td>
                            <td className='border-b border-[#ababab] py-2'>inset: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-auto</td>
                            <td className='border-b border-[#ababab] py-2'>left: auto; right: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>left: 50%; right: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>left: 33.333333%; <br /> right: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>left: 66.666667%; <br /> right: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 25%; right: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 50%; right: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 75%; right: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-x-full</td>
                            <td className='border-b border-[#ababab] py-2'>left: 100%; right: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-auto</td>
                            <td className='border-b border-[#ababab] py-2'>top: auto; bottom: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>top: 50%; bottom: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>top: 33.333333%; <br /> bottom: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>top: 66.666667%; <br /> bottom: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 25%; bottom: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 50%; bottom: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 75%; bottom: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inset-y-full</td>
                            <td className='border-b border-[#ababab] py-2'>top: 100%; bottom: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-auto</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>start-full</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-start: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-auto</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>end-full</td>
                            <td className='border-b border-[#ababab] py-2'>inset-inline-end: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-auto</td>
                            <td className='border-b border-[#ababab] py-2'>top: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>top: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>top: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>top: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>top: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>top-full</td>
                            <td className='border-b border-[#ababab] py-2'>top: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-auto</td>
                            <td className='border-b border-[#ababab] py-2'>right: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>right: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>right: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>right: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>right: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>right: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>right: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>right-full</td>
                            <td className='border-b border-[#ababab] py-2'>right: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-auto</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>bottom-full</td>
                            <td className='border-b border-[#ababab] py-2'>bottom: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-auto</td>
                            <td className='border-b border-[#ababab] py-2'>left: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-1/2</td>
                            <td className='border-b border-[#ababab] py-2'>left: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-1/3</td>
                            <td className='border-b border-[#ababab] py-2'>left: 33.333333%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-2/3</td>
                            <td className='border-b border-[#ababab] py-2'>left: 66.666667%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-1/4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 25%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-2/4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 50%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-3/4</td>
                            <td className='border-b border-[#ababab] py-2'>left: 75%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>left-full</td>
                            <td className='border-b border-[#ababab] py-2'>left: 100%;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Placing a positioned element</h6>
                    <p className="mb-4">Use the <span className="font-semibold">top-&#9913;</span>, <span className="font-semibold">right-&#9913;</span>, <span className="font-semibold">bottom-&#9913;</span>, <span className="font-semibold">left-&#9913;</span> and <span className="font-semibold">inset-&#9913;</span> utilities to set the horizontal or vertical position of a <Link to='/docs/position' className='underline underline-offset-2 decoration-third font-semibold'>positioned element</Link>.</p>
                    <div className="border border-black rounded-lg p-5 mb-5">
                        <div className="grid grid-cols-3 grid-rows-3 place-items-center gap-4 leading-6">
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 h-14 absolute left-0 top-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">01</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 absolute inset-x-0 top-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">02</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 h-14 absolute right-0 top-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">03</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 absolute inset-y-0 left-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">04</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 absolute inset-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">05</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 absolute inset-y-0 right-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">06</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 h-14 absolute left-0 bottom-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">07</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 absolute inset-x-0 bottom-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">08</div>
                            </div>
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 h-14 absolute right-0 bottom-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg">09</div>
                            </div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<!-- Pin to top left corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">left-0 top-0</span>{` h-16 w-16 ...">01</div>
</div>

<!-- Span top edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">inset-x-0 top-0</span>{` h-16 ...">02</div>
</div>

<!-- Pin to top right corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">top-0 right-0</span>{` h-16 w-16 ...">03</div>
</div>

<!-- Span left edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">inset-y-0 left-0</span>{` w-16 ...">04</div>
</div>

<!-- Fill entire parent -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">inset-0</span>{` ...">05</div>
</div>

<!-- Span right edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">inset-y-0 right-0</span>{` w-16 ...">06</div>
</div>

<!-- Pin to bottom left corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">bottom-0 left-0</span>{` h-16 w-16 ...">07</div>
</div>

<!-- Span bottom edge -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">inset-x-0 bottom-0</span>{` h-16 ...">08</div>
</div>

<!-- Pin to bottom right corner -->
<div class="relative h-32 w-32 ...">
  <div class="absolute `}<span className="bg-secondary p-1 rounded">bottom-0 right-0</span>{` h-16 w-16 ...">09</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Using negative values</h6>
                    <p className='mb-4'>To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value.</p>
                    <div className="relative overflow-auto border border-black rounded-lg p-7 mb-5">
                        <div className="flex justify-center">
                            <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                <div className="p-4 w-14 h-14 absolute -left-4 -top-4 flex items-center justify-center bg-secondary shadow-lg rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="relative h-32 w-32 ...">
  <div class="absolute h-14 w-14 `}<span className="bg-secondary p-1 rounded">-left-4 -top-4</span>{`..."></div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Using logical properties</h6>
                    <p className="mb-2">Use the <span className="font-semibold">start-&#9913;</span> and <span className="font-semibold">end-&#9913;</span> utilities to set the <span className="font-semibold">inset-inline-start</span> and <span className="font-semibold">inset-inline-end</span> <Link to='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts' className='underline underline-offset-2 decoration-third font-semibold'>logical properties</Link>, which map to either the left or right side based on the text direction.</p>
                    <p className="mb-4">For more control, you can also use the <span className="font-semibold">LTR and RTL modifiers</span> to conditionally apply specific styles depending on the current text direction.</p>
                    <div className='border border-black rounded-lg p-5 mb-5'>
                        <div className="grid grid-cols-2 gap-x-4 place-items-center">
                            <div className="flex flex-col items-start gap-y-4">
                                <p className="text-sm font-medium">Left-to-right</p>
                                <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                    <div className="p-4 w-14 h-14 absolute top-0 left-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg"></div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-y-4">
                                <p className="text-sm font-medium">Right-to-left</p>
                                <div className="relative w-18 h-18 sm:w-32 sm:h-32 rounded-lg bg-secondary/40">
                                    <div className="p-4 w-14 h-14 absolute top-0 right-0 flex items-center justify-center bg-secondary shadow-lg rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div dir="`}<span className="bg-secondary p-1 rounded">ltr</span>{`">
  <div class="relative h-32 w-32 ...">
    <div class="absolute h-14 w-14 top-0 `}<span className="bg-secondary p-1 rounded">start-0</span>{` ..."></div>
  </div>
<div>

<div dir="`}<span className="bg-secondary p-1 rounded">rtl</span>{`">
  <div class="relative h-32 w-32 ...">
    <div class="absolute h-14 w-14 top-0 `}<span className="bg-secondary p-1 rounded">start-0</span>{` ..."></div>
  </div>
<div>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use <span className="font-semibold">hover:top-6</span> to only apply the <span className="font-semibold">top-6</span> utility on hover.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="top-4 `}<span className="bg-secondary p-1 rounded">hover:top-6</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TopRightBottomLeft