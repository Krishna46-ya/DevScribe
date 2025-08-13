'use client'

export function Avator({ name, image }: {
    name?: string,
    image?: string
}) {

    const letter = name?.[0]?.toUpperCase() || 'A'

    return (<>
        <div className="bg-orange-600 aspect-square h-8 flex justify-center items-center rounded-full text-white overflow-hidden">
            {image ? (<img src={image} alt={name || "Avatar"} className="w-full bg-white h-full object-cover" />)
                : (letter)}
        </div>
    </>)
}