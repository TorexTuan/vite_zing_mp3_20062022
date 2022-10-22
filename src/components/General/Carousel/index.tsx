import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const images: any = [
    {
        link: "https://photo-zmp3.zmdcdn.me/banner/a/2/3/d/a23d320b1eb0283c75a929362e1d7ddd.jpg",
        transform: "-translate-x-full opacity-1"
    },
    {
        link: "https://photo-zmp3.zmdcdn.me/banner/a/c/2/0/ac20d33c07f7b2b4e478b7dca98aa94e.jpg",
        transform: "translate-x-0 opacity-1"
    },
    {
        link: "https://photo-zmp3.zmdcdn.me/banner/b/d/0/b/bd0b03b89a3a3c6bd9c9e6661748e94c.jpg",
        transform: "translate-x-full opacity-1"
    },
    {
        link: "https://photo-zmp3.zmdcdn.me/banner/a/d/2/7/ad2720c4f17434c2172a1c2e12ddc12b.jpg",
        transform: "-translate-x-[20%] opacity-0"
    },
    {
        link: "https://photo-zmp3.zmdcdn.me/banner/3/f/3/e/3f3edcd02f3606837beedcacbeea40e5.jpg",
        transform: "translate-x-[20%] opacity-0"
    },
]

function Carousel() {
    return (
        <div className="flex relative">
            {
                images.map((img: any) => (
                    <div className={"px-[15px] " + img.transform}>
                        <a className="rounded-md overflow-hidden block" href="">
                            <figure>
                                <img src={img.link} />
                            </figure>
                        </a>
                    </div>
                ))
            }
            <div className="bg-theme-alpha w-fit h-fit rounded-[50%] absolute left-6 top-1/2 -translate-y-1/2">
                <button className="w-full h-full flex justify-center items-center p-2">
                    <IoIosArrowBack className="text-4xl text-theme-primary" />
                </button>
            </div>
            <div className="bg-theme-alpha w-fit h-fit rounded-[50%] absolute right-6 top-1/2 -translate-y-1/2">
                <button className="w-full h-full flex justify-center items-center p-2">
                    <IoIosArrowForward className="text-4xl text-theme-primary" />
                </button>
            </div>
        </div>
    )
}

export default Carousel;