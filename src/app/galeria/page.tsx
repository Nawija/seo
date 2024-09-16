import { performRequest } from "../../../lib/datocms";
import Gallery from "./_components/Gallery";
// import PageHeader from "@/components/PageHeader";
const PAGE_CONTENT_QUERY = `
{
  allGalers {
    img {
      responsiveImage {
        webpSrcSet
        width
        height
        base64
        src
      }
    }
  }
}`;

type GalleryType = {
    img: {
        url: string;
        height: number;
        width: number;
    };
};

export default async function page() {
    const {
        data: { allGalers },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const allImages = allGalers.flatMap((gallery: GalleryType) => gallery.img);

    return (
        <div className="anim-opacity">
            <h1 className="text-center py-10 lg:py-20 text-2xl font-medium">
                Galeria
            </h1>

                <Gallery allImages={allImages} />

        </div>
    );
}
