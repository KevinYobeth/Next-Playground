export default function GlassmorphismPlayground() {
  return (
    <div className='relative w-full h-full'>
      <div className='flex h-full items-center justify-center bg-gradient-to-r from-red-400 to-amber-400'>
        <div className='w-80 h-32 z-10 absolute backdrop-blur-sm backdrop bg-white bg-opacity-20 rounded-md'></div>
        <div className='w-8 h-8 z-10 absolute mr-48 mb-32 backdrop-blur-sm backdrop bg-white bg-opacity-20 rounded-md'></div>
        <div className='w-12 h-12 z-10 absolute ml-48 mt-32 backdrop-blur-sm backdrop bg-white bg-opacity-20 rounded-md'></div>
        <div className='w-10 h-10 z-10 absolute ml-24 mb-52 backdrop-blur-sm backdrop bg-white bg-opacity-20 rounded-full'></div>
        <h1 className='text-7xl text-white drop-shadow-md'>Glassmorphism</h1>
      </div>
    </div>
  );
}
