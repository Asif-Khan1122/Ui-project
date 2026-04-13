import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div
      id='right'
      className='h-[ 100vh ] rounded-4xl overflow-x-auto w-3/3 flex flex-nowrap gap-8 p-6'
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            color={elem.color}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
