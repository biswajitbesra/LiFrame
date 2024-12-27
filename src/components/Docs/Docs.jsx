import React from 'react'
import '../Docs/docs.css'
import AspectRatio from '../Pages/AspectRatio'
import { Outlet, Link } from 'react-router-dom'

function Docs() {
    return (
        <section className='flex'>
            <div className='w-[22%] h-88vh p-4 overflow-y-auto'>
                <ul className='cursor-default'>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Documentation</h5>
                        <ul className='*:pl-8 *:mb-2'>
                            <li><Link to='/docs'>Document</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Layout</h5>
                        <ul className='*:pl-8 *:mb-2'>
                            <li><Link to='/docs/aspect-ratio'>Aspect Ratio</Link></li>
                            <li><Link to='/docs/container'>Container</Link></li>
                            <li><Link to='/docs/columns'>Columns</Link></li>
                            <li><Link to='/docs/break-after'>Break After</Link></li>
                            <li><Link to='/docs/break-before'>Break Before</Link></li>
                            <li><Link to='/docs/break-inside'>Break Inside</Link></li>
                            <li><Link to='/docs/box-decoration-break'>Box Decoration Break</Link></li>
                            <li><Link to='/docs/box-sizing'>Box Sizing</Link></li>
                            <li><Link to='/docs/display'>Display</Link></li>
                            <li><Link to='/docs/floats'>Floats</Link></li>
                            <li><Link to='/docs/clear'>Clear</Link></li>
                            <li><Link to='/docs/isolation'>Isolation</Link></li>
                            <li><Link to='/docs/object-fit'>Object Fit</Link></li>
                            <li><Link to='/docs/object-position'>Object Position</Link></li>
                            <li><Link to='/docs/overflow'>Overflow</Link></li>
                            <li><Link to='/docs/overscroll-behavior'>Overscroll Behavior</Link></li>
                            <li><Link to='/docs/position'>Position</Link></li>
                            <li><Link to='/docs/top-right-bottom-left'>Top / Right / Bottom / Left</Link></li>
                            <li><Link to='/docs/visibility'>Visibility</Link></li>
                            <li><Link to='/docs/z-Index'>Z-Index</Link></li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Flexbox & Grid</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Flex Basis</li>
                            <li>Flex Direction</li>
                            <li>Flex Wrap</li>
                            <li>Flex</li>
                            <li>Flex Grow</li>
                            <li>Flex Shrink</li>
                            <li>Order</li>
                            <li>Grid Template Columns</li>
                            <li>Grid Column Start / End</li>
                            <li>Grid Template Rows</li>
                            <li>Grid Row Start / End</li>
                            <li>Grid Auto Flow</li>
                            <li>Grid Auto Columns</li>
                            <li>Grid Auto Rows</li>
                            <li>Gap</li>
                            <li>Justify Content</li>
                            <li>Justify Items</li>
                            <li>Justify Self</li>
                            <li>Align Content</li>
                            <li>Align Items</li>
                            <li>Align Self</li>
                            <li>Place Content</li>
                            <li>Place Items</li>
                            <li>Place Self</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Spacing</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Padding</li>
                            <li>Margin</li>
                            <li>Space Between</li>
                        </ul>
                    </li>

                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Flex & Grid</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Flex</li>
                            <li>Flex Direction</li>
                            <li>Flex Wrap</li>
                            <li>Flex Grow</li>
                            <li>Flex Shrink</li>
                            <li>Order</li>
                            <li>Grid Template Columns</li>
                            <li>Gap</li>
                            <li>Justify Content</li>
                            <li>Align Items</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Sizing</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Width</li>
                            <li>Min-Width</li>
                            <li>Max-Width</li>
                            <li>Height</li>
                            <li>Min-Height</li>
                            <li>Max-Height</li>
                            <li>Size</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Typography</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Font Family</li>
                            <li>Font Size</li>
                            <li>Font Smoothing</li>
                            <li>Font Style</li>
                            <li>Font Weight</li>
                            <li>Font Variant Numeric</li>
                            <li>Letter Spacing</li>
                            <li>Line Clamp</li>
                            <li>Line Height</li>
                            <li>List Style Image</li>
                            <li>List Style Position</li>
                            <li>List Style Type</li>
                            <li>Text Align</li>
                            <li>Text Color</li>
                            <li>Text Decoration</li>
                            <li>Text Decoration Color</li>
                            <li>Text Decoration Style</li>
                            <li>Text Decoration Thickness</li>
                            <li>Text Underline Offset</li>
                            <li>Text Transform</li>
                            <li>Text Overflow</li>
                            <li>Text Wrap</li>
                            <li>Text Indent</li>
                            <li>Vertical Align</li>
                            <li>Whitespace</li>
                            <li>Word Break</li>
                            <li>Hyphens</li>
                            <li>Content</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Backgrounds</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Background Attachment</li>
                            <li>Background Clip</li>
                            <li>Background Color</li>
                            <li>Background Origin</li>
                            <li>Background Position</li>
                            <li>Background Repeat</li>
                            <li>Background Size</li>
                            <li>Background Image</li>
                            <li>Gradient Color Stops</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Borders</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Border Color</li>
                            <li>Border Style</li>
                            <li>Divide Width</li>
                            <li>Divide Color</li>
                            <li>Divide Style</li>
                            <li>Outline Width</li>
                            <li>Outline Color</li>
                            <li>Outline Style</li>
                            <li>Outline Offset</li>
                            <li>Ring Width</li>
                            <li>Ring Color</li>
                            <li>Ring Offset Width</li>
                            <li>Ring Offset Color</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Effects</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Box Shadow</li>
                            <li>Box Shadow Color</li>
                            <li>Opacity</li>
                            <li>Mix Blend Mode</li>
                            <li>Background Blend Mode</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Filters</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Blur</li>
                            <li>Brightness</li>
                            <li>Contrast</li>
                            <li>Drop Shadow</li>
                            <li>Grayscale</li>
                            <li>Hue Rotate</li>
                            <li>Invert</li>
                            <li>Saturate</li>
                            <li>Sepia</li>
                            <li>Backdrop Blur</li>
                            <li>Backdrop Brightness</li>
                            <li>Backdrop Contrast</li>
                            <li>Backdrop Grayscale</li>
                            <li>Backdrop Hue Rotate</li>
                            <li>Backdrop Invert</li>
                            <li>Backdrop Opacity</li>
                            <li>Backdrop Saturate</li>
                            <li>Backdrop Sepia</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Tables</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Border Collapse</li>
                            <li>Border Spacing</li>
                            <li>Table Layout</li>
                            <li>Caption Side</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Transitions & Animation</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Transition Property</li>
                            <li>Transition Duration</li>
                            <li>Transition Timing Function</li>
                            <li>Transition Delay</li>
                            <li>Animation</li>
                        </ul>
                    </li>
                    <li>
                        <h5 className='mb-2 bg-secondary rounded-md p-2'>Transforms</h5>
                        <ul className='*:pl-8 *:mb-2 *:cursor-pointer'>
                            <li>Scale</li>
                            <li>Rotate</li>
                            <li>Translate</li>
                            <li>Skew</li>
                            <li>Transform Origin</li>
                        </ul>
                    </li>

                </ul>
            </div>
            <div className='w-[56%] cursor-default px-6 h-88vh'>
                <Outlet/>
            </div>
            <div className="w-[22%] bg-secondary h-88vh"></div>
        </section>
    )
}

export default Docs
