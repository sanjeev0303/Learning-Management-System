import React, { useEffect, useState } from 'react'
import parse from "html-react-parser"

type HtmlParserProps = {
    html: string
}

const HtmlParser = ({ html }: HtmlParserProps) => {
    // use effect to avoid hydration error with ssr html data
    const [ mounted, setMounted ] = useState<boolean>(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(true)
    }, [])


  return (
    <div className='[&_h1]:text-4xl [&_h2]:text-3xl [&_blockqoute]:italic [&_iframe]:aspect-video [&_h3]:text-2xl text-themeTextGray flex flex-col gap-y-3'>
        {mounted && parse(html)}
    </div>
  )
}

export default HtmlParser
