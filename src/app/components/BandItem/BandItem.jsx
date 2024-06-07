export default function BandItem({ src, name, event }) {
    return (
        <div className="mx-10 flex items-center justify-center flex-col min-w-[80%] md:min-w-[40%]">
            <div
                style={{ backgroundImage: `url(${src.src})` }}
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20 ">
            </div>
            <div className="flex flex-col gap-1 items-center">
                <h5 className="mt-2">{name}</h5>
                <h6>{event}</h6>
            </div>
        </div>
    )
}