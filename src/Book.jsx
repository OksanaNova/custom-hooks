
export const Book = (props) => {

    const { id, title, price, addToOrder } = props;

    return (
        <div className="book">
            <h2>{title}</h2>
            <span>{price}</span>
            <button onClick={() => addToOrder(id)}>Buy</button>
        </div>
    )
}