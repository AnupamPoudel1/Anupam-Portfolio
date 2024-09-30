import { twMerge } from "tailwind-merge";

const ToolboxItems = ({ items, className, itemsWrapperClassName }: {
  items: {
    title: string,
    icons: string
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex mask-text", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {items.map((item) => (
          <div key={item.title} className="inline-flex items-center gap-4 px-3 py-2 outline outline-2 outline-text rounded-lg">
            <span className="size-10">
              <img src={item.icons} alt={item.title} className="size-10" />
            </span>
            <span className="font-semibold">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolboxItems
