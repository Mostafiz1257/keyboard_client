
type head={
    headTag:string,
    underTag:string
}
const SectionHeader = ({headTag,underTag}:head) => {
  return (
    <div className=" flex justify-center items-center text-center">

    <div className="my-10">
      <h1 className="text-3xl font-bold text-pink-800">{headTag}</h1>
      <p className=" font-bold underline text-teal-800">{underTag}</p>
    </div>
    </div>
  )
}

export default SectionHeader
