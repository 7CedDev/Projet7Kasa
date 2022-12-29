
export default function Banner({ image, txtBanner }) {
    const img = { image };
    return (
        <div className="">
            <img src={image} alt='' className="" />
            <h1 className={txtBanner}>{txtBanner}</h1>
        </div>
    )

}
