import React from "react";
import Image from "next/image";

//icon
import { GoDotFill } from "react-icons/go";

const detailsObject = {
    title:
        "Paragraphs are the building blocks of papers Many students define paragraphs in terms of <strong>length a paragraph is a group</strong>:  of at least <strong>five</strong>  sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.",
    bullet_points: [
        "Werewolves were consistently rated to be the scariest monsters.",
        "<strong>Ugly vampires were typically</strong> said to be scarier than other types of vampires.",
        "Zombies scored higher  <strong>scariness ratings</strong> with young girls than with young boys.",
        "Clowns, despite being a control  group, scored unexpectedly high scariness ratings.",
    ],
};

const json = {
    text: "<p>A paragraph is defined as “<strong>a group of sentences or a single sentence that forms a unit</strong>” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.</p><p>&nbsp;</p><ul><li>By following these tips, <strong>tricks, and best practices</strong> for bullet points in Excel, you can create visually appealing, organized and reader-friendly spreadsheets, making the data easier to understand and analyze.</li><li>Another important tip for using bullet points effectively in Excel spreadsheets is to use them to break down complex information into smaller, more manageable chunks. This can help readers to better understand the data and identify key trends or patterns.</li><li>Additionally, it’s important to use bullet points in a logical and intuitive way. For example, if you’re presenting a list of steps or instructions, it’s best to use bullet points in a sequential order to make it easier for readers to follow along.</li></ul><p>&nbsp;</p>"
  }
  

const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="md:w-9/12  mx-auto justify-center z-10">
            <div
                className="relative  flex flex-col items-center justify-center text-center text-white "
                style={{ height: "60vh" }}
            >
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <Image
                        height={1400}
                        width={1400}
                        className="min-w-full min-h-full absolute object-cover"
                        src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="service"
                    />
                </div>
                <div className="space-y-2 z-10">
                    <span className="  bg-white text-primary  p-6 text-4xl text-center  border-4 border-black font-extrabold shadow-buttonShadow shadow-black     ">
                        {params.slug}
                    </span>
                </div>
            </div>
            {/* details  */}
            <div className=" m-6 text-gray-900">
                <span className="bg-primary md:text-4xl sm:text-xl text-base sm:font-bold font-normal p-4 uppercase text-white">
                    Details
                </span>
                <div className="p-4">
                    <div className="mt-4" dangerouslySetInnerHTML={{__html: detailsObject.title}} />
                    <div className="p-2">
                        {detailsObject.bullet_points.map((item, index) => (
                            <p className="mb-2 flex justify-start " key={index}>
                                <GoDotFill className="mt-1 mr-2" /> <span dangerouslySetInnerHTML={{__html:item}}/>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <span dangerouslySetInnerHTML={{__html:json.text}}/>
        </div>
    );
};

export default page;
