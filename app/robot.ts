import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://www.capablehvac.com/"
    return {
        rules: {
            userAgent:"*",
            allow:["/", "/services","/about","/contact","/blog"],
            disallow:[]
        },
        sitemap:`${baseUrl}/sitemap.xml`
    }
}