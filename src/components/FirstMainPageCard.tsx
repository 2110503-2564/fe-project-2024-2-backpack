import Image from "next/image"

export default function FirstMainPageCard() {
  return (
    <div className="relative">
        <Image
          src="/img/bigCardBackground.png"
          alt="card bg"
          width={1500}
          height={863}
        />
        <div className="absolute inset-x-0 top-1/12 flex flex-col items-center justify-center">
          <svg className="w-full lg:h-24 md:h-18 sm:h-12 h-8">
            <defs>
              <linearGradient
                id="rainbowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="red" />
                <stop offset="20%" stop-color="orange" />
                <stop offset="40%" stop-color="yellow" />
                <stop offset="60%" stop-color="green" />
                <stop offset="80%" stop-color="blue" />
                <stop offset="100%" stop-color="purple" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
            <text
              textAnchor="middle"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              // font-size="64"
              font-weight="bold"
              fill="url(#rainbowGradient)"
              stroke="black"
              // stroke-width="12"
              paintOrder="stroke fill"
              className="lg:text-6xl lg:stroke-12 md:text-4xl md:stroke-10 sm:text-3xl sm:stroke-8 leading-15"
            >
              Welcome to
            </text>
          </svg>
          <svg className="w-full lg:h-60 md:h-40 sm:h-20 h-10">
            <defs>
              <linearGradient
                id="mutedGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#FF30F1" />
                <stop offset="56%" stop-color="#01106C" />
                <stop offset="100%" stop-color="#30BAFF" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
            <text
              textAnchor="middle"
              x="50%"
              y="50%"
              dominantBaseline="middle"
              font-weight="bold"
              fill="url(#mutedGradient)"
              stroke="white"
              paintOrder="stroke fill"
              className="lg:text-8xl lg:stroke-20 md:text-4xl md:stroke-10 sm:text-3xl sm:stroke-8"
            >
              <tspan x="50%" dy="-20%">
                BackPack
              </tspan>
              <tspan x="50%" dy="1em">
                Coworking Space
              </tspan>
            </text>
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <Image
            src="/img/dorajojo.png"
            alt="bg image"
            width="500"
            height="0"
          />
        </div>
        <div className="absolute left-5 bottom-5 flex flex-row content-center">
          <svg
            width="56"
            height="77"
            viewBox="0 0 56 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.7917 17.2502V45.5835M27.7917 45.5835L38.4167 34.9585M27.7917 45.5835L17.1667 34.9585M3 49.1252C3 55.7003 5.61212 62.0066 10.2614 66.6557C14.9108 71.3052 21.2166 73.9165 27.7917 73.9165C34.3668 73.9165 40.6727 71.3052 45.3222 66.6557C49.9714 62.0066 52.5833 55.7003 52.5833 49.1252V27.8752C52.5833 21.3 49.9714 14.9943 45.3222 10.3449C40.6727 5.69562 34.3668 3.0835 27.7917 3.0835C21.2166 3.0835 14.9108 5.69562 10.2614 10.3449C5.61212 14.9943 3 21.3 3 27.8752V49.1252Z"
              stroke="black"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h2 className="self-center text-3xl font-bold ml-2">scroll down 😈</h2>
        </div>
      </div>
  )
}