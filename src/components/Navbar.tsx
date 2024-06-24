const Navbar = () => {
  return (
    <div className='bg-palette-1 flex justify-around py-5 border-b border-palette-2 items-center z-10'>
      <h1 className='text-3xl tracking-widest'>NP<span className="text-palette-3 font-bold tracking-normal">Lookup</span></h1>
      <h2>Created by <a className='underline text-palette-3' href={'https://www.fdufresne.me'} target='_blank'>Félix Dufresne</a></h2>
    </div>
  )
}

export default Navbar