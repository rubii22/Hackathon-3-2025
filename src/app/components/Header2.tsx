import Image from "next/image"

export default function Header2(){
    return(
        <div className="flex justify-between px-2 xl:px-6 ">
        <h4 className="text-[16px] font-medium xl:text-[20px]">New(500)</h4>
        <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
                <p className="text-[14px] xl:text-[16px]">Hide Filters</p>
                <Image src="/filter.png" alt="filter"
                width={20}
                height={20}
                className="w-5 mt-2" />
            </div>
            <div className="flex gap-2 items-center">
                <p className="text-[14px] xl:text-[16px]">Sort By</p>
                <Image src="/down.png" alt="down"
                width={20}
                height={20}
                className="w-5 mt-2" />
            </div>
           
        </div>
        </div>
    )
}