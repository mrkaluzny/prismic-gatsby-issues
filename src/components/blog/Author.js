import React from "react"
import Img from "gatsby-image"

// import SocialMediaLink from "@/components/Blog/SocialMediaLink"

export default function Author({
  data,
  withDescription,
  authorTop,
  readingTime,
  dates,
  date,
}) {
  const { image, name } = data

  return (
    <>
      {authorTop ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center mt-6">
            <div className="rounded-full mx-auto w-12 h-12 bg-grey mr-3 overflow-hidden">
              {image.url !== null && (
                <Img
                  className={`rounded-full mx-auto bg-grey object-cover ${
                    authorTop ? "mr-4" : "mb-4"
                  }`}
                  alt={data.image.alt}
                  fixed={data.image.fixed}
                />
              )}
            </div>
            <div>
              <div className="text-grey text-left font-normal font-mono text-sm">
                {withDescription ? "" : "by"} {name.text}
              </div>
              {readingTime && (
                <div className="flex font-normal text-sm ">
                  <time className="font-mono  text-grey font-normal text-sm">
                    {date}
                  </time>

                  <div className="font-mono dot text-sm mx-1 text-grey">
                    &#8226;
                  </div>
                  <div className="text-grey font-mono  font-normal text-sm">
                    {readingTime}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex text-center mx-auto flex-col border-t border-b border-grey-lightest py-8">
          <div className="flex flex-col sm:flex-row justify-start  items-start">
            <div className="rounded-full mb-2 sm:mb-0 w-12 h-12 sm:mr-6 bg-grey-darker">
              {image.url !== null && (
                <Img
                  className={` rounded-full bg-grey-darker object-cover ${
                    authorTop ? "mr-4" : "mb-4"
                  }`}
                  alt={data.image.alt}
                  fixed={data.image.fixed}
                />
              )}
            </div>
            <div className="text-left">
              <div className="text-black font-medium text-sm">
                {withDescription ? "" : "by"} {name.text}
              </div>
              {data.description.text && (
                <div className="mt-3 font-mono text-grey text-left ">
                  {data.description.text}
                </div>
              )}

              {data.social_media_links.length > 0 && (
                <div
                  className={` items-center ${
                    authorTop
                      ? "hidden xs:flex xs:ml-auto"
                      : "flex mx-auto mt-4"
                  }`}
                >
                  {data.social_media_links.map((item, i) => {
                    return <a>{item.name}</a>
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* <SocialMediaLink data={item} key={i} /> */
