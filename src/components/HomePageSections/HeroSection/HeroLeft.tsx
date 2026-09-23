import { useState, useEffect } from "react";
import { heroTitles as titles } from "../../../constants/hero.constant";

const HeroLeft = () => {
    const initialString = `${titles[0].prefix}${titles[0].highlight}${titles[0].suffix || ""}`;
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState(initialString);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentItem = titles[titleIndex];
        const fullString = `${currentItem.prefix}${currentItem.highlight}${currentItem.suffix || ""}`;

        const speed = isDeleting ? 30 : 60;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < fullString.length) {
                    setDisplayText(fullString.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2200);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(fullString.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, titleIndex]);

    const currentItem = titles[titleIndex];
    const prefixLen = currentItem.prefix.length;
    const highlightLen = currentItem.highlight.length;

    let renderedPrefix: string;
    let renderedHighlight = "";
    let renderedSuffix = "";

    if (displayText.length <= prefixLen) {
        renderedPrefix = displayText;
    } else if (displayText.length <= prefixLen + highlightLen) {
        renderedPrefix = currentItem.prefix;
        renderedHighlight = displayText.slice(prefixLen);
    } else {
        renderedPrefix = currentItem.prefix;
        renderedHighlight = currentItem.highlight;
        renderedSuffix = displayText.slice(prefixLen + highlightLen);
    }

    return (
        <div className="hero-left flex flex-col justify-center">
            <div className="hero-title-container min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold text-[#121212] leading-[1.15] xl:leading-[72px] tracking-tight">
                    <span>{renderedPrefix}</span>
                    {renderedHighlight && (
                        <span className="text-[#0e52ff]">{renderedHighlight}</span>
                    )}
                    <span>{renderedSuffix}</span>
                    <span className="typing-cursor font-normal inline-block select-none" />
                </h1>
            </div>
        </div>
    );
};

export default HeroLeft;
