import Image from "next/image";
import localFont from "next/font/local";
import VideoCard from "@/components/VideoCard";
export default function Home() {
  return (
    <div>
      <VideoCard title={'Snap X Satranga | Full version'} 
      image={'photo.jpg'}
      thumbImage={'thumb.jpg'}
      author={'T-series'}
      views={'1.2M'}
      timestamp={"2 years ago"}
      ></VideoCard>
    </div>
      );
}
