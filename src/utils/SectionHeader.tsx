type Head = {
  headTag: string;
  underTag: string;
};

const SectionHeader = ({ headTag, underTag }: Head) => {
  return (
    <div className="my-8 text-center">
      {/* Header */}
      <h1 className="text-4xl font-bold text-black tracking-wide mb-2 text-center">
        {headTag}
      </h1>
      
      {/* Subtext */}
      <p className="text-lg text-gray-500 text-center">
        {underTag}
      </p>

      {/* Underline */}
      <div className="mt-4 mx-auto w-16 border-b-4 border-yellow-400"></div>
    </div>
  );
};

export default SectionHeader;
