import React, { useEffect, useRef, useState } from "react";

const Allheadings = ({ pageChange , highlight='no', subtitle='no'}) => {
    const pages = [
        {
            pagename: 'blogs', 
            heading: 'Radhe Radhe Blog Title', 
            Highlight: 'Radhe Radhe Highlighter', 
            subtitle: 'Radhe Radhe Blog SubTitle',
        },
        {
            pagename: 'news', 
            heading: 'Breaking News Title', 
            Highlight: 'Breaking News Highlighter', 
            subtitle: 'Breaking News SubTitle',
        }
    ];
    const selectedPage = pages.find(page => page.pagename === pageChange);
 
    return (
        <>
            <div class="text-center">
                <h2>
                    {selectedPage.heading}
                    <span style={{ display: highlight === 'no' ? 'none' : 'inline' }} class="color-primary-1 underline">{selectedPage.heading}</span>
                </h2>
                <p style={{ display: subtitle === 'no' ? 'none' : 'inline-block' }} class="opacity">
                    {selectedPage.subtitle}
                </p>
            </div>
        </>
    );
};

export default Allheadings;
