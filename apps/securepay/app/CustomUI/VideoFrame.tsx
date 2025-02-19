export default function VideoFrame(){
    return(
        <video  src="../../public/bg.webm" className="absolute top-0 left-0 w-full h-full object-cover" loop muted>
           <source src="../../public/bg.webm" type="video/webm" />
        </video>
    );
}