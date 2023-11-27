const ProductImgInfo = ({img}) => {
    return (
        <div className="mx-8 w-96">
            <div className="h-96 border-2 overflow-hidden">
                <img src={process.env.PUBLIC_URL + `/images/${img}.jpg`} alt=""/>
            </div>
        </div>
    );
}
export default ProductImgInfo;