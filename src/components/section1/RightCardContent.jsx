function RightCardContent(props) {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-6 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-12 w-12 flex text-xl font-semibold justify-center items-center'>
        {props.id + 1}
      </h2>
      <div>
        <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nobis
          itaque velit sunt quam maxime.
        </p>
        <div className='flex justify-between'>
          <button
            style={{ backgroundColor: props.color }}
            className=' text-white font-medium px-8 py-2 rounded-full'
          >
            {props.tag}
          </button>
          <button className=' text-white font-medium px-3 py-2 rounded-full'>
            <i className='ri-arrow-right-line'></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent;
