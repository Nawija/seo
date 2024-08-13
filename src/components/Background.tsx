import './Background.css'

export default function Background() {
    return (
        <div className="absolute left-0 top-0 w-full h-full -z-10">
            <div className="bg-animate w-[20vw] h-[20vw] absolute top-[-20vh] left-[15vw] delay-300 rounded-full" />
        </div>
    );
}
