import React from 'react'

function FontVariantNumeric() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Font Variant Numeric.- incomplete tailwind not working somewheregi</h1>
            <p className='mb-4'>The <span className='font-semibold'>font-variant-numeric</span> utility in LiFrame allows you to control the appearance of numeric characters in text. This is helpful for ensuring that numbers are displayed in a more readable and consistent style, especially in contexts like pricing, dates, or technical data.</p>

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
                            <td className="border-b border-[#ababab] py-2">normal-nums</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: normal;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">ordinal</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: ordinal;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">slashed-zero</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: slashed-zero;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">lining-nums</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: lining-nums;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">oldstyle-nums</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: oldstyle-nums;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">proportional-nums</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: proportional-nums;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">tabular-nums</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: tabular-nums;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">diagonal-fractions</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: diagonal-fractions;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">stacked-fractions</td>
                            <td className="border-b border-[#ababab] py-2">font-variant-numeric: stacked-fractions;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>You can apply numeric variants using classes like <span className='font-semibold'>normal-nums</span> (default) or <span className='font-semibold'>ordinal</span>, <span className='font-semibold'>slashed-zero</span>, or <span className='font-semibold'>lining-nums</span> to control how numeric characters are rendered.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Ordinal</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">ordinal</span> utility to enable special glyphs for the ordinal markers.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black text-center">
                        <p className="ordinal">1st</p>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Slashed Zero</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">slashed-zero</span> utility to force a 0 with a slash; this is useful when a clear distinction between O and 0 is needed.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black flex flex-col items-center">
                        <p className="slashed-zero">0</p>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Lining figures</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">lining-nums</span> utility to use the numeric glyphs that are all aligned by their baseline. This corresponds to the <span className="font-semibold">lnum</span> OpenType feature. This is the default for most fonts.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black flex flex-col items-center">
                        <p className="lining-nums">1234567890</p>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Oldstyle figures</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">oldstyle-nums</span> utility to use numeric glyphs where some numbers have descenders. This corresponds to the <span className="font-semibold">onum</span> OpenType feature.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black flex flex-col items-center">
                        <p className="oldstyle-nums">1234567890</p>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Proportional figures</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">proportional-nums</span>utility to use numeric glyphs that have proportional widths (rather than uniform/tabular). This corresponds to the <span className="font-semibold">pnum</span> OpenType feature.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black flex flex-col items-center">
                        <div className="max-w-sm text-right">
                            <p className="proportional-nums">12121</p>
                            <p className="proportional-nums">90909</p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Tabular figures</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">tabular-nums</span> utility to use numeric glyphs that have uniform/tabular widths (rather than proportional). This corresponds to the <span className="font-semibold">tnum</span> OpenType feature.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black flex flex-col items-center">
                        <div className="max-w-sm text-right">
                            <p className="tabular-nums">12121</p>
                            <p className="tabular-nums">90909</p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Diagonal fractions</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">diagonal-fractions</span> utility to replace numbers separated by a slash with common diagonal fractions. This corresponds to the <span className="font-semibold">frac</span> OpenType feature.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black flex flex-col items-center">
                        <p className="diagonal-fractions">1/2 3/4 5/6</p>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stacked fractions</h6>
                    <p className='mb-4'>Use the <span className="font-semibold">stacked-fractions</span> utility to replace numbers separated by a slash with common stacked fractions. This corresponds to the <span className="font-semibold">afrc</span> OpenType feature. Very few fonts seem to support this feature — we’ve used Ubuntu Mono here.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <p className="stacked-fractions text-center">1/2 3/4 5/6</p>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-24</span>{`">w-24</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-40</span>{`">w-40</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-64</span>{`">w-64</div>
<div class="`}<span className="bg-secondary px-1 py-0.5 rounded">w-96</span>{`">w-96</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Conditional numeric styles can be applied using responsive prefixes, such as <span className='font-semibold'>sm:normal-nums</span> or <span className='font-semibold'>lg:slashed-zero</span>, to change the numeric rendering based on screen size.</p>
            </section>
        </div>
    )
}

export default FontVariantNumeric