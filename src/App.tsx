import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from './components/ui/carousel'
import { Alert, AlertDescription } from '@/components/ui/alert'
import fcsLogo from './assets/FCS Banner.png'
import ensis1 from './assets/Turntable - Ensis1 - noBG.gif'
import ensis2 from './assets/Turntable - Ensis2 - noBG.gif'
import payday from './assets/Turntable - Payday noBG.gif'
import dropshop from './assets/Turntable - Dropshop noBG.gif'
import gameplaygif from './assets/Gameplay - Nim.gif'
import grass from './assets/Grass.gif'
import todo from './assets/Macro VS TODO.png'
import mapBlockout from './assets/Map_Blockout.png'
import canyonMap from './assets/Canyon_Map_2.png'
import nestLogic from './assets/Nest_Spawning_logic.png'
import earlyTest from './assets/Early test.png'
import GDD from './assets/01 - Game Design Document.pdf'
import './App.css'

function App() {
  const [isContentReady, setIsContentReady] = useState(false)


  return (
    <>
      <div className='flex items-center justify-center'>
        <a>
          <img src={fcsLogo} className="animate-fade-in logo hover:scale-110 transition-all duration-300 ease-in-out" alt="FCS logo" sizes='1000'/>
        </a>
      </div>
      
      <div className='space-y-2'>
        <p className='animate-fade-in text-left text-4xl font-bold text-gray-800'>Hi!</p>
        <p className='animate-fade-in text-left text-m text-gray-800'>I’m Lachlan, but when I’m making games I’m <b>Quentin Softpaw</b>, the founder and lead dev of Forest Critter Studios. I have a couple friends helping out where they can, but it’s mostly a solo project.</p>
      </div>

      <Separator className='my-8 animate-fade-in'/>

      <div className='space-y-2 space-x-4'>
        <p className='animate-fade-in text-left text-5xl font-bold text-gray-800'>Violet Sun</p>
        <p className='animate-fade-in text-left text-m text-gray-800'>Violet Sun is Forest Critter Studios’ upcoming debut project. Here’s an excerpt from the Game Design Document pitching the concept:</p>
        
        <div>
          { isContentReady
            ? <div className='animate-fade-in'>                
                <Alert className='w-full mt-4'>
                  <AlertDescription className='text-left italic'>“Violet Sun is a cooperative, roguelike, character based first-person shooter. It should be fully voice acted, colourful, fluid and highly replayable. Players take the role of Contractors, a set of diverse playable characters employed by The Megacorp to clear out a series of planets of dangerous pests and monsters. Players collect upgrades to their character’s kit throughout a run, and persistent upgrades give a small boost of power to Contractors between runs. “</AlertDescription>
                </Alert>
              </div>
            : <Skeleton className='h-26 mt-4'/>
          } 
          <p className='animate-fade-in text-left text-m text-gray-800 mt-3'>It’s a work-in-progress, and I’ve laid out some of that progress here! The fastest way to get a grips on what the game’s up to is to watch these two gameplay update videos I made to share with friends! They don't show off the latest progress, but they give an idea what the game is about. They’re only short.</p>
        </div>
      </div>

      {/*Videos*/}    
      <div className='animate-fade-in flex flex-col md:flex-row gap-5 items-center justify-center mt-6'>       
        <iframe
            className={`animate-fade-in aspect-video w-full justify-center rounded-xl ${!isContentReady ? <Skeleton className='h-24'/> : ''}`}
            src={`https://www.youtube.com/embed/faL_9wo1nGw`}
            allowFullScreen
            onLoad={() => setIsContentReady(true)}
        />
        <iframe
          className={`animate-fade-in aspect-video w-full justify-center rounded-xl ${!isContentReady ? <Skeleton className='h-24'/> : ''}`}
          src={`https://www.youtube.com/embed/I_QzhXlYXPE`}
          allowFullScreen
          onLoad={() => setIsContentReady(true)}
        />
      </div>
      
      <Separator className='my-8 animate-fade-in'/>
      
      {/*Ensis block*/}
      <div className='my-4 ring ring-gray-200 md:ring-transparent rounded-lg justify-center items-center flex md:flex-row flex-col md:gap-2'>
        <div className=''>
          <Carousel className='mx-14 animate-fade-in '>
            <CarouselContent>
              <CarouselItem className='flex items-center justify-center model transition-all duration-300' ><img src={ensis1}></img></CarouselItem>
              <CarouselItem className='flex items-center justify-center model transition-all duration-300' ><img src={ensis2}></img></CarouselItem>
            </CarouselContent>
            <CarouselPrevious></CarouselPrevious>
            <CarouselNext></CarouselNext>
          </Carousel>
        </div>
        <div className='card rounded-xl md:hover:shadow-2xl transition-all duration-500'>
          <p className='my-1 animate-fade-in text-center md:text-left text-4xl font-bold text-gray-800'>Ensis</p>
          <p className='animate-fade-in text-justify md:text-left text-m text-gray-800'>Ensis, the agile swordswoman, is one of the (almost) game-ready characters I've made for Violet sun. You can see her first and second iterations here, alongside the custom two-tone shader I created. It's really performant!</p>
        </div>
      </div>
 
      {/*Payday block*/}
      <div className='my-4 ring ring-gray-200 md:ring-transparent rounded-lg sm:my-16 md:my-4 justify-center items-center flex md:flex-row flex-col-reverse md:gap-2'>
        <div className='card rounded-xl md:hover:shadow-2xl transition-all duration-500'>
          <p className='my-1 animate-fade-in text-center md:text-right text-4xl font-bold text-gray-800'>Payday</p>
          <p className='animate-fade-in text-justify md:text-right text-m text-gray-800'>Payday, the no-nonsense gun-slingin' bounty hunter, has only gone through a single iteration so far. His next pass will involve simplifying his silhoutte and refining his colour palette.</p>
        </div>
        <Carousel className='mx-8 animate-fade-in w-2/3 model transition-all duration-300'>
          <CarouselContent>
            <CarouselItem className='flex justify-center'><img src={payday} className='max-h-[600px]'></img></CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/*Dropshop block*/}
      <div className='min-h-[250px] my-4 ring ring-gray-200 md:ring-transparent rounded-lg sm:my-16 md:my-0 justify-center items-center flex md:flex-row flex-col md:gap-2'>
        <Carousel className='my-4 min-w-1/3 lg:w-2/3 mx-4 model transition-all duration-300 animate-fade-in'>
          <CarouselContent>
            <CarouselItem className='flex justify-center'><img src={dropshop} className='max-h-[500px]'></img></CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className='card w-full rounded-xl md:hover:shadow-2xl transition-all duration-500'>
          <p className='my-1 animate-fade-in text-center md:text-left text-4xl font-bold text-gray-800'>Drop Shops</p>
          <p className='animate-fade-in text-justify md:text-left text-m text-gray-800'>Biz the merchant cat leaves his hastily-painted drop shops on the planets' surfaces. They have three mods for sale, each enhancing player power and abilities.</p>
        </div>
      </div>

      <Separator className='my-8 animate-fade-in md:gap-16'/>
      
      <div className='justify-center items-center flex lg:flex-row flex-col gap-6'>
        <div className='mx-6'>
            <p className='my-4 animate-fade-in text-center md:text-left text-4xl font-bold text-gray-800'>Combat & Environment</p>
            <p className='animate-fade-in text-justify text-m text-gray-800'>Here’s a more recent gameplay gif showcasing the newer UI direction, with dynamic resource pickups and feedback on cooldown completion. The animations for Nim, the character being played, are far from finished!</p>
        </div>
        <img src={gameplaygif} className='animate-fade-in w-full h-1/3 rounded-xl'></img>
      </div>

      <div className='my-16 justify-center items-center flex lg:flex-row flex-col gap-6'>
        <div className='mx-6 min-w-[215px]'>
            <p className='animate-fade-in text-justify text-m text-gray-800'>And here's a showcase of the GPU-instanced grass I made, entirely from shaders with no animations. It’s not usually this dense, but this is still running at ~70 fps.</p>
        </div>
        <img src={grass} className='animate-fade-in w-full h-1/3 rounded-xl'></img>
      </div>

      <Separator className='my-8 animate-fade-in md:gap-16'/>

      <div className='space-y-4 space-x-4'>
        <p className='animate-fade-in text-left text-5xl font-bold text-gray-800'>The process</p>
        <p className='animate-fade-in text-left text-m text-gray-800'>I've been working on Violet Sun for a very long time, and have only ramped up development last year. Here's a glimpse at what I share in my private devlog discord along the way.</p>
      
        <div className='flex flex-col flex-wrap md:flex-row gap-4 md:gap-8 items-center justify-center mt-6'>
          <img src={todo} className='w-full animate-fade-in rounded-xl'></img>
          <img src={nestLogic} className='animate-fade-in rounded-xl'></img>
          <div className='w-full ring ring-gray-200 rounded-lg items-center justify-center flex lg:flex-row flex-col gap-4'>
            <div className='lg:max-w-1/2 animate-fade-in rounded-xl mx-4 my-4'>
              <img src={canyonMap} className='animate-fade-in rounded-xl'></img>
            </div>
            <div className='lg:max-w-1/2 animate-fade-in rounded-xl mx-4 my-4'>
              <img src={mapBlockout} className='animate-fade-in rounded-xl'></img>
            </div>
          </div>
          <div className='w-full items-center justify-center flex lg:flex-row flex-col lg:gap-4'>
            <img src={earlyTest} className='min-w-2/3 animate-fade-in rounded-xl'></img>
            <p className='m-4 animate-fade-in text-left text-m text-gray-600'>This is a screenshot from a much earlier build. How far we've come from here!</p>
          </div>
        </div>
      </div>

      <Separator className='my-8 animate-fade-in md:gap-16'/>
      
      <div className="w-full h-screen">
        <p className='animate-fade-in text-left text-5xl font-bold text-gray-800'>Before you go...</p>
        <p className='my-4 animate-fade-in text-left text-m text-gray-800'>If you're REALLY interested, here's a copy of the Game Design Document that got me this far!</p>
      
        <iframe 
          src={GDD}
          className="w-full h-full rounded-lg shadow-2xl border-none"
          allowFullScreen
        >
        </iframe>
      </div>
    </>
  )
}

export default App
