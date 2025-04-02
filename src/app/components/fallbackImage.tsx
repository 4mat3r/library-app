import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";

export const FallbackImage = ({
    src,
    alt,
    fallbackImage,
    ...rest
}: ImageProps & { fallbackImage: string }) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <Image
            {...rest}
            alt={alt}
            width={500}
            height={500}
            src={imgSrc ? imgSrc : fallbackImage}
            onError={() => {
                setImgSrc(fallbackImage);
            }}
        />
    );
};
