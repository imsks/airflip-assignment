import { HorizontalLine, SpecificationItem } from "@/components"
import { specifications } from "@/data"
import Image from "next/image"

const Home = () => {
    return (
        <main>
            <header className='px-12 py-6 flex flex-col gap-2'>
                <h1 className='text-4xl font-bold'>
                    Get your Kemper Profiling Amp
                </h1>
                <p className='text-lg text-gray-500'>
                    All your favorite amps and effects, together in one little
                    box.
                </p>
                <HorizontalLine />
            </header>
            <section className='px-12 flex gap-4'>
                <div className='flex flex-col gap-2 w-2/5'>
                    <div className='flex justify-center border border-gray-300 rounded-md'>
                        <Image
                            src='/imgs/1.png'
                            alt='main'
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className='flex gap-2'>
                        <Image
                            src='/imgs/1.png'
                            alt='main'
                            width={150}
                            height={150}
                            className='border-2 border-black rounded-md'
                        />
                        <Image
                            src='/imgs/1.png'
                            alt='main'
                            width={150}
                            height={150}
                            className='border border-gray-300 rounded-md'
                        />
                        <Image
                            src='/imgs/1.png'
                            alt='main'
                            width={150}
                            height={150}
                            className='border border-gray-300 rounded-md'
                        />
                    </div>
                </div>
                <div className='w-3/5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm text-gray-500'>Starting at</p>
                        <h1 className='text-6xl font-extrabold text-gray-900'>
                            $1,799
                        </h1>
                    </div>
                    <div className='mt-3 mb-6 flex flex-col gap-2'>
                        <p className='text-gray-900 font-regular text-lg'>
                            The KEMPER PROFILER™ is the leading-edge digital
                            guitar amplifier and all-in-one effects processor.
                        </p>
                        <p className='text-gray-500 font-regular text-base'>
                            Hailed as a game-changer by guitarists the world
                            over, the PROFILER™ is the first digital guitar amp
                            to really nail the full and dynamic sound of a
                            guitar or bass amp.
                        </p>
                        <p className='text-gray-500 font-regular text-base'>
                            This is made possible by a radical, patented
                            technology and concept which we call PROFILING.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-medium text-gray-900 text-lg'>
                                Form Factor
                            </h4>
                            <ul className='flex gap-2'>
                                <li>
                                    <input
                                        type='radio'
                                        id='profiler-head'
                                        name='hosting'
                                        value='profiler-head'
                                        className='hidden peer'
                                        required
                                    />
                                    <label
                                        htmlFor='profiler-head'
                                        className='inline-flex items-center justify-between w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm text-gray-900 font-medium'>
                                                Profiler Head
                                            </p>
                                            <p className='text-sm text-gray-500 font-regular'>
                                                Compact amplifier head, perfect
                                                for a speaker cabinet or desk.
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type='radio'
                                        id='profiler-rack'
                                        name='hosting'
                                        value='profiler-rack'
                                        className='hidden peer'
                                        required
                                    />
                                    <label
                                        htmlFor='profiler-rack'
                                        className='inline-flex items-center justify-between w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm text-gray-900 font-medium'>
                                                Profiler Rack
                                            </p>
                                            <p className='text-sm text-gray-500 font-regular'>
                                                3U rackmount version of the
                                                classic profiling amplifier.
                                            </p>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-medium text-gray-900 text-lg'>
                                Power Amp
                            </h4>
                            <ul className='flex flex-col gap-2'>
                                <li>
                                    <input
                                        type='radio'
                                        id='none'
                                        name='hosting'
                                        value='none'
                                        className='hidden peer'
                                        required
                                    />
                                    <label
                                        htmlFor='none'
                                        className='inline-flex items-center justify-between w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm text-gray-900 font-medium'>
                                                None
                                            </p>
                                            <p className='text-sm text-gray-500 font-regular'>
                                                Use in the studio or with your
                                                own power amp.
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type='radio'
                                        id='Powered'
                                        name='hosting'
                                        value='Powered'
                                        className='hidden peer'
                                        required
                                    />
                                    <label
                                        htmlFor='Powered'
                                        className='inline-flex items-center justify-between w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black'>
                                        <div className='flex justify-between w-full items-center'>
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm text-gray-900 font-medium'>
                                                    Powered
                                                </p>
                                                <p className='text-sm text-gray-500 font-regular'>
                                                    Built-in 600W solid state
                                                    power amp.
                                                </p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-900 font-regular'>
                                                    + $449
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-medium text-gray-900 text-lg'>
                                Power Amp
                            </h4>
                            <ul className='flex flex-col gap-2'>
                                <li>
                                    <input
                                        type='radio'
                                        id='none-1'
                                        name='hosting'
                                        value='none-1'
                                        className='hidden peer'
                                        required
                                    />
                                    <label
                                        htmlFor='none-1'
                                        className='inline-flex items-center justify-between w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black'>
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm text-gray-900 font-medium'>
                                                None
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type='radio'
                                        id='profiler-remote'
                                        name='hosting'
                                        value='profiler-remote'
                                        className='hidden peer'
                                        required
                                    />
                                    <label
                                        htmlFor='profiler-remote'
                                        className='inline-flex items-center justify-between w-full px-3 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-black'>
                                        <div className='flex justify-between w-full items-center'>
                                            <div className='flex flex-col gap-1'>
                                                <p className='text-sm text-gray-900 font-medium'>
                                                    Profiler Remote Foot
                                                    Controller
                                                </p>
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-900 font-regular'>
                                                    + $449
                                                </p>
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='my-6'>
                        <h5 className='text-gray-900 font-medium text-base mb-[20px]'>
                            Specifications
                        </h5>
                        <HorizontalLine />
                        {specifications.map((specification, index) => {
                            return (
                                <SpecificationItem
                                    {...specification}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <footer className='bg-gray-50'>
                <HorizontalLine />
                <div className='px-12 py-3 flex justify-between gap-2 items-center'>
                    <div className='flex gap-1'>
                        <div className='flex gap-1.5 items-start'>
                            <Image
                                src='/imgs/globe.png'
                                alt='main'
                                width={20}
                                height={2}
                            />
                            <div className='flex flex-col gap-1 items-start'>
                                <p className='text-gray-900 font-medium text-sm'>
                                    Free Shipping
                                </p>
                                <p className='text-gray-500 w-3/4 font-regular text-sm'>
                                    Get 2-day free shipping anywhere in North
                                    America.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-1.5 items-start'>
                            <Image
                                src='/imgs/shield.png'
                                alt='main'
                                width={20}
                                height={2}
                            />
                            <div className='flex flex-col gap-1 items-start'>
                                <p className='text-gray-900 font-medium text-sm'>
                                    2 Year Warranty
                                </p>
                                <p className='text-gray-500 w-3/4 font-regular text-sm'>
                                    If anything goes wrong in the first two
                                    years, we will replace it for free.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex flex-col items-end'>
                            <h2 className='text-gray-900 font-bold text-3xl'>
                                $2,717
                            </h2>
                            <p className='text-gray-500 font-regular text-sm'>
                                Need financing?{" "}
                                <span className='underline'>Learn more</span>
                            </p>
                        </div>
                        <button className='bg-gray-900 text-white py-2 px-3 rounded-md font-medium text-sm'>
                            Buy Now
                        </button>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Home
