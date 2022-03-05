function ItemColors({ item, handleChangeColor }) {
  return (
    <>
      <h5>Cores</h5>
      <div className="item-wrapper__info-color mb-20">
        {item?.colors?.length > 0 ? (
          item.colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className="btn-color-select"
              onClick={() => handleChangeColor(color)}
            ></button>
          ))
        ) : (
          <p>Não há armazéns cadastrados</p>
        )}
      </div>
    </>
  );
}

export default ItemColors;
