
export default function Banner({ image }) {
    const img = { image };
    return (
        <div className="banner-contain">
            <img src={image} alt='' className="banner-img" />
        </div>
    )

}

