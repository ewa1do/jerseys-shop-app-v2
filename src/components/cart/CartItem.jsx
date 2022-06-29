export const CartItem = ({
  name,
  url,
  description,
  league,
  price,
  brand,
}) => {
  return (
    <>
      <img src={url} />
      <div>
        <h3>{name}</h3>
        <h4>{description || brand}</h4>
        <span>US$ {price}</span>
      </div>
    </>
  );
};
