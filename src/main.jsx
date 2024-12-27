import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Docs from './components/Docs/Docs.jsx'
import Components from './components/Compo/Compo.jsx'
import Documentation from './components/Pages/Documentation.jsx'
import AspectRatio from './components/Pages/AspectRatio.jsx'
import Container from './components/Pages/Container.jsx'
import Columns from './components/Pages/Columns.jsx'
import BreakAfter from './components/Pages/BreakAfter.jsx'
import BreakBefore from './components/Pages/BreakBefore.jsx'
import BreakInside from './components/Pages/BreakInside.jsx'
import BoxDecorationBreak from './components/Pages/BoxDecorationBreak.jsx'
import BoxSizing from './components/Pages/BoxSizing.jsx'
import Display from './components/Pages/Display.jsx'
import Floats from './components/Pages/Floats.jsx'
import Clear from './components/Pages/Clear.jsx'
import Isolation from './components/Pages/Isolation.jsx'
import ObjectFit from './components/Pages/ObjectFit.jsx'
import ObjectPosition from './components/Pages/ObjectPosition.jsx'
import Overflow from './components/Pages/Overflow.jsx'
import OverscrollBehavior from './components/Pages/OverscrollBehavior.jsx'
import Position from './components/Pages/Position.jsx'
import TopRightBottomLeft from './components/Pages/TopRightBottomLeft.jsx'
import Visibility from './components/Pages/Visibility.jsx'
import ZIndex from './components/Pages/ZIndex.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} >
            <Route path='' element={<Home />} />
            <Route path='docs' element={<Docs/>} >
                <Route path='' element={<Documentation />} />
                <Route path='aspect-ratio' element={<AspectRatio />} />
                <Route path='container' element={<Container/>} />
                <Route path='columns' element={<Columns/>} />
                <Route path='break-after' element={<BreakAfter/>} />
                <Route path='break-before' element={<BreakBefore/>} />
                <Route path='break-inside' element={<BreakInside/>} />
                <Route path='box-decoration-break' element={<BoxDecorationBreak/>} />
                <Route path='box-sizing' element={<BoxSizing/>} />
                <Route path='display' element={<Display/>} />
                <Route path='floats' element={<Floats/>} />
                <Route path='clear' element={<Clear/>} />
                <Route path='isolation' element={<Isolation/>} />
                <Route path='object-fit' element={<ObjectFit/>} />
                <Route path='object-position' element={<ObjectPosition/>} />
                <Route path='overflow' element={<Overflow/>} />
                <Route path='overscroll-behavior' element={<OverscrollBehavior/>} />
                <Route path='position' element={<Position/>} />
                <Route path='top-right-bottom-left' element={<TopRightBottomLeft/>} />
                <Route path='visibility' element={<Visibility/>} />
                <Route path='z-Index' element={<ZIndex/>} />
            </Route>
            <Route path='components' element={<Components/>} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
