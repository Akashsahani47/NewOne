interface PolicySectionProps {
  title: string;
  imageUrl: string;
  customClasses?: string;
}

const PolicySection = ({ title, imageUrl, customClasses = "" }: PolicySectionProps) => {
  return (
    <div className={` ml-25 flex relative flex-col px-8 py-2 mt-8 text-xl font-semibold leading-tight ${customClasses}`}>
      <img
        src={imageUrl}
        alt="Section background"
        className="object-cover absolute inset-0 "
      />
      <span className="relative z-10 text-white">{title}</span>
    </div>
  );
};

export default PolicySection;
