import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Docs from './components/Docs/Docs.jsx'
import Components from './components/Compo/Compo.jsx'
/* ====== Layout Page ====== */
import Documentation from './components/Pages/Documentation/Documentation.jsx'
import AspectRatio from './components/Pages/Layout/AspectRatio.jsx'
import Container from './components/Pages/Layout/Container.jsx'
import Columns from './components/Pages/Layout/Columns.jsx'
import BreakAfter from './components/Pages/Layout/BreakAfter.jsx'
import BreakBefore from './components/Pages/Layout/BreakBefore.jsx'
import BreakInside from './components/Pages/Layout/BreakInside.jsx'
import BoxDecorationBreak from './components/Pages/Layout/BoxDecorationBreak.jsx'
import BoxSizing from './components/Pages/Layout/BoxSizing.jsx'
import Display from './components/Pages/Layout/Display.jsx'
import Floats from './components/Pages/Layout/Floats.jsx'
import Clear from './components/Pages/Layout/Clear.jsx'
import Isolation from './components/Pages/Layout/Isolation.jsx'
import ObjectFit from './components/Pages/Layout/ObjectFit.jsx'
import ObjectPosition from './components/Pages/Layout/ObjectPosition.jsx'
import Overflow from './components/Pages/Layout/Overflow.jsx'
import OverscrollBehavior from './components/Pages/Layout/OverscrollBehavior.jsx'
import Position from './components/Pages/Layout/Position.jsx'
import TopRightBottomLeft from './components/Pages/Layout/TopRightBottomLeft.jsx'
import Visibility from './components/Pages/Layout/Visibility.jsx'
import ZIndex from './components/Pages/Layout/ZIndex.jsx'
/* ====== Flex & Grid ====== */
import FlexBasis from './components/Pages/Flex&Grid/FlexBasis.jsx'
import FlexDirection from './components/Pages/Flex&Grid/FlexDirection.jsx'
import FlexWrap from './components/Pages/Flex&Grid/FlexWrap.jsx'
import Flex from './components/Pages/Flex&Grid/Flex.jsx'
import FlexGrow from './components/Pages/Flex&Grid/FlexGrow.jsx'
import FlexShrink from './components/Pages/Flex&Grid/FlexShrink.jsx'
import Order from './components/Pages/Flex&Grid/Order.jsx'
import GridTemplateColumns from './components/Pages/Flex&Grid/GridTemplateColumns.jsx'
import GridColumnStartEnd from './components/Pages/Flex&Grid/GridColumnStartEnd.jsx'
import GridTemplateRows from './components/Pages/Flex&Grid/GridTemplateRows.jsx'
import GridRowStartEnd from './components/Pages/Flex&Grid/GridRowStartEnd.jsx'
import GridAutoFlow from './components/Pages/Flex&Grid/GridAutoFlow.jsx'
import GridAutoColumns from './components/Pages/Flex&Grid/GridAutoColumns.jsx'
import GridAutoRows from './components/Pages/Flex&Grid/GridAutoRows.jsx'
import Gap from './components/Pages/Flex&Grid/Gap.jsx'
import JustifyContent from './components/Pages/Flex&Grid/JustifyContent.jsx'
import JustifyItems from './components/Pages/Flex&Grid/JustifyItems.jsx'
import JustifySelf from './components/Pages/Flex&Grid/JustifySelf.jsx'
import AlignContent from './components/Pages/Flex&Grid/AlignContent.jsx'
import AlignItems from './components/Pages/Flex&Grid/AlignItems.jsx'
import AlignSelf from './components/Pages/Flex&Grid/AlignSelf.jsx'
import PlaceContent from './components/Pages/Flex&Grid/PlaceContent.jsx'
import PlaceItems from './components/Pages/Flex&Grid/PlaceItems.jsx'
import PlaceSelf from './components/Pages/Flex&Grid/PlaceSelf.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
            <Route path='' element={<Home/>} />
            <Route path='docs' element={<Docs/>} >
                <Route path='' element={<Documentation/>} />
                {/* ====== Layout ====== */}
                <Route path='aspect-ratio' element={<AspectRatio/>} />
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
                {/* ====== Flex ====== */}
                <Route path='flex-basis' element={<FlexBasis/>} />
                <Route path='flex-direction' element={<FlexDirection/>} />
                <Route path='flex-wrap' element={<FlexWrap/>} />
                <Route path='flex' element={<Flex/>} />
                <Route path='flex-grow' element={<FlexGrow/>} />
                <Route path='flex-shrink' element={<FlexShrink/>} />
                <Route path='order' element={<Order/>} />
                <Route path='grid-template-columns' element={<GridTemplateColumns/>} />
                <Route path='grid-column-start-end' element={<GridColumnStartEnd/>} />
                <Route path='grid-template-rows' element={<GridTemplateRows/>} />
                <Route path='grid-row-start-end' element={<GridRowStartEnd/>} />
                <Route path='grid-auto-flow' element={<GridAutoFlow/>} />
                <Route path='grid-auto-columns' element={<GridAutoColumns/>} />
                <Route path='grid-auto-rows' element={<GridAutoRows/>} />
                <Route path='gap' element={<Gap/>} />
                <Route path='justify-content' element={<JustifyContent/>} />
                <Route path='justify-items' element={<JustifyItems/>} />
                <Route path='justify-self' element={<JustifySelf/>} />
                <Route path='align-content' element={<AlignContent/>} />
                <Route path='align-items' element={<AlignItems/>} />
                <Route path='align-self' element={<AlignSelf/>} />
                <Route path='place-content' element={<PlaceContent/>} />
                <Route path='place-items' element={<PlaceItems/>} />
                <Route path='place-self' element={<PlaceSelf/>} />
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
